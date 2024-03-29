import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { api } from "../../../lib/api";
import { Loading } from "../../Loading";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  handleRestartFeedbackRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  handleRestartFeedbackRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [comment, setComment] = useState<string>("");
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);

  async function handleSubmitComment(e: FormEvent) {
    e.preventDefault();
    setIsSendingFeedback(true);

    // NOTE: if you want use api, uncomment the code above and delete the seTimeout function below
    // This is only for demo purposes

    // await api.post("/feedbacks", {
    //   type: feedbackType,
    //   comment,
    //   screenshot,
    // });
    // onFeedbackSent();
    // setIsSendingFeedback(false);

    setTimeout(() => {
      onFeedbackSent();
      setIsSendingFeedback(false);
    }, 3000);
  }
  return (
    <>
      <header>
        <button
          type='button'
          onClick={handleRestartFeedbackRequested}
          className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
        >
          <ArrowLeft weight='bold' className='w-4 h-4' />
        </button>
        <span className='text-xl leading-6 flex items-center gap-2'>
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className='w-6 h-6'
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitComment} className='my-4 w-full'>
        <textarea
          placeholder='Conte com detalhes o que está acontecendo...'
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
        />

        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type='submit'
            disabled={comment.length < 5 || isSendingFeedback}
            className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
          >
            {isSendingFeedback ? <Loading /> : "Enviar Feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}

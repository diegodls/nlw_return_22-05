import { SubmitFeedbackUseCase } from "./submit-feedback-uses-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Está tudo bugado!!!!",
        screenshot: "data:image/png;base64,123456789",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should no be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Está tudo bugado!!!!",
        screenshot: "data:image/png;base64,123456789",
      })
    ).rejects.toThrow();
  });

  it("should no be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,123456789",
      })
    ).rejects.toThrow();
  });

  it("should no be able to submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Está tudo bugado!!!!",
        screenshot: "teste.jpg",
      })
    ).rejects.toThrow();
  });
});

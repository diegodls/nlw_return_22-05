import * as FileSystem from "expo-file-system";
import { FileSystemSessionType } from "expo-file-system";
import { ArrowLeft } from "phosphor-react-native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { captureScreen } from "react-native-view-shot";
import { api } from "../../lib/api";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import Button from "../Button";
import ScreenshotButton from "../ScreenshotButton";
import { FeedbackType } from "../Widget";

import { styles } from "./styles";

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);

  function handleTakeScreenshot() {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => setScreenshot(uri))
      .catch((error) => console.log(error));
  }
  function handleRemoveScreenshot() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if (isSendingFeedback) {
      return;
    }
    setIsSendingFeedback(true);

    const screenshotBase64 =
      screenshot &&
      (await FileSystem.readAsStringAsync(screenshot, { encoding: "base64" }));

    // NOTE: if you want use api, uncomment the code above and delete the seTimeout function below
    // This is only for demo purposes

    // try {
    //   await api.post("/feedbacks", {
    //     type: feedbackType,
    //     screenshot: `data:image/png;base64,${screenshotBase64}`,
    //     comment,
    //   });
    //   onFeedbackSent();
    // } catch (error) {
    //   console.log(error);
    //   setIsSendingFeedback(false);
    // }

    setTimeout(() => {
      onFeedbackSent();
    }, 3000);
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onFeedbackCanceled}>
            <ArrowLeft
              size={24}
              weight='bold'
              color={theme.colors.text_secondary}
            />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Image source={feedbackTypeInfo.image} style={styles.image} />
            <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          multiline
          autoCorrect={false}
          onChangeText={setComment}
          placeholder='Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
          placeholderTextColor={theme.colors.text_secondary}
        />
        <View style={styles.footer}>
          <ScreenshotButton
            screenshot={screenshot}
            onTakenShot={handleTakeScreenshot}
            onRemoveShot={handleRemoveScreenshot}
          />
          <Button isLoading={isSendingFeedback} onPress={handleSendFeedback} />
        </View>
      </View>
    </>
  );
}

export default Form;

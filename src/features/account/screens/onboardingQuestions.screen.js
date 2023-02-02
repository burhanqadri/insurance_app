import {
  ActivityIndicator,
  Button,
  Checkbox,
  ProgressBar,
  RadioButton,
  TextInput,
} from "react-native-paper";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const questions = [
  {
    id: 1,
    type: "multiple-choice",
    question: "What's your favorite color?",
    options: [
      {
        id: 1,
        value: "Red",
      },
      {
        id: 2,
        value: "Green",
      },
      {
        id: 3,
        value: "Blue",
      },
      {
        id: 4,
        value: "Yellow",
      },
    ],
  },
  {
    id: 2,
    type: "select-multiple",
    question: "What are your favorite sports?",
    options: [
      {
        id: 1,
        value: "Basketball",
      },
      {
        id: 2,
        value: "Soccer",
      },
      {
        id: 3,
        value: "Tennis",
      },
      {
        id: 4,
        value: "Running",
      },
    ],
  },
  // ...
];

export const OnboardingQuestionsScreen = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await AsyncStorage.setItem("answers", JSON.stringify(answers));
      setLoading(false);
      // Navigate to next screen
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleMultipleChoice = (optionId) => {
    setAnswers({
      ...answers,
      [currentQuestion]: optionId,
    });
  };

  const handleSelectMultiple = (optionId) => {
    setAnswers({
      ...answers,
      [currentQuestion]: [...answers[currentQuestion], optionId],
    });
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case "multiple-choice":
        return (
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>
              {question.question}
            </Text>
            {question.options.map((option) => (
              <RadioButton.Item
                key={option.id}
                label={option.value}
                value={option.id}
                onPress={() => handleMultipleChoice(option.id)}
                checked={answers[currentQuestion] === option.id}
              />
            ))}
          </View>
        );
      case "select-multiple":
        return (
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>
              {question.question}
            </Text>
            {question.options.map((option) => (
              <Checkbox
                key={option.id}
                status={
                  answers[currentQuestion] &&
                  answers[currentQuestion].includes(option.id)
                    ? "checked"
                    : "unchecked"
                }
                onPress={() => handleSelectMultiple(option.id)}
              />
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {renderQuestion(questions[currentQuestion])}
      </View>
      <View style={{ padding: 20 }}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button mode="contained" onPress={handleSubmit}>
            Submit
          </Button>
        )}
      </View>
    </ScrollView>
  );
};

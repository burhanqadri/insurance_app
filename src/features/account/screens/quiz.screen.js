import { Button, FAB, Provider, RadioButton } from "react-native-paper";
import React, { useState } from "react";
import { Text, View } from "react-native";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
    explanation: "Paris is the capital of France.",
  },
  {
    question: "What is the tallest mammal?",
    options: ["Elephant", "Giraffe", "Hippopotamus", "Rhinoceros"],
    correctAnswer: "Giraffe",
    explanation: "The giraffe is the tallest mammal.",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
    explanation: "Jupiter is the largest planet in our solar system.",
  },
];

export const QuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleNextPress = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <Provider>
      <View style={{ flex: 1, padding: 20 }}>
        {currentQuestionIndex < questions.length ? (
          <View>
            <Text style={{ fontSize: 20 }}>
              {questions[currentQuestionIndex].question}
            </Text>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <RadioButton.Item
                key={index}
                label={option}
                value={option}
                onPress={() => handleOptionPress(option)}
                checked={selectedOption === option}
              />
            ))}
          </View>
        ) : (
          <View>
            <Text style={{ fontSize: 20 }}>
              Your score is {score} out of {questions.length}.
            </Text>
          </View>
        )}
        {selectedOption ? (
          <View>
            <Text style={{ fontSize: 16, marginTop: 20 }}>
              {selectedOption === questions[currentQuestionIndex].correctAnswer
                ? "Correct!"
                : "Incorrect"}
            </Text>
            <Text style={{ fontSize: 16, marginTop: 10 }}>
              {questions[currentQuestionIndex].explanation}
            </Text>
            <FAB
              style={{ position: "absolute", right: 0, bottom: 0 }}
              icon="arrow-right"
              onPress={handleNextPress}
            />
          </View>
        ) : null}
      </View>
    </Provider>
  );
};

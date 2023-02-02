import { Button, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";

const questions = [
  {
    id: 1,
    prompt: "Question 1",
    options: ["Option A", "Option B", "Option C"],
  },
  {
    id: 2,
    prompt: "Question 2",
    options: ["Option X", "Option Y", "Option Z"],
  },
  //...
];

export const StartQuestionsScreen = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [responses, setResponses] = useState({});

  const handleSubmit = async () => {
    try {
      const surveyResponses = {
        name,
        email,
        ...responses,
      };
      await AsyncStorage.setItem(
        "surveyResponses",
        JSON.stringify(surveyResponses)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View>
            <Text>Name:</Text>
            <TextInput value={name} onChangeText={setName} />
            <Button title="Next" onPress={() => setStep(2)} />
          </View>
        );
      case 2:
        return (
          <View>
            <Text>Email:</Text>
            <TextInput value={email} onChangeText={setEmail} />
            <Button title="Next" onPress={() => setStep(3)} />
          </View>
        );
      default:
        if (step > 2 && step <= 2 + questions.length) {
          const currentQuestion = questions[step - 3];
          return (
            <View>
              <Text>{currentQuestion.prompt}:</Text>
              <Picker
                selectedValue={responses[currentQuestion.id]}
                onValueChange={(itemValue) =>
                  setResponses({
                    ...responses,
                    [currentQuestion.id]: itemValue,
                  })
                }
              >
                {currentQuestion.options.map((option) => (
                  <Picker.Item key={option} label={option} value={option} />
                ))}
              </Picker>
              {step === 2 + questions.length ? (
                <Button title="Submit" onPress={handleSubmit} />
              ) : (
                <Button title="Next" onPress={() => setStep(step + 1)} />
              )}
            </View>
          );
        } else {
          return null;
        }
    }
  };

  return <View>{renderStep()}</View>;
};

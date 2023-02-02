import { Button, Image, Text, View } from "react-native";
import React, { useState } from "react";

const onboardingScreens = [
  {
    id: 1,
    title: "Screen 1 Title",
    text: "Screen 1 Text",
    image: require("../../../../assets/pic_1.jpg"),
  },
  {
    id: 2,
    title: "Screen 2 Title",
    text: "Screen 2 Text",
    image: require("../../../../assets/pic_2.jpg"),
  },
  {
    id: 3,
    title: "Screen 3 Title",
    text: "Screen 3 Text",
    image: require("../../../../assets/pic_7.jpg"),
  },
  {
    id: 4,
    title: "Screen 4 Title",
    text: "Screen 4 Text",
    image: require("../../../../assets/pic_4.jpg"),
  },
];

export const OnboardingExplainersScreen = ({ navigation }) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1);
  };

  const handleSkip = () => {
    setCurrentScreen(onboardingScreens.length - 1);
  };

  return (
    <View>
      {currentScreen < onboardingScreens.length ? (
        <View>
          <Text>{onboardingScreens[currentScreen].title}</Text>
          <Text>{onboardingScreens[currentScreen].text}</Text>
          <Image source={onboardingScreens[currentScreen].image} />
          <Button title="Next" onPress={handleNext} />
          <Button title="Skip" onPress={handleSkip} />
        </View>
      ) : (
        <Text>Onboarding complete!</Text>
      )}
    </View>
  );
};

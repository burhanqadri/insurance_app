import { Button, Image, Text, View } from "react-native";
import React, { useState } from "react";

const onboardingScreens = [
  {
    id: 1,
    title: "Screen 1 Title",
    text: "Screen 1 Text",
    image: require("./screen1.png"),
  },
  {
    id: 2,
    title: "Screen 2 Title",
    text: "Screen 2 Text",
    image: require("./screen2.png"),
  },
  {
    id: 3,
    title: "Screen 3 Title",
    text: "Screen 3 Text",
    image: require("./screen3.png"),
  },
  {
    id: 4,
    title: "Screen 4 Title",
    text: "Screen 4 Text",
    image: require("./screen4.png"),
  },
  {
    id: 5,
    title: "Screen 5 Title",
    text: "Screen 5 Text",
    image: require("./screen5.png"),
  },
  //...
];

const OnboardingExplainersScreen = () => {
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

export default OnboardingExplainersScreen;

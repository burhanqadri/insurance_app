import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Caption, Text as TextPaper } from "react-native-paper";
import React, { useState } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  image: {
    width: wp("70%"),
    height: wp("70%"),
    borderRadius: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: wp("60%"),
    marginVertical: 20,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
});

export const OnboardingExplainersScreen = ({ navigation }) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1);
  };

  const handleSkip = () => {
    setCurrentScreen(onboardingScreens.length - 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {currentScreen < onboardingScreens.length ? (
        <View>
          <TextPaper style={styles.title}>
            {onboardingScreens[currentScreen].title}
          </TextPaper>
          <TextPaper style={styles.text}>
            {onboardingScreens[currentScreen].text}
          </TextPaper>
          <Image
            source={onboardingScreens[currentScreen].image}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.buttonContainer}>
            {currentScreen !== onboardingScreens.length - 1 && (
              <Button title="Next" onPress={handleNext} color="#000" />
            )}
            {currentScreen === onboardingScreens.length - 1 && (
              <Button
                title="Done"
                onPress={() => navigation.navigate("Home")}
                color="#000"
              />
            )}
            <Button title="Skip" onPress={handleSkip} color="#000" />
          </View>
          <View style={styles.paginationContainer}>
            {onboardingScreens.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  {
                    backgroundColor: index === currentScreen ? "black" : "gray",
                  },
                ]}
              />
            ))}
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>All Done!</Text>
          <Text style={styles.text}>
            You have completed all the onboarding screens.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.buttonContainer}
          >
            <Caption style={{ color: "#000" }}>Go to Home</Caption>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

import { CompanySelectScreen } from "../../features/account/screens/companySelect.screen";
import { Header } from "../../components/header/header.component";
import { InterestedBenefitsScreen } from "../../features/account/screens/interestedBenefits.screen";
import { OnboardingExplainersScreen } from "../../features/account/screens/onboardingExplainers.screen";
import { ProfileScreen } from "../../features/account/screens/profile.screen";
import React from "react";
import { StartQuestionsScreen } from "../../features/account/screens/startQuestions.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: (props) => <Header />,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: "#fd2ff9",
      },
      headerBackVisible: false,
    }}
  >
    {/* <Stack.Screen
      name="OnboardingExplainers"
      component={OnboardingExplainersScreen}
    /> */}
    {/* <Stack.Screen name="StartQuestions" component={StartQuestionsScreen} /> */}
    <Stack.Screen
      name="InterestedBenefits"
      component={InterestedBenefitsScreen}
    />
    <Stack.Screen name="CompanySelect" component={CompanySelectScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

import { CompanySelectScreen } from "../../features/settings/screens/companySelect.screen";
import { Header } from "../../components/header/header.component";
import { OnboardingExplainersScreen } from "../../features/account/screens/onboardingExplainers.screen";
import { PhoneLoginScreen } from "../../features/account/screens/phoneLogin.screen";
import { PlanSelectScreen } from "../../features/settings/screens/planSelect.screen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { OnboardingQuestionsScreen } from "../../features/account/screens/onboardingQuestions.screen";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      contentStyle: {
        backgroundColor: "#FFFFFF",
      },
      headerTitle: (props) => <Header />,
      headerShadowVisible: false,
      headerBackVisible: false,
    }}
  >
    <Stack.Screen name="PhoneLogin" component={PhoneLoginScreen} />
    <Stack.Screen name="CompanySelect" component={CompanySelectScreen} />
    <Stack.Screen name="PlanSelect" component={PlanSelectScreen} />
    <Stack.Screen
      name="OnboardingExplainers"
      component={OnboardingExplainersScreen}
    />
    {/* <Stack.Screen
      name="OnboardingQuestions"
      component={OnboardingQuestionsScreen}
    /> */}
  </Stack.Navigator>
);

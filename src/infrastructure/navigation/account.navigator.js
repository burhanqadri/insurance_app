//@collapse

// import { ConnectCreditCardScreen } from "../../features/account/screens/07_connectCreditCard.screen";
// import { EmailAddressScreen } from "../../features/account/screens/02_enterEmail.screen";
// import { EnterNameScreen } from "../../features/account/screens/01_enterName.screen";
// import { SetReasonsScreen } from "../../features/account/screens/04_setReasons.screen";

import React from "react";
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
    <Stack.Screen name="EnterName" component={EnterNameScreen} />
    <Stack.Screen name="EmailAddress" component={EmailAddressScreen} />
    <Stack.Screen
      name="OnboardingQuestions"
      component={OnboardingQuestionsScreen}
    />
    {/* <Stack.Screen name="SetReasons" component={SetReasonsScreen} /> */}
    {/* <Stack.Screen name="YourThreeHabits" component={YourThreeHabitsScreen} /> */}
    <Stack.Screen
      name="AccountabilityPhoneNumbers"
      component={AccountabilityPhoneNumbersScreen}
    />
    {/* <Stack.Screen
      name="ConnectCreditCard"
      component={ConnectCreditCardScreen}
    /> */}
    <Stack.Screen name="EnterPhone" component={EnterPhoneScreen} />
  </Stack.Navigator>
);

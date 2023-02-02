import { FontAwesome5 } from "@expo/vector-icons";
import { Header } from "../../components/header/header.component";
import { LearnScreen } from "../../features/learn/screens/learn.screen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const LearnNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      contentStyle: {
        backgroundColor: "#FFFFFF",
      },
      headerTitle: (props) => <Header />,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: "#fffff9",
      },
    }}
  >
    <Stack.Screen name="Learn" component={LearnScreen} />
    {/* <Stack.Screen name="ProviderDetail" component={ProviderDetailScreen} /> */}
  </Stack.Navigator>
);

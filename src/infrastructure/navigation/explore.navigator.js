import { FeelingScreen } from "../../features/explore/screens/feeling.screen";
import { Header } from "../../components/header/header.component";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { ServiceListScreen } from "../../features/main/screens/serviceLst.screen";


const Stack = createNativeStackNavigator();

export const ExploreNavigator = () => (
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
    <Stack.Screen name="Feeling" component={FeelingScreen} />
    {/* <Stack.Screen name="ServiceList" component={ServiceListScreen} /> */}
  </Stack.Navigator>
);

import React, { useContext, useEffect } from "react";

import { Header } from "../../components/header/header.component";
import { Ionicons } from "@expo/vector-icons";
import { MainNavigator } from "./main.navigator";
import { ProfileScreen } from "../../features/account/screens/profile.screen";
import { colors } from "../../infrastructure/theme/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { LearnNavigator } from "./learn.navigator";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  HomeTab: "md-home",
  LearnTab: "book",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: colors.brand.primary,
    tabBarInactiveTintColor: colors.brand.muted,
    tabBarShowLabel: false,
    headerShown: false,
    // tabBarStyle: {
    //     display: "none",
    //   },
    //   tabBarButton: () => null,
    // tabBarStyle: { borderTopWidth: 0, elevation: 0 },
  };
};

function Tabs() {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="HomeTab" component={MainNavigator} />
      {/* <Tab.Screen name="LearnTab" component={LearnNavigator} /> */}
    </Tab.Navigator>
  );
}

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: (props) => <Header />,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#fffff9",
        },
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
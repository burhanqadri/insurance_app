import { FontAwesome5 } from "@expo/vector-icons";
import { Header } from "../../components/header/header.component";
import { PlanOverviewScreen } from "../../features/main/screens/planOverview.screen";
import { ProviderProfileScreen } from "../../features/main/screens/providerProfile.screen";
import { ProviderSearchScreen } from "../../features/main/screens/providerSearch.screen";
import React from "react";
import { ServiceDetailScreen } from "../../features/main/screens/serviceDetail.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const MainNavigator = () => (
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
    <Stack.Screen name="PlanOverview" component={PlanOverviewScreen} />
    <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
    {/* <Stack.Screen name="ProviderSearch" component={ProviderSearchScreen} /> */}
    <Stack.Screen name="ProviderProfile" component={ProviderProfileScreen} />
  </Stack.Navigator>
);

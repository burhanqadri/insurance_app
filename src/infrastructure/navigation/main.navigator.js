import { FontAwesome5 } from "@expo/vector-icons";
import { Header } from "../../components/header/header.component";
import { PlanOverviewScreen } from "../../features/main/screens/planOverview.screen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { ProviderDetailScreen } from "../../features/main/screens/providerDetail.screen";
// import { ServiceDetailScreen } from "../../features/main/screens/serviceDetail.screen";

const Stack = createNativeStackNavigator();

export const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: (props) => <Header />,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: "#fffff9",
      },
    }}
  >
    <Stack.Screen name="PlanOverview" component={PlanOverviewScreen} />
    {/* <Stack.Screen name="ProviderDetail" component={ProviderDetailScreen} /> */}
    {/* <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} /> */}
  </Stack.Navigator>
);

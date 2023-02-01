import React, { useContext } from "react";

import { AccountNavigator } from "./account.navigator";
import { AppNavigator } from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AccountNavigator />
      {/* {uid ? <AppNavigator /> : <AccountNavigator />} */}
    </NavigationContainer>
  );
};

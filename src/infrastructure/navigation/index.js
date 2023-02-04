import React, { useContext } from "react";

import { AccountNavigator } from "./account.navigator";
import { AppNavigator } from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { useFirebase } from "../../services/firebase/firebase.context";

export const Navigation = () => {
  const { user, loading } = useFirebase();

  return (
    <NavigationContainer>
      {/* {!loading && user ? <AppNavigator /> : <AccountNavigator />} */}
      {/* <AccountNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
};

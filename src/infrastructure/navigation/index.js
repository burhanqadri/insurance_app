import React, { useContext } from "react";

import { AccountNavigator } from "./account.navigator";
import { AppNavigator } from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { useFirebase } from "../../services/firebase/firebase.context";

export const Navigation = () => {
  const { firebaseUser, loading } = useFirebase();
  // const { user, loading } = useFirebase();

  return (
    <NavigationContainer>
      {/* {!loading && firebaseUser ? <AppNavigator /> : <AccountNavigator />} */}
      {/* <AccountNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
};

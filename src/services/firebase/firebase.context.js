import "firebase/auth";

import React, { useContext, useEffect, useRef, useState } from "react";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import firebase, { initializeApp } from "firebase/app";

import { AppState } from "react-native";
import { UserDataContext } from "../userData/userData.context";
import { getAnalytics } from "firebase/analytics";

const FirebaseContext = React.createContext(null);

export const useFirebase = () => React.useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { appUser, setAppUser, func_getUser } = useContext(UserDataContext);

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(async (firebaseUser) => {
      setAppUser({ ...appUser, uid: firebaseUser.uid });
      setFirebaseUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && firebaseUser) {
      console.log("call from loading", firebaseUser.uid);
      func_getUser(firebaseUser.uid);
      console.log("call complete from loading");
    }
  }, [loading]);

  // Useffect for when to update  *******************************************************************
  useEffect(() => {
    console.log("STARTING", loading, appUser);
    if (!loading) {
      try {
        console.log("print here");
        func_getUser(firebaseUser.uid);
      } catch (error) {
        console.log("ERROR", error);
        func_getUser(appUser.uid);
        console.log("FIXED");
      }
    }
    const subscription = AppState.addEventListener(
      "change",
      async (nextAppState) => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === "active"
        ) {
          console.log("INSIDE RUNNING");
          try {
            if (!loading) func_getUser(firebaseUser.uid);
          } catch (error) {
            func_getUser(appUser.uid);
            console.log("ERROR", error);
          }
        }

        appState.current = nextAppState;
        setAppStateVisible(appState.current);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const logout = async () => {
    await getAuth().signOut();
  };

  return (
    <FirebaseContext.Provider
      value={{
        firebaseUser,
        loading,
        logout,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

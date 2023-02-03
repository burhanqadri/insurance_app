import "firebase/auth";

import React, { useEffect, useState } from "react";

import firebase from "firebase/app";
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

const FirebaseContext = React.createContext(null);

export const useFirebase = () => React.useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //consider moving outside the function
  const firebaseConfig = {
    apiKey: "AIzaSyA-k-xZiHDE7kMpb8PM5XKfyIoBmIriGug",
    authDomain: "insurance-app-583d1.firebaseapp.com",
    projectId: "insurance-app-583d1",
    storageBucket: "insurance-app-583d1.appspot.com",
    messagingSenderId: "701603437103",
    appId: "1:701603437103:web:f5fe6a0f1303bd329904da",
    measurementId: "G-BFRZCDF00R",
  };

  initializeApp(firebaseConfig);

  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
  //     setUser(user);
  //     setLoading(false);
  //   });
  //   return () => unsubscribe();
  // }, []);

  // const signInWithPhoneNumber = async (phoneNumber) => {
  //   const confirmationResult = await firebase
  //     .auth()
  //     .signInWithPhoneNumber(phoneNumber);

  //   return confirmationResult;
  // };

  // //might have to reverse the arguments in this function...
  // const confirmVerificationCode = async (confirmationResult, code) => {
  //   const user = await confirmationResult.confirm(code);

  //   setUser(user);

  //   return user;
  // };

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        loading,
        // signInWithPhoneNumber,
        // confirmVerificationCode,
        // logout,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

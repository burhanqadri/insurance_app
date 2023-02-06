import "firebase/auth";

import React, { useContext, useEffect, useState } from "react";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import firebase, { initializeApp } from "firebase/app";

import { UserDataContext } from "../userData/userData.context";
import { getAnalytics } from "firebase/analytics";

const FirebaseContext = React.createContext(null);

export const useFirebase = () => React.useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(async (firebaseUser) => {
      setFirebaseUser(firebaseUser);
      console.log(firebaseUser);
      console.log("UID", firebaseUser.uid);
      console.log("running!!");
      setLoading(false);
    });
    return () => unsubscribe();
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

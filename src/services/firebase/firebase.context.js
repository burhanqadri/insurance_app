import "firebase/auth";

import React, { useEffect, useState } from "react";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import firebase, { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const FirebaseContext = React.createContext(null);

export const useFirebase = () => React.useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(async (user) => {
      setUser(user);
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
        user,
        loading,
        logout,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

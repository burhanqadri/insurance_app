import "firebase/auth";

import React, { useEffect, useState } from "react";

import firebase from "firebase/app";

const FirebaseContext = React.createContext(null);

export const useFirebase = () => React.useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithPhoneNumber = async (phoneNumber) => {
    const confirmationResult = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber);

    return confirmationResult;
  };

  //might have to reverse the arguments in this function...
  const confirmVerificationCode = async (confirmationResult, code) => {
    const user = await confirmationResult.confirm(code);

    setUser(user);

    return user;
  };

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        loading,
        signInWithPhoneNumber,
        confirmVerificationCode,
        logout,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

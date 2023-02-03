import "firebase/auth";

import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import React, { useState } from "react";

import firebase from "firebase/app";
import { useFirebase } from "./FirebaseContext";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
};

firebase.initializeApp(firebaseConfig);

export const PhoneSignIn = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { signInWithPhoneNumber, confirmVerificationCode } = useFirebase();

  const handleSignInWithPhoneNumber = async () => {
    try {
      setIsLoading(true);
      const confirmation = await signInWithPhoneNumber(phoneNumber);
      setConfirmationResult(confirmation);
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  };

  const handleConfirmVerificationCode = async () => {
    try {
      setIsLoading(true);
      await confirmVerificationCode(verificationCode, confirmationResult);
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {!confirmationResult ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Button
              style={styles.button}
              mode="contained"
              onPress={handleSignInWithPhoneNumber}
            >
              Send Verification Code
            </Button>
          )}
        </View>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Verification Code"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="number-pad"
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Button
              style={styles.button}
              mode="contained"
              onPress={handleConfirmVerificationCode}
            >
              Submit Verification Code
            </Button>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    color: "red",
    marginTop: 20,
    textAlign: "center",
  },
});

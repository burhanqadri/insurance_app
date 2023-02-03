import {
  ActivityIndicator,
  Animated,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  PhoneAuthProvider,
  getAuth,
  signInWithCredential,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { getApp, getApps, initializeApp } from "firebase/app";

import { Button } from "react-native-paper";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { Ionicons } from "@expo/vector-icons";
import PhoneInput from "react-native-phone-number-input";
import { SafeArea } from "../../../components/container/safeArea.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";
import { useFirebase } from "../../../services/firebase/firebase.context";

// *******************************************************

const PhoneInputContainer = styled(View)`
  margin: 20px;
  margin-bottom: 70px;
  padding: 5px;
  border-radius: 10px;
  align-self: center;
`;

const Title = styled(Text)`
  margin-top: 70px;
  margin: 20px;
  font-size: 30px;
  color: ${(props) => props.theme.colors.ui.primary};
  text-align: center;
`;

// *********************************************************************************
const firebaseConfig = {
  apiKey: "AIzaSyA-k-xZiHDE7kMpb8PM5XKfyIoBmIriGug",
  authDomain: "insurance-app-583d1.firebaseapp.com",
  projectId: "insurance-app-583d1",
  storageBucket: "insurance-app-583d1.appspot.com",
  messagingSenderId: "701603437103",
  appId: "1:701603437103:web:f5fe6a0f1303bd329904da",
  measurementId: "G-BFRZCDF00R",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const app = getApp();
const auth = getAuth();

// **************************************
export const PhoneLoginScreen = ({ navigation }) => {
  const { loading, setLoading } = useFirebase();

  const [value, setValue] = useState("");

  const recaptchaVerifier = React.useRef(null);
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(PhoneInput);

  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();

  const [message, showMessage] = React.useState();
  const attemptInvisibleVerification = true;

  return (
    <SafeArea>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>
          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={app.options}
            attemptInvisibleVerification
          />
          {!verificationId ? (
            <View>
              <Title>What's your phone number?</Title>
              <PhoneInputContainer>
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={phoneNumber}
                  defaultCode="CA"
                  layout="first"
                  onChangeText={(p) => {
                    setPhoneNumber(p);
                  }}
                  onChangeFormattedText={(p) => {
                    setFormattedValue(p);
                  }}
                  withDarkTheme
                  withShadow
                  autoFocus
                />
              </PhoneInputContainer>
              <Spacer size="small">
                {!loading ? (
                  <Button
                    onPress={async () => {
                      try {
                        const phoneProvider = new PhoneAuthProvider(auth);
                        const verificationId =
                          await phoneProvider.verifyPhoneNumber(
                            formattedValue,
                            recaptchaVerifier.current
                          );
                        setVerificationId(verificationId);
                        showMessage({
                          text: "Verification code has been sent to your phone.",
                        });
                        // setIsLoading(true);
                      } catch (err) {
                        console.log(
                          "Error in phone sign-in",
                          err.message,
                          phoneNumber,
                          formattedValue
                        );
                        showMessage({
                          text: `Error: ${err.message}`,
                          color: "red",
                        });
                      }
                    }}
                  >
                    Send code
                  </Button>
                ) : (
                  <ActivityIndicator animating={true} />
                )}
              </Spacer>
            </View>
          ) : (
            <View>
              <View style={styles.container}>
                <Text style={styles.headerText}>Verification</Text>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/women/44.jpg",
                  }}
                  style={styles.image}
                />
                <Text style={styles.instructionsText}>
                  Please enter the verification code{"\n"}
                  we sent to your phone number
                </Text>
                <TextInput
                  style={styles.input}
                  value={verificationCode}
                  onChangeText={setVerificationCode}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                />
              </View>
              {verificationCode ? (
                <Button
                  onPress={async () => {
                    try {
                      const credential = PhoneAuthProvider.credential(
                        verificationId,
                        verificationCode
                      );
                      await signInWithCredential(auth, credential);
                      showMessage({
                        text: "Phone authentication successful 👍",
                      });
                      console.log("Signed in!");
                    } catch (err) {
                      showMessage({
                        text: `Error: ${err.message}`,
                        color: "red",
                      });
                      setVerificationCode();
                    }
                  }}
                >
                  Verify code
                </Button>
              ) : null}
            </View>
          )}
        </>
      </TouchableWithoutFeedback>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
  instructionsText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: 200,
    fontSize: 16,
    marginVertical: 20,
    textAlign: "center",
  },
});

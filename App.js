import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { StyleSheet, Text, View } from "react-native";
import { getApps, initializeApp } from "firebase/app";

import { FirebaseProvider } from "./src/services/firebase/firebase.context";
import { Navigation } from "./src/infrastructure/navigation";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { UserDataContextProvider } from "./src/services/userData/userData.context";
import { onError } from "@apollo/client/link/error";
import { theme } from "./src/infrastructure/theme";

// FIREBASE ********************************
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
// APOLLO ********************************
const httpLink = new HttpLink({
  uri: "https://insuranceapp.herokuapp.com/graphql",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  // The `from` function combines an array of individual links into a link chain
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({ resultCaching: false }), //TO DO fix the caching
});

// RETURN ********************************
export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <UserDataContextProvider>
          <FirebaseProvider>
            <ThemeProvider theme={theme}>
              <Navigation />
            </ThemeProvider>
          </FirebaseProvider>
        </UserDataContextProvider>
      </ApolloProvider>
      <StatusBar style="auto" />
    </>
  );
}

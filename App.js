import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { StyleSheet, Text, View } from "react-native";

import { FirebaseProvider } from "./src/services/firebase/firebase.context";
import { Navigation } from "./src/infrastructure/navigation";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { UserDataContextProvider } from "./src/services/userData/userData.context";
import { onError } from "@apollo/client/link/error";
import { theme } from "./src/infrastructure/theme";

// ********************************
const httpLink = new HttpLink({
  uri: "https://getdrop.info/graphql",
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

export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <FirebaseProvider>
          <ThemeProvider theme={theme}>
            <UserDataContextProvider>
              <Navigation />
            </UserDataContextProvider>
          </ThemeProvider>
        </FirebaseProvider>
      </ApolloProvider>
      <StatusBar style="auto" />
    </>
  );
}

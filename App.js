import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { StyleSheet, Text, View } from "react-native";

import { Navigation } from "./src/infrastructure/navigation";
import { StatusBar } from "expo-status-bar";

// ********************************
const httpLink = new HttpLink({
  // uri: "http://ec2-18-217-139-78.us-east-2.compute.amazonaws.com:3000/graphql",
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
      <Navigation />
    </>
  );
}

import { Card, Paragraph, Searchbar, Title } from "react-native-paper";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";

import { UserDataContext } from "../../../services/userData/userData.context";

const sampleClaims = [
  {
    claimID: 1,
    amount: 100.0,
    date: "2022-01-01",
    reimbursementFiled: true,
    reimbursementReceived: false,
    serviceCovered: "Doctor Visit",
  },
  {
    claimID: 2,
    amount: 200.0,
    date: "2022-02-01",
    reimbursementFiled: false,
    reimbursementReceived: false,
    serviceCovered: "Prescription",
  },
  {
    claimID: 3,
    amount: 150.0,
    date: "2022-03-01",
    reimbursementFiled: true,
    reimbursementReceived: true,
    serviceCovered: "Hospital Stay",
  },
];

export const ClaimsListScreen = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            // navigation.navigate("PlanOverview");
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ClaimForm");
          }}
        >
          <FontAwesome name="plus-circle" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);
  const { appUser } = useContext(UserDataContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredClaims, setFilteredClaims] = useState(appUser.claims);

  // test if this is possible, otherwise do [appUser] instead
  // useEffect(() => {
  //   setFilteredClaims(appUser.claims);
  // }, [appUser.claims]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();
    setFilteredClaims(
      appUser.claims.filter(
        (claim) =>
          claim.serviceCovered.toLowerCase().includes(lowercasedQuery) ||
          claim.serviceGroup.toLowerCase().includes(lowercasedQuery)
      )
    );
  };

  return (
    <View style={{ padding: 16 }}>
      <Searchbar
        placeholder="Filter by type of service or service group"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        data={filteredClaims}
        keyExtractor={(claim) => claim.claimID}
        renderItem={({ item: claim }) => (
          <Card style={{ marginVertical: 8, borderRadius: 8 }}>
            <Card.Content>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ClaimForm", { claim: claim });
                }}
              >
                <Title>{claim.serviceCovered}</Title>
              </TouchableOpacity>

              {/* <Paragraph>Service Group: {claim.serviceGroup}</Paragraph> */}
              <Paragraph>Date: {claim.date}</Paragraph>
              {/* <Paragraph>
                Amount Reimbursed: ${claim.amountReimbursed}
              </Paragraph> */}
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

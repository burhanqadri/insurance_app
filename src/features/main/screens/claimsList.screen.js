import { Card, Paragraph, Searchbar, Title } from "react-native-paper";
import { FlatList, Text, View } from "react-native";
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

export const ClaimsListScreen = ({ navigation, claims }) => {
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <TouchableOpacity
  //         onPress={() => {
  //           navigation.navigate("Profile");
  //         }}
  //       >
  //         <Ionicons name="arrow-back" size={24} color="black" />
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, []);
  // const { func_completeTask, func_getUserTasks } = useContext(UserDataContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredClaims, setFilteredClaims] = useState(sampleClaims);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();
    setFilteredClaims(
      claims.filter(
        (claim) =>
          claim.typeOfService.toLowerCase().includes(lowercasedQuery) ||
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
              <Title>{claim.serviceCovered}</Title>
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

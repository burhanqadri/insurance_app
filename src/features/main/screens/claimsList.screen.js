import { Card, Paragraph, Searchbar, Title } from "react-native-paper";
import { FlatList, Text, View } from "react-native";
import React, { useContext, useState } from "react";

import { UserDataContext } from "../../../services/userData/userData.context";

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
  const [filteredClaims, setFilteredClaims] = useState(claims);

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
        keyExtractor={(claim) => claim.id}
        renderItem={({ item: claim }) => (
          <Card style={{ marginVertical: 8, borderRadius: 8 }}>
            <Card.Content>
              <Title>{claim.typeOfService}</Title>
              <Paragraph>Service Group: {claim.serviceGroup}</Paragraph>
              <Paragraph>Date: {claim.date}</Paragraph>
              <Paragraph>
                Amount Reimbursed: ${claim.amountReimbursed}
              </Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

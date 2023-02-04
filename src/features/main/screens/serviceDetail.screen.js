import {
  ActivityIndicator,
  Button,
  Card,
  List,
  Paragraph,
  Title,
} from "react-native-paper";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";

import { ClaimForm } from "../components/claimForm.component";
import { Ionicons } from "@expo/vector-icons";
import { UserDataContext } from "../../../services/userData/userData.context";

export const ServiceDetailScreen = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => {
            navigation.navigate("PlanOverview");
          }}
        />
      ),
    });
  }, []);

  // const { func_completeTask, func_getUserTasks } = useContext(UserDataContext);

  const [isLoading, setIsLoading] = useState(false);
  const [claims, setClaims] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState(null);

  // const { serviceName, totalAnnualMax, perVisitMax, remainingAmount } =
  //   route.params;
  const serviceName = "Physiotherapy";
  const totalAnnualMax = 1000;
  const perVisitMax = 60;
  const remainingAmount = 470;

  const renderClaim = ({ item }) => {
    return (
      <List.Item
        title={item.date}
        // description={Amount Covered: $${item.amount}}
        right={() => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: item.submitted ? "green" : "red" }}>
              {item.submitted ? "Submitted" : "Pending"}
            </Text>
            {!isEditing ? (
              <Button onPress={() => handleEdit(item)}>
                <Text style={{ color: "white" }}>Edit</Text>
              </Button>
            ) : selectedClaim === item ? (
              <Button onPress={handleConfirmEdit}>
                <Text style={{ color: "white" }}>Confirm</Text>
              </Button>
            ) : null}
          </View>
        )}
      />
    );
  };

  const handleEdit = (claim) => {
    setIsEditing(true);
    setSelectedClaim(claim);
  };

  const handleConfirmEdit = () => {
    setIsEditing(false);
    setSelectedClaim(null);
  };

  const handleSubmit = (date, amount) => {
    setClaims([...claims, { date, amount, submitted: false }]);
    setIsEditing(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Title style={{ padding: 20 }}>{serviceName}</Title>
      <Card style={{ margin: 20, padding: 20 }}>
        <Paragraph style={{ fontWeight: "bold" }}>
          Total Annual Maximum:
        </Paragraph>
        <Paragraph>${totalAnnualMax}</Paragraph>
        <Paragraph style={{ fontWeight: "bold" }}>Per Visit Maximum:</Paragraph>
        <Paragraph>${perVisitMax}</Paragraph>
        <Paragraph style={{ fontWeight: "bold" }}>Remaining Amount:</Paragraph>
        <Paragraph>${remainingAmount}</Paragraph>
      </Card>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={{ flex: 1 }}>
          <Title style={{ padding: 20 }}>Claims</Title>
          <FlatList
            data={claims}
            renderItem={renderClaim}
            keyExtractor={(item) => item.date}
          />
        </View>
      )}
      {isEditing ? (
        <ClaimForm
          onSubmit={handleSubmit}
          onCancel={() => setIsEditing(false)}
          selectedClaim={selectedClaim}
        />
      ) : (
        <Button
          mode="contained"
          style={{
            margin: 20,
            padding: 20,
            alignSelf: "center",
          }}
          onPress={() => setIsEditing(true)}
        >
          Add Claim
        </Button>
      )}
    </View>
  );
};

import {
  ActivityIndicator,
  Button,
  Card,
  List,
  Paragraph,
  Title,
} from "react-native-paper";
import { FlatList, Text, View } from "react-native";
import React, { useState } from "react";

export const InsuranceServiceDetails = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [claims, setClaims] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState(null);

  const { serviceName, totalAnnualMax, perVisitMax, remainingAmount } =
    route.params;

  const renderClaim = ({ item }) => {
    return (
      <List.Item
        title={item.date}
        description={`Amount Covered: $${item.amount}`}
        right={() => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {!item.submitted && <Text style={{ color: "red" }}>Pending</Text>}
            {item.submitted && (
              <Text style={{ color: "green" }}>Submitted</Text>
            )}
            {isEditing && selectedClaim === item && (
              <Button onPress={() => handleConfirmEdit()}>
                <Text style={{ color: "white" }}>Confirm</Text>
              </Button>
            )}
            {!isEditing && (
              <Button onPress={() => handleEdit(item)}>
                <Text style={{ color: "white" }}>Edit</Text>
              </Button>
            )}
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

  const handleSubmitNewClaim = (date, amount) => {
    setClaims([...claims, { date, amount, submitted: false }]);
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
      <View style={{ padding: 20 }}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("ProviderList", { serviceName })}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={claims}
          keyExtractor={(item) => item.date}
          renderItem={renderClaim}
        />
      )}
      {!isEditing && (
        <View style={{ padding: 20 }}>
          <Button mode="contained" onPress={() => setIsEditing(true)}>
            Add Claim
          </Button>
        </View>
      )}
      {isEditing && selectedClaim === null && (
        <View style={{ padding: 20 }}>
          <NewClaimForm onSubmit={handleSubmitNewClaim} />
        </View>
      )}
      {isEditing && selectedClaim !== null && (
        <View style={{ padding: 20 }}>
          <EditClaimForm
            claim={selectedClaim}
            onSubmit={handleConfirmEdit}
            onCancel={() => setIsEditing(false)}
          />
        </View>
      )}
    </View>
  );
};

const NewClaimForm = ({ onSubmit }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Add Claim</Text>
      <TextInput
        label="Date"
        value={date}
        onChangeText={(text) => setDate(text)}
      />
      <TextInput
        label="Amount"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button onPress={() => onSubmit(date, amount)}>
          <Text style={{ color: "white" }}>Submit</Text>
        </Button>
        <Button onPress={() => setIsEditing(false)}>
          <Text style={{ color: "white" }}>Cancel</Text>
        </Button>
      </View>
    </View>
  );
};

const EditClaimForm = ({ claim, onSubmit, onCancel }) => {
  const [date, setDate] = useState(claim.date);
  const [amount, setAmount] = useState(claim.amount.toString());

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Edit Claim</Text>
      <TextInput
        label="Date"
        value={date}
        onChangeText={(text) => setDate(text)}
      />
      <TextInput
        label="Amount"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button onPress={() => onSubmit(date, amount)}>
          <Text style={{ color: "white" }}>Confirm</Text>
        </Button>
        <Button onPress={onCancel}>
          <Text style={{ color: "white" }}>Cancel</Text>
        </Button>
      </View>
    </View>
  );
};

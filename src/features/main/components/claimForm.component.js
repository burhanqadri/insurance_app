import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native-paper";

import { StyleSheet } from "react-native";

export const ClaimFormScreen = ({ onSubmit, claim = null }) => {
  const [date, setDate] = useState(claim ? claim.date : "");
  const [amount, setAmount] = useState(claim ? claim.amount.toString() : "");

  const handleSubmit = () => {
    onSubmit(date, parseInt(amount));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        mode="outlined"
        value={date}
        onChangeText={setDate}
        label="Date"
      />
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={amount}
        onChangeText={setAmount}
        label="Amount"
        mode="outlined"
        keyboardAppearance="dark"
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {claim ? "Edit Claim" : "Add Claim"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: "#333",
    padding: 15,
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

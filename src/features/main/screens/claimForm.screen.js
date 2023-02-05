import {
  Button,
  Card,
  Checkbox,
  Divider,
  IconButton,
} from "react-native-paper";
import React, { useContext, useState } from "react";
import { Text, TextInput, View } from "react-native";

import { UserDataContext } from "../../../services/userData/userData.context";

export const ClaimFormScreen = ({ navigation, serviceCovered = null }) => {
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

  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [serviceType, setServiceType] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [reimbursementFiled, setReimbursementFiled] = useState(false);
  const [reimbursementReceived, setReimbursementReceived] = useState(false);
  const [amountReimbursed, setAmountReimbursed] = useState("");

  return (
    <View style={{ flex: 1, padding: 16, justifyContent: "center" }}>
      <Card style={{ elevation: 4, borderRadius: 10 }}>
        <Card.Title
          title="Insurance Claim"
          subtitle="Please input your claim details"
        />
        <Divider />
        <Card.Content>
          <TextInput
            label="Date"
            mode="outlined"
            value={date}
            onChangeText={setDate}
            disabled
          />
          <TextInput
            label="Service Type"
            mode="outlined"
            value={serviceType}
            onChangeText={setServiceType}
            style={{ marginTop: 16 }}
          />
          <TextInput
            label="Total Amount"
            mode="outlined"
            keyboardType="number-pad"
            value={totalAmount}
            onChangeText={setTotalAmount}
            style={{ marginTop: 16 }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox
              status={reimbursementFiled ? "checked" : "unchecked"}
              onPress={() => setReimbursementFiled(!reimbursementFiled)}
            />
            <Text style={{ marginLeft: 8 }}>Reimbursement Filed</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox
              status={reimbursementReceived ? "checked" : "unchecked"}
              onPress={() => setReimbursementReceived(!reimbursementReceived)}
            />
            <Text style={{ marginLeft: 8 }}>Reimbursement Received</Text>
          </View>
          {reimbursementReceived && (
            <TextInput
              label="Amount Reimbursed"
              mode="outlined"
              keyboardType="number-pad"
              value={amountReimbursed}
              onChangeText={setAmountReimbursed}
              style={{ marginTop: 16 }}
            />
          )}
        </Card.Content>
        <Card.Actions style={{ justifyContent: "flex-end" }}>
          <Button mode="contained">Submit</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

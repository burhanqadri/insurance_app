import {
  Button,
  Card,
  Text,
  TextInput,
  ToggleButton,
} from "react-native-paper";
import {
  Keyboard,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useContext, useState } from "react";

import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { UserDataContext } from "../../../services/userData/userData.context";

export const ClaimFormScreen = ({ route, navigation }) => {
  const { claim } = route;
  /**
   * This useEffect hook sets the navigation header to have a back arrow button
   * that navigates back to the ClaimsList screen.
   */
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ClaimsList");
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);
  // const { func_completeTask, func_getUserTasks } = useContext(UserDataContext);

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [reimbursementFiled, setReimbursementFiled] = useState(false);
  const [reimbursementReceived, setReimbursementReceived] = useState(false);
  const [amountReimbursed, setAmountReimbursed] = useState("");

  if (claim) {
    setDate(claim.date);
  }

  /**
   * This function sets the `showDatePicker` state to false when a date is selected
   * and sets the `date` state to the selected date.
   * @param {event} event - The event from the DateTimePicker
   * @param {Date} selectedDate - The selected date from the DateTimePicker
   */
  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    // Prevents future dates from being selected
    if (selectedDate > new Date()) {
      return;
    }
    setDate(selectedDate || date);
  };

  // handle form submission
  const onSubmit = () => {
    if (claim) {
      // func_updateClaim();
    } else {
      // func_createClaim()
      console.log("sfdsfsdf");
    }
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, padding: 16, justifyContent: "center" }}>
          <Card style={{ elevation: 4, borderRadius: 10 }}>
            <Card.Title
              title={claim ? "Edit Claim" : "Add Claim"}
              subtitle="Please input your claim details"
            />
            <Card.Content>
              <TextInput
                label="Service Type"
                mode="outlined"
                value={serviceType}
                onChangeText={setServiceType}
                style={{ marginTop: 16 }}
              />
              <TouchableOpacity
                onPress={() => {
                  setShowDatePicker(true);
                }}
              >
                <TextInput
                  label="Date"
                  mode="outlined"
                  value={date.toLocaleDateString()}
                  onFocus={() => setShowDatePicker(true)}
                  editable={false}
                  pointerEvents="none"
                  style={{ marginTop: 16 }}
                />
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="calendar"
                  onChange={onDateChange}
                />
              )}

              <TextInput
                label="Total Amount"
                mode="outlined"
                value={totalAmount}
                keyboardType="numeric"
                onChangeText={setTotalAmount}
                style={{ marginTop: 16 }}
              />

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 16,
                  alignItems: "center",
                }}
              >
                <ToggleButton.Group
                  onValueChange={(value) => setReimbursementFiled(value)}
                  value={reimbursementFiled}
                >
                  <ToggleButton value={true} icon="check">
                    Reimbursement Filed
                  </ToggleButton>
                  <ToggleButton value={false} icon="close">
                    Reimbursement Not Filed
                  </ToggleButton>
                </ToggleButton.Group>
                <Text style={{ fontSize: 16 }}>Reimbursement filed</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 16,
                  alignItems: "center",
                }}
              >
                <ToggleButton.Group
                  onValueChange={(value) => setReimbursementReceived(value)}
                  value={reimbursementReceived}
                >
                  <ToggleButton value={true} icon="check">
                    Reimbursement Received
                  </ToggleButton>
                  <ToggleButton value={false} icon="close">
                    Reimbursement Not Received
                  </ToggleButton>
                </ToggleButton.Group>
                <Text style={{ fontSize: 16 }}>Reimbursement received</Text>
              </View>
              <TextInput
                label="Amount Reimbursed"
                mode="outlined"
                value={amountReimbursed}
                keyboardType="numeric"
                onChangeText={setAmountReimbursed}
                style={{ marginTop: 16 }}
              />

              <Button
                mode="contained"
                style={{ marginTop: 16 }}
                onPress={onSubmit}
              >
                {claim ? "Save" : "Submit"}
              </Button>
            </Card.Content>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

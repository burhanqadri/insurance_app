import { Button, Card, RadioButton } from "react-native-paper";
import React, { useContext, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { UserDataContext } from "../../../services/userData/userData.context";

export const InsurancePlans = ({ navigation, plans }) => {
  //   React.useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerLeft: () => (
  //         <TouchableOpacity
  //           onPress={() => {
  //             navigation.navigate("CompanySelect");
  //           }}
  //         >
  //           <Ionicons name="arrow-back" size={24} color="black" />
  //         </TouchableOpacity>
  //       ),
  //     });
  //   }, []);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPlans, setSelectedPlans] = useState([]);
  // const { func_completeTask, func_getUserTasks } = useContext(UserDataContext);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setSelectedPlans([...selectedPlans, plan]);
  };

  const handleSubmit = () => {
    console.log("Selected plans: ", selectedPlans);
    // Submit the selected plans to your database or API here.
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        {plans.map((plan) => (
          <Card key={plan.id} style={{ marginVertical: 10, borderRadius: 10 }}>
            <Card.Content>
              <RadioButton
                value={plan.id}
                status={selectedPlan === plan.id ? "checked" : "unchecked"}
                onPress={() => handleSelectPlan(plan.id)}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontWeight: "bold" }}>{plan.name}</Text>
                <Text style={{ marginTop: 10, color: "gray" }}>
                  {plan.description}
                </Text>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      <Button
        mode="contained"
        style={{ marginTop: 20, borderRadius: 10 }}
        onPress={handleSubmit}
      >
        Submit
      </Button>
    </View>
  );
};

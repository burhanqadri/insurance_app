import { Card, Paragraph, Title } from "react-native-paper";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeArea } from "../../../components/container/safeArea.component";

export const GlossaryScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);
  const [expandedIndex, setExpandedIndex] = React.useState(0);
  const terms = [
    {
      term: "Deductible",
      definition:
        "The amount of money that must be paid out-of-pocket for health insurance before insurance coverage starts. For example, if the deductible is $1000, the first $1000 of medical expenses must be paid before insurance kicks in.",
    },
    {
      term: "Co-pay",
      definition:
        "A fixed amount of money paid each time a medical service is received, such as visiting a doctor or filling a prescription. For example, if the co-pay is $20, $20 will be paid each time a doctor is visited, regardless of the cost.",
    },
    {
      term: "Per-visit maximum",
      definition:
        "The most that insurance will pay for a single medical visit. For example, if the per-visit maximum is $100, insurance will only pay up to $100 for any one doctor's visit, even if the visit costs more.",
    },
    {
      term: "Category maximum",
      definition:
        "The most that insurance will pay for a specific category of medical expenses, such as hospital stays or prescription drugs. For example, if the category maximum for hospital stays is $10,000, insurance will only pay up to $10,000 for all hospital stays in a given year.",
    },
    {
      term: "In-network provider",
      definition:
        "A doctor, hospital, or healthcare provider with a contract with the insurance company. Using an in-network provider usually results in lower costs because the insurance company has negotiated lower prices with these providers.",
    },
    {
      term: "Reimbursement",
      definition:
        "The process of getting paid back by insurance for medical expenses already paid. For example, if a doctor is visited and the bill is paid, a claim can be submitted to the insurance company for reimbursement of a portion of the cost.",
    },
    {
      term: "Tracking benefits",
      definition:
        "Keeping track of the amount of money received from insurance and the amount left to receive. This helps to know how much money is left to spend on medical expenses for the year.",
    },
    {
      term: "2+ Insurance plans",
      definition:
        "Having two or more insurance policies that can be used to pay for medical expenses. When there are two or more insurance plans, the insurance companies will work together to determine which insurance will pay for each expense. The process is called coordination of benefits, with the primary insurance usually paying first and then the secondary insurance paying for any remaining expenses.",
    },
  ];

  return (
    <SafeArea>
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <View style={{ alignItems: "left", paddingVertical: 14 }}>
          <Title style={{ fontSize: 32, fontWeight: "bold" }}>Glossary</Title>
        </View>
        <ScrollView>
          {terms.map((term, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setExpandedIndex(index)}
            >
              <Card style={{ marginVertical: 10, borderRadius: 10 }}>
                <Card.Title title={term.term} />
                {expandedIndex === index && (
                  <Card.Content>
                    <Paragraph>{term.definition}</Paragraph>
                  </Card.Content>
                )}
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeArea>
  );
};

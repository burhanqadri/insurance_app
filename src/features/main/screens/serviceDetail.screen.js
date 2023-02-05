import {
  ActivityIndicator,
  Button,
  Card,
  Paragraph,
  ScrollView,
  Title,
} from "react-native-paper";
import { Image, View } from "react-native";
import React, { useContext, useState } from "react";

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
  // const { serviceName, totalAnnualMax, perVisitMax, remainingAmount } =
  //   route.params;
  const [selectedClaim, setSelectedClaim] = useState(null);

  const serviceName = "Physiotherapy";
  const totalAnnualMax = 1000;
  const perVisitMax = 60;
  const remainingAmount = 470;

  const featuredTherapists = [
    { name: "Jane Doe", image: "https://placekitten.com/300/300" },
    { name: "John Doe", image: "https://placekitten.com/300/300" },
    { name: "Jim Doe", image: "https://placekitten.com/300/300" },
  ];

  const feelingsChips = ["Anxiety", "Depression", "Stress", "Grief"];

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

      <Button
        style={{ margin: 20 }}
        mode="contained"
        onPress={() => navigation.navigate("Claims")}
      >
        View Claims
      </Button>

      <Button
        style={{ margin: 20 }}
        mode="contained"
        onPress={() => navigation.navigate("ProviderSearch")}
      >
        Find a Provider
      </Button>

      <Title style={{ padding: 20 }}>Featured Therapists</Title>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ margin: 20, padding: 20 }}
      >
        {featuredTherapists.map((therapist, index) => (
          <Card key={index} style={{ padding: 20, width: 200 }}>
            <Image
              style={{ width: "100%", height: 200 }}
              source={{ uri: therapist.image }}
            />
            <Title style={{ padding: 20 }}>{therapist.name}</Title>
          </Card>
        ))}
      </ScrollView>
      <Title style={{ padding: 20 }}>Feelings We Can Help With</Title>
      <View style={{ margin: 20, padding: 20 }}>
        {feelingsChips.map((feeling, index) => (
          <Chip key={index} style={{ margin: 10 }}>
            {feeling}
          </Chip>
        ))}
      </View>
    </View>
  );
};

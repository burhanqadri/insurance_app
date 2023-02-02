import {
  Avatar,
  Card,
  IconButton,
  List,
  Paragraph,
  Title,
} from "react-native-paper";
import { Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

const services = [
  {
    id: 1,
    name: "Service 1",
    coveragePercent: 90,
    maximum: 10000,
    referralRequired: false,
    icon: require("../../../../assets/pic_1.jpg"),
  },
  {
    id: 2,
    name: "Service 2",
    coveragePercent: 80,
    maximum: 5000,
    referralRequired: true,
    icon: require("../../../../assets/pic_1.jpg"),
  },
  {
    id: 3,
    name: "Service 3",
    coveragePercent: 70,
    maximum: 3000,
    referralRequired: false,
    icon: require("../../../../assets/pic_1.jpg"),
  },
];

const ServiceRow = ({ service }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ServiceDetails", { serviceId: service.id });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Card style={{ marginVertical: 10 }}>
        <Card.Title
          title={service.name}
          left={(props) => <Avatar.Image source={service.icon} size={50} />}
        />
        <Card.Content>
          <Paragraph>Coverage: {service.coveragePercent}%</Paragraph>
          <Paragraph>Maximum: {service.maximum}</Paragraph>
          <Paragraph>
            Referral Required: {service.referralRequired ? "Yes" : "No"}
          </Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export const PlanOverviewScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <IconButton
          icon="user"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Main")}
        />
      ),
    });
  }, []);

  return (
    <List.Section>
      {services.map((service) => (
        <ServiceRow key={service.id} service={service} />
      ))}
    </List.Section>
  );
};

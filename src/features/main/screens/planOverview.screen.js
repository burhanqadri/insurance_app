import { Image, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
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
  //   ...
];

const ServiceRow = ({ service }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ServiceDetails", { serviceId: service.id });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Row>
        <Image
          source={service.icon}
          style={{ width: 50, height: 50, marginRight: 20 }}
        />
        <Details>
          <Name>{service.name}</Name>
          <Coverage>Coverage: {service.coveragePercent}%</Coverage>
          <Maximum>Maximum: {service.maximum}</Maximum>
          <Referral>
            Referral Required: {service.referralRequired ? "Yes" : "No"}
          </Referral>
        </Details>
      </Row>
    </TouchableOpacity>
  );
};

export const PlanOverviewScreen = ({ navigation }) => {
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

  return (
    <Container>
      {services.map((service) => (
        <ServiceRow key={service.id} service={service} />
      ))}
    </Container>
  );
};

const Container = styled.View`
  background-color: #f5f5f5;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: white;
  margin-vertical: 10px;
`;

const Details = styled.View`
  flex: 1;
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const Coverage = styled.Text`
  font-size: 14px;
`;

const Maximum = styled.Text`
  font-size: 14px;
`;

const Referral = styled.Text`
  font-size: 14px;
`;

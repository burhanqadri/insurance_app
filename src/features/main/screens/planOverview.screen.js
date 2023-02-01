import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";

const services = [
  {
    id: 1,
    name: "Service 1",
    coveragePercent: 90,
    maximum: 10000,
    referralRequired: false,
    icon: require("./service1.png"),
  },
  {
    id: 2,
    name: "Service 2",
    coveragePercent: 80,
    maximum: 5000,
    referralRequired: true,
    icon: require("./service2.png"),
  },
  {
    id: 3,
    name: "Service 3",
    coveragePercent: 70,
    maximum: 3000,
    referralRequired: false,
    icon: require("./service3.png"),
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
      <View style={styles.row}>
        <Image source={service.icon} style={styles.icon} />
        <View style={styles.details}>
          <Text style={styles.name}>{service.name}</Text>
          <Text style={styles.coverage}>
            Coverage: {service.coveragePercent}%
          </Text>
          <Text style={styles.maximum}>Maximum: {service.maximum}</Text>
          <Text style={styles.referral}>
            Referral Required: {service.referralRequired ? "Yes" : "No"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const PlanOverviewScreen = () => (
  <View style={styles.container}>
    {services.map((service) => (
      <ServiceRow key={service.id} service={service} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    marginVertical: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  details: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  coverage: {
    fontSize: 14,
  },
  maximum: {
    fontSize: 14,
  },
  referral: {
    fontSize: 14,
  },
});

export default PlanOverviewScreen;

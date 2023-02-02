import {
  ActivityIndicator,
  Avatar,
  Card,
  Chip,
  Paragraph,
  Searchbar,
  Text,
} from "react-native-paper";
import { Image, ScrollView, View } from "react-native";
import React, { useState } from "react";

import { SafeArea } from "../../../components/container/safeArea.component";

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
  // ...
];

const ServiceRow = ({ service, navigation }) => {
  const handlePress = () => {
    navigation.navigate("ServiceDetails", { serviceId: service.id });
  };

  return (
    <Card
      style={{
        // marginRight: 20,
        marginVertical: 10,
        borderRadius: 10,
        minWidth: 200,
      }}
      onPress={handlePress}
    >
      <Card.Title
        title={service.name}
        left={(props) => <Avatar.Image source={service.icon} />}
      />
      <Card.Content>
        <Paragraph>Coverage: {service.coveragePercent}%</Paragraph>
        <Paragraph>Maximum: {service.maximum}</Paragraph>
        <View>
          <Chip>
            {service.referralRequired ? "Referral Required" : "No Referral"}
          </Chip>
        </View>
      </Card.Content>
    </Card>
  );
};

export const PlanOverviewScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(services);
  const [loading, setLoading] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setLoading(true);

    setTimeout(() => {
      const filteredData = services.filter((service) =>
        service.name.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredServices(filteredData);
      setLoading(false);
    }, 1000);
  };

  return (
    <SafeArea>
      <ScrollView style={{ flex: 1, marginHorizontal: 15 }}>
        <Searchbar
          placeholder="Search services"
          value={searchQuery}
          onChangeText={handleSearch}
          style={{ marginHorizontal: 10, marginTop: 20 }}
        />
        <Text variant="headlineMedium">Paramedical</Text>
        <Text variant="titleSmall">
          This group has a total of $1000 combined across all services
        </Text>
        <ScrollView horizontal={true} style={{ minHeight: 200, marginTop: 20 }}>
          {services.map((service) => (
            <View style={{ marginRight: 20 }}>
              <ServiceRow
                key={service.id}
                service={service}
                navigation={navigation}
              />
            </View>
          ))}
        </ScrollView>
        {loading ? (
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        ) : (
          <View>
            {filteredServices.map((service) => (
              <ServiceRow
                key={service.id}
                service={service}
                style={{ marginHorizontal: 20 }}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeArea>
  );
};

import {
  ActivityIndicator,
  Avatar,
  Card,
  Chip,
  Paragraph,
  Searchbar,
  Text,
} from "react-native-paper";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { SafeArea } from "../../../components/container/safeArea.component";
import { UserDataContext } from "../../../services/userData/userData.context";

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
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <FontAwesome name="user-circle-o" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  // const { func_completeTask, func_getUserTasks } = useContext(UserDataContext);

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
          style={{ marginHorizontal: 10, marginVertical: 20 }}
        />
        <View
          style={{
            backgroundColor: "#ff300040",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
            Paramedical
          </Text>
          <Text variant="titleSmall">$1000 combined across all services</Text>
          <ScrollView
            horizontal={true}
            style={{
              minHeight: 200,
              marginTop: 20,
              // borderRadius: 10,
              marginRight: -20,
              // backgroundColor: "#ff300040",
            }}
          >
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
        </View>
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

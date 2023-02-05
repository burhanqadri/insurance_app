import * as Location from "expo-location";

import { Avatar, Card, Paragraph, Text, Title } from "react-native-paper";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { UserDataContext } from "../../../services/userData/userData.context";

const testObj = [
  {
    name: "The Coffee House",
    rating: 4.7,
    imageUrl: "https://www.example.com/coffeehouse.jpg",
    distance: 2.5,
    description: "A cozy cafe serving specialty coffee and light bites",
    id: 1,
  },
  {
    name: "Da Mario Pizzeria",
    rating: 4.2,
    imageUrl: "https://www.example.com/damario.jpg",
    distance: 1.7,
    description: "Authentic Italian pizzeria with wood-fired oven",
    id: 2,
  },
  {
    name: "Sushi Palace",
    rating: 4.9,
    imageUrl: "https://www.example.com/sushi.jpg",
    distance: 3.1,
    description: "Fine dining Japanese restaurant with a focus on sushi",
    id: 3,
  },
];

export const ProviderSearchScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            // navigation.navigate("Profile");
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);
  const { func_completeTask, func_getUserTasks } = useContext(UserDataContext);

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  //   const [practitioners, setPractitioners] = useState([]);
  const [practitioners, setPractitioners] = useState(testObj);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    // Fetch practitioners data from server and set to state
  }, [location]);

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      {practitioners.map((practitioner) => (
        <TouchableOpacity
          key={practitioner.id}
          onPress={() =>
            navigation.navigate("Provider", { practitionerId: practitioner.id })
          }
        >
          <Card
            style={{
              elevation: 4,
              borderRadius: 10,
              marginVertical: 8,
              paddingHorizontal: 10,
            }}
          >
            <Card.Title
              title={practitioner.name}
              subtitle={`${practitioner.rating} stars`}
              left={(props) => (
                <Avatar.Image
                  source={{ uri: practitioner.imageUrl }}
                  size={40}
                  style={{ marginRight: 16 }}
                />
              )}
              right={(props) => (
                <Text style={{ fontWeight: "bold" }}>
                  {practitioner.distance} km
                </Text>
              )}
            />
            <Card.Content>
              <Paragraph>{practitioner.description}</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

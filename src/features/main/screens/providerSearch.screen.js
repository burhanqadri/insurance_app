import * as Location from "expo-location";

import { Avatar, Card, Paragraph, Text, Title } from "react-native-paper";
import { Image, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { UserDataContext } from "../../../services/userData/userData.context";

export const ProviderSearchScreen = ({ navigation }) => {
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <TouchableOpacity
  //         onPress={() => {
  //           navigation.navigate("Profile");
  //         }}
  //       >
  //         <Ionicons name="arrow-back" size={24} color="black" />
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, []);
  // const { func_completeTask, func_getUserTasks } = useContext(UserDataContext);

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [practitioners, setPractitioners] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
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
    <View style={{ flex: 1, padding: 16 }}>
      {practitioners.map((practitioner) => (
        <TouchableOpacity
          key={practitioner.id}
          onPress={() =>
            navigation.navigate("Provider", { practitionerId: practitioner.id })
          }
        >
          <Card style={{ elevation: 4, borderRadius: 10, marginVertical: 8 }}>
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
    </View>
  );
};

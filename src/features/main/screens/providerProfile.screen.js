import {
  Avatar,
  Card,
  Chip,
  Paragraph,
  Subheading,
  Title,
} from "react-native-paper";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../../components/container/safeArea.component";
import { UserDataContext } from "../../../services/userData/userData.context";

// import { SafeAreaView } from "react-native-safe-area-context";

export const ProviderProfileScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ServiceDetail");
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  // const { func_completeTask, func_getUserTasks } = useContext(UserDataContext);

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <SafeArea>
      <ScrollView
        style={{ paddingHorizontal: 20, paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 128, height: 128, borderRadius: 64 }}
            source={{
              uri: "https://randomuser.me/api/portraits/women/44.jpg",
            }}
          />
          <View style={{ marginLeft: 20 }}>
            <Title>Dr. Sarah Johnson</Title>
            <Subheading style={{ fontWeight: "bold" }}>
              Phone: +1 (123) 456-7890
            </Subheading>
            <Subheading>Address: 123 Main St, New York, NY 10001</Subheading>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Chip mode="outlined" style={{ marginRight: 10 }}>
                Massage Therapist
              </Chip>
              <Chip mode="outlined" style={{ marginRight: 10 }}>
                New York City
              </Chip>
              <Chip mode="outlined">In Network</Chip>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Chip mode="outlined">Virtual Possible</Chip>
          <Chip mode="outlined">Handles Claims</Chip>
        </View>
        <View style={{ marginTop: 20 }}>
          <Title>Reviews</Title>
          <View
            style={{
              marginTop: 20,
              borderRadius: 10,
              // shadowColor: "#000",
              // shadowOpacity: 0.1,
              // shadowRadius: 10,
              // shadowOffset: { width: 0, height: 2 },
              // elevation : 2,
            }}
          >
            <Card style={{ marginBottom: 20 }}>
              <Card.Content>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar.Image
                    size={48}
                    source={{
                      uri: "https://api.adorable.io/avatars/48/abott@adorable.png",
                    }}
                  />
                  <View style={{ marginLeft: 20 }}>
                    <Subheading>John Doe</Subheading>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Paragraph>
                  </View>
                </View>
              </Card.Content>
            </Card>
            <Card style={{ marginBottom: 20 }}>
              <Card.Content>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar.Image
                    size={48}
                    source={{
                      uri: "https://api.adorable.io/avatars/48/abott@adorable.png",
                    }}
                  />
                  <View style={{ marginLeft: 20 }}>
                    <Subheading>Jane Doe</Subheading>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Paragraph>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
};

import { Avatar, Chip, Paragraph, Text, Title } from "react-native-paper";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeArea } from "../../../components/container/safeArea.component";

export const ProviderProfileScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PlanOverview");
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <SafeArea>
      <ScrollView style={{ marginHorizontal: 10 }}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.headerBackground}
            source={{
              uri: "https://images.unsplash.com/photo-1580595456730-64f69c7d0d57?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            }}
          />
          <View style={styles.headerColumn}>
            <Avatar.Image
              style={styles.avatar}
              source={{
                uri: "https://randomuser.me/api/portraits/women/44.jpg",
              }}
            />
            <Title style={styles.name}>Dr. Sarah Johnson</Title>
            <Paragraph style={styles.phone}>Phone: +1 (123) 456-7890</Paragraph>
            <View style={styles.providerInfo}>
              <Chip style={styles.chip}>Massage Therapist</Chip>
              <Chip style={styles.chip}>New York City</Chip>
              <Chip style={styles.chip}>In Network</Chip>
            </View>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoColumn}>
            <Chip style={styles.chip}>Virtual Appointments Possible</Chip>
            <Chip style={styles.chip}>Handles Reimbursement Filing</Chip>
          </View>
        </View>
        <View style={styles.reviewContainer}>
          <Title style={styles.reviewTitle}>Reviews</Title>
          <View style={styles.reviewColumn}>
            <View style={styles.reviewRow}>
              <Avatar.Image
                source={{
                  uri: "https://randomuser.me/api/portraits/women/33.jpg",
                }}
                size={40}
              />
              <View style={styles.reviewDetails}>
                <Text style={styles.reviewUsername}>Jane Doe</Text>
                <Text style={styles.reviewText}>
                  Dr. Johnson was amazing! She was very kind and understanding.
                  I highly recommend her!
                </Text>
              </View>
            </View>
            <View style={styles.reviewRow}>
              <Avatar.Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/55.jpg",
                }}
                size={40}
              />
              <View style={styles.reviewDetails}>
                <Text style={styles.reviewUsername}>John Smith</Text>
                <Text style={styles.reviewText}>
                  I had a great experience with Dr. Johnson.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profile: {
    alignItems: "center",
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginTop: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
  },
  detailsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  detailsColumn: {
    width: "50%",
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  detailsLabel: {
    fontWeight: "bold",
    marginRight: 10,
  },
  services: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  chipsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  rating: {
    marginTop: 20,
  },
  reviews: {
    marginTop: 20,
  },
});

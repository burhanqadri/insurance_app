import { Card, IconButton, Paragraph, Text, Title } from "react-native-paper";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeArea } from "../../../components/container/safeArea.component";

export const ProfileScreen = ({ navigation }) => {
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

  const [editingName, setEditingName] = React.useState(false);
  const [editingEmail, setEditingEmail] = React.useState(false);
  const [name, setName] = React.useState("John Doe");
  const [email, setEmail] = React.useState("johndoe@example.com");
  const [company, setCompany] = React.useState("Acme Inc.");
  const [plan, setPlan] = React.useState("Standard");
  const [city, setCity] = React.useState("San Francisco");

  const handleEditName = async () => {
    if (!editingName) {
      setEditingName(true);
    } else {
      try {
        await AsyncStorage.setItem("@name", name);
      } catch (e) {
        console.error(e);
      }
      setEditingName(false);
    }
  };

  const handleEditEmail = async () => {
    if (!editingEmail) {
      setEditingEmail(true);
    } else {
      try {
        await AsyncStorage.setItem("@email", email);
      } catch (e) {
        console.error(e);
      }
      setEditingEmail(false);
    }
  };

  return (
    <SafeArea>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Title style={styles.headerTitle}>Profile</Title>
        </View>
        <View style={styles.content}>
          <Card style={styles.card}>
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Title>Name</Title>
                <IconButton
                  icon={editingName ? "check" : "pencil"}
                  size={20}
                  onPress={handleEditName}
                  style={styles.iconButton}
                />
              </View>
              {editingName ? (
                <TextInput
                  value={name}
                  onChangeText={setName}
                  style={styles.textInput}
                />
              ) : (
                <Paragraph>{name}</Paragraph>
              )}
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Title>Email</Title>
                <IconButton
                  icon={editingEmail ? "check" : "pencil"}
                  size={20}
                  onPress={handleEditEmail}
                  style={styles.iconButton}
                />
              </View>

              {editingEmail ? (
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  style={styles.textInput}
                />
              ) : (
                <Paragraph>{email}</Paragraph>
              )}
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Title>Company</Title>
              <Paragraph>{company}</Paragraph>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Title>Plan</Title>
              <Paragraph>{plan}</Paragraph>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Title>City</Title>
              <Paragraph>{city}</Paragraph>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeArea>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    // backgroundColor: "#f5f5f5",
  },
  header: {
    paddingVertical: 15,
    alignItems: "left",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  content: {
    // paddingVertical: 20,
  },
  card: {
    marginVertical: 10,
  },
  textInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  iconButton: {
    alignSelf: "flex-end",
  },
});
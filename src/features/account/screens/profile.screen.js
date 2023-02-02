import { Card, IconButton, Paragraph, Text, Title } from "react-native-paper";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";

import React from "react";

export const ProfileScreen = ({ navigation }) => {
  const [editingName, setEditingName] = React.useState(false);
  const [editingEmail, setEditingEmail] = React.useState(false);
  const [name, setName] = React.useState("John Doe");
  const [email, setEmail] = React.useState("johndoe@example.com");
  const [company, setCompany] = React.useState("Acme Inc.");
  const [plan, setPlan] = React.useState("Standard");
  const [city, setCity] = React.useState("San Francisco");

  const handleEditName = () => {
    setEditingName(true);
  };

  const handleEditEmail = () => {
    setEditingEmail(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.headerTitle}>Profile</Title>
      </View>
      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Name</Title>
            {editingName ? (
              <TextInput
                value={name}
                onChangeText={setName}
                style={styles.textInput}
              />
            ) : (
              <Paragraph>{name}</Paragraph>
            )}
            <IconButton
              icon="pencil"
              size={20}
              onPress={handleEditName}
              style={styles.iconButton}
            />
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Email</Title>
            {editingEmail ? (
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.textInput}
              />
            ) : (
              <Paragraph>{email}</Paragraph>
            )}
            <IconButton
              icon="pencil"
              size={20}
              onPress={handleEditEmail}
              style={styles.iconButton}
            />
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Company</Title>
            <Paragraph>{company}</Paragraph>
            <IconButton
              icon="pencil"
              size={20}
              onPress={() => {
                // Navigate to the "Edit Company" screen
              }}
              style={styles.iconButton}
            />
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Plan</Title>
            <Paragraph>{plan}</Paragraph>
            <IconButton
              icon="pencil"
              size={20}
              onPress={() => {
                // Navigate to the "Edit Plan" screen
              }}
              style={styles.iconButton}
            />
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>City</Title>
            <Paragraph>{city}</Paragraph>
            <IconButton
              icon="pencil"
              size={20}
              onPress={() => {
                // Navigate to the "Edit City" screen
              }}
              style={styles.iconButton}
            />
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    alignItems: "flex-start",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
  },
  textInput: {
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  iconButton: {
    position: "absolute",
    right: 8,
    top: 8,
  },
});

import {
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";

const PROFILE_KEY = "PROFILE_KEY";

const ProfileScreen = () => {
  const [isEditingName, setIsEditingName] = React.useState(false);
  const [isEditingEmail, setIsEditingEmail] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");

  const navigation = useNavigation();

  React.useEffect(() => {
    const getProfileData = async () => {
      const profileData = await AsyncStorage.getItem(PROFILE_KEY);
      if (profileData) {
        const { name, email, company } = JSON.parse(profileData);
        setName(name);
        setEmail(email);
        setCompany(company);
      }
    };
    getProfileData();
  }, []);

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleEditEmail = () => {
    setIsEditingEmail(true);
  };

  const handleEditCompany = () => {
    navigation.navigate("EditCompany");
  };

  const handleEditAnswers = () => {
    navigation.navigate("EditAnswers");
  };

  const handleSave = async () => {
    const profileData = { name, email, company };
    await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(profileData));
  };

  React.useEffect(() => {
    handleSave();
  }, [name, email, company]);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          {isEditingName ? (
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              onBlur={() => setIsEditingName(false)}
            />
          ) : (
            <TouchableOpacity onPress={handleEditName}>
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          {isEditingEmail ? (
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              onBlur={() => setIsEditingEmail(false)}
            />
          ) : (
            <TouchableOpacity onPress={handleEditEmail}>
              <Text style={styles.text}>{email}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Company:</Text>
          <TouchableOpacity onPress={handleEditCompany}>
            <Text style={styles.text}>{company}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Survey Answers</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={handleEditAnswers}>
            <Text style={styles.text}>Edit Answers</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  label: {
    fontWeight: "bold",
    width: 80,
  },
  input: {
    flex: 1,
    padding: 4,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
  },
  text: {
    flex: 1,
  },
});

export default ProfileScreen;

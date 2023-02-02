import { AsyncStorage, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import styled from "styled-components/native";

// import { useNavigation } from '@react-navigation/native';

const PROFILE_KEY = "PROFILE_KEY";

const Container = styled(View)`
  flex: 1;
  padding: 16px;
`;

const Section = styled(View)`
  margin-top: 16px;
`;

const SectionTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

const Label = styled.Text`
  font-weight: bold;
  width: 80px;
`;

const Input = styled.TextInput`
  flex: 1;
  padding: 4px;
  border-width: 1px;
  border-color: gray;
  border-radius: 4px;
`;

const Text = styled.Text`
  flex: 1;
`;

const ProfileScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
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
    navigation.navigate("CompanySelect");
  };

  const handleEditAnswers = () => {
    navigation.navigate("StartQuestions");
  };

  const handleSave = async () => {
    const profileData = { name, email, company };
    await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(profileData));
  };

  useEffect(() => {
    handleSave();
  }, [name, email, company]);

  return (
    <Container>
      <Section>
        <SectionTitle>Personal Information</SectionTitle>
        <Row>
          <Label>Name:</Label>
          {isEditingName ? (
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              onBlur={() => setIsEditingName(false)}
            />
          ) : (
            <TouchableOpacity onPress={handleEditName}>
              <Text>{name}</Text>
            </TouchableOpacity>
          )}
        </Row>
        <Row>
          <Label>Email:</Label>
          {isEditingEmail ? (
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              onBlur={() => setIsEditingEmail(false)}
            />
          ) : (
            <TouchableOpacity onPress={handleEditEmail}>
              <Text>{email}</Text>
            </TouchableOpacity>
          )}
        </Row>
      </Section>
      <Section>
        <SectionTitle>Work Information</SectionTitle>
        <Row>
          <Label>Company:</Label>
          <TouchableOpacity onPress={handleEditCompany}>
            <Text>{company}</Text>
          </TouchableOpacity>
        </Row>
      </Section>
      <Section>
        <SectionTitle>Survey Answers</SectionTitle>
        <Row>
          <TouchableOpacity onPress={handleEditAnswers}>
            <Text>Edit Answers</Text>
          </TouchableOpacity>
        </Row>
      </Section>
    </Container>
  );
};

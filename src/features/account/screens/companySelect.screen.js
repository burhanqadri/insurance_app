import { Button, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";

import styled from "styled-components/native";

const companies = [
  { name: "Apple", available: true },
  { name: "Google", available: true },
  { name: "Microsoft", available: true },
  { name: "Netflix", available: false },
  { name: "Tesla", available: true },
  { name: "Uber", available: false },
  { name: "Zoom", available: true },
];

const Container = styled.View`
  padding: 16px;
`;

const SearchInput = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  margin-top: 16px;
  padding: 8px;
  border-radius: 8px;
`;

const CompanyContainer = styled.View`
  margin-bottom: 16px;
`;

const CompanyText = styled.Text`
  font-size: 20px;
  padding: 16px;
  border-radius: 8px;
`;

const CompanyButton = styled.TouchableOpacity`
  padding: 8px;
  margin-top: 8px;
  background-color: lightgray;
  border-radius: 8px;
`;

const NextButton = styled.Button`
  margin-top: 16px;
`;

export const CompanySelectScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filteredList = companies.filter((company) =>
      company.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCompanies(filteredList);
  };

  return (
    <Container>
      <SearchInput
        placeholder="Search for a company"
        onChangeText={handleSearch}
        value={searchTerm}
      />
      <ScrollView>
        {filteredCompanies.map((company, index) => (
          <CompanyContainer key={index}>
            {company.available ? (
              <CompanyButton
                onPress={() => console.log(`Selected ${company.name}`)}
              >
                <CompanyText>{company.name}</CompanyText>
              </CompanyButton>
            ) : (
              <CompanyContainer>
                <CompanyText>{company.name}</CompanyText>
                <CompanyButton
                  onPress={() =>
                    console.log(`Requested to add ${company.name}`)
                  }
                >
                  <CompanyText>Request to add</CompanyText>
                </CompanyButton>
              </CompanyContainer>
            )}
          </CompanyContainer>
        ))}
        <NextButton
          title={"Next"}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        />
      </ScrollView>
    </Container>
  );
};

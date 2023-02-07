import {
  Button,
  IconButton,
  Searchbar,
  Text,
  TextInput,
} from "react-native-paper";
import React, { useContext, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { UserDataContext } from "../../../services/userData/userData.context";

const companies = [
  { name: "Apple", available: true },
  { name: "Google", available: true },
  { name: "Microsoft", available: true },
  { name: "Netflix", available: false },
  { name: "Tesla", available: true },
  { name: "Uber", available: false },
  { name: "Zoom", available: true },
];

export const CompanySelectScreen = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        {
          route.cameFrom !== "PhoneLogin" ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ) : null;
        }
      },
    });
  }, []);

  const { appUser, setAppUser } = useContext(UserDataContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState(companies);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filteredList = companies.filter((company) =>
      company.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCompanies(filteredList);
  };

  const handleCompanySelection = (company) => {
    setSelectedCompany(company);
  };

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder="Search for a company"
        onChangeText={handleSearch}
        value={searchTerm}
        style={{ margin: 8 }}
      />
      <ScrollView style={{ padding: 16 }}>
        {filteredCompanies.map((company, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCompanySelection(company)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Ionicons
              name="md-business"
              size={24}
              color="gray"
              style={{ marginRight: 16 }}
            />
            {/* <Image source={require("company_logo")} /> */}
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 20 }}>{company.name}</Text>
            </View>
            {selectedCompany === company && (
              <Ionicons name="md-checkmark-circle" size={24} color="green" />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ padding: 16, alignItems: "center" }}>
        <Button
          mode="contained"
          disabled={!selectedCompany}
          onPress={() => {
            setAppUser({ ...appUser, company: selectedCompany.name });
            navigation.navigate("Dashboard");
          }}
        >
          Next
        </Button>
      </View>
    </View>
  );
};

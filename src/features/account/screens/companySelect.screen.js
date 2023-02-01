import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const companies = [
  { name: "Apple", available: true },
  { name: "Google", available: true },
  { name: "Microsoft", available: true },
  { name: "Netflix", available: false },
  { name: "Tesla", available: true },
  { name: "Uber", available: false },
  { name: "Zoom", available: true },
];

const CompanySelector = () => {
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
    <View style={{ padding: 16 }}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Search for a company"
        onChangeText={handleSearch}
        value={searchTerm}
      />
      <ScrollView style={{ marginTop: 16 }}>
        {filteredCompanies.map((company, index) => (
          <View key={index} style={{ marginBottom: 16 }}>
            {company.available ? (
              <TouchableOpacity
                style={{ padding: 8, backgroundColor: "lightgray" }}
                onPress={() => console.log(`Selected ${company.name}`)}
              >
                <Text>{company.name}</Text>
              </TouchableOpacity>
            ) : (
              <View style={{ padding: 8, backgroundColor: "lightgray" }}>
                <Text>{company.name}</Text>
                <TouchableOpacity
                  style={{ marginTop: 8 }}
                  onPress={() =>
                    console.log(`Requested to add ${company.name}`)
                  }
                >
                  <Text>Request to add</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CompanySelector;

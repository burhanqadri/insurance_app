import {
  Button,
  IconButton,
  Searchbar,
  Text,
  TextInput,
} from "react-native-paper";
import React, { useContext, useState } from "react";
import { ScrollView, View } from "react-native";

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

export const CompanySelectScreen = ({ navigation }) => {
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
    <>
      <Searchbar
        placeholder="Search for a company"
        onChangeText={handleSearch}
        value={searchTerm}
        style={{ margin: 8 }}
      />
      <ScrollView style={{ padding: 16 }}>
        {filteredCompanies.map((company, index) => (
          <View
            key={index}
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
            {!company.available && (
              <Button
                mode="contained"
                color="#3498db"
                style={{ borderRadius: 8, paddingHorizontal: 16 }}
                onPress={() => console.log(`Requested to add ${company.name}`)}
              >
                Request to add
              </Button>
            )}
          </View>
        ))}
        <Button
          mode="contained"
          style={{ marginTop: 16 }}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          Next
        </Button>
      </ScrollView>
    </>
  );
};

import { Avatar, Card } from "react-native-paper";
import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const data = [
  {
    id: 1,
    title: "Anxiety",
    subtitle: "Find peace of mind",
    image: require("../../../../assets/pic_1.jpg"),
  },
  {
    id: 2,
    title: "Sleep",
    subtitle: "Wake up feeling refreshed",
    image: require("../../../../assets/pic_4.jpg"),
  },
  {
    id: 3,
    title: "Stress",
    subtitle: "Take a deep breath",
    image: require("../../../../assets/pic_5.jpg"),
  },
];

export const FeelingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 16 }}>
        Help me with...
      </Text>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate("ServiceDetail", { item })}
          style={{ margin: 15 }}
        >
          <Card>
            <Card.Content style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Card.Title
                  title={item.title}
                  subtitle={item.subtitle}
                  style={{ paddingRight: 16 }}
                  right={(props) => (
                    <Avatar.Image source={item.image} size={50} />
                  )}
                />
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};
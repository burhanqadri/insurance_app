import { Avatar, Card, Title } from "react-native-paper";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const data = [
  {
    id: 1,
    title: "Anxiety, anger, sadness",
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
    title: "Eyes and ears",
    subtitle: "Hearing and seeing",
    image: require("../../../../assets/pic_5.jpg"),
  },
  {
    id: 3,
    title: "Aches and pains",
    subtitle: "Nagging injuries",
    image: require("../../../../assets/pic_5.jpg"),
  },
  {
    id: 3,
    title: "Feel healthier",
    subtitle: "Weight loss, eat healthier, start at the gym",
    image: require("../../../../assets/pic_5.jpg"),
  },
];

export const FeelingScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <View style={{ alignItems: "left", paddingVertical: 14 }}>
        <Title style={{ fontSize: 32, fontWeight: "bold" }}>
          Help me with _____
        </Title>
      </View>
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
    </ScrollView>
  );
};

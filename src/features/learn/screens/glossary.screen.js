import { Appbar, Card, Paragraph, Title } from "react-native-paper";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import React from "react";

export const GlossaryScreen = ({ navigation }) => {
  const [expanded, setExpanded] = React.useState(true);
  const words = [
    {
      word: "Algorithm",
      definition: "A set of instructions to perform a specific task.",
    },
    { word: "API", definition: "Application Programming Interface." },
    {
      word: "Boolean",
      definition: "A data type with two possible values: true or false.",
    },
    {
      word: "Compiler",
      definition: "A program that converts source code into machine code.",
    },
    {
      word: "Debugging",
      definition: "The process of finding and fixing errors in code.",
    },
    {
      word: "Function",
      definition: "A reusable block of code that performs a specific task.",
    },
    {
      word: "Object-Oriented Programming",
      definition:
        "A programming paradigm based on the concept of 'objects', which can contain data and code to manipulate that data.",
    },
    {
      word: "Variable",
      definition: "A named storage location for data used in a program.",
    },
    {
      word: "Virtual Machine",
      definition: "A software environment that emulates a physical computer.",
    },
    {
      word: "Code Reusability",
      definition:
        "The ability to use existing code to build new features and functionality.",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", paddingVertical: 24 }}>
        <Title style={{ fontSize: 32, fontWeight: "bold", color: "#3f51b5" }}>
          Glossary
        </Title>
      </View>
      <ScrollView>
        {words.map((word, index) => (
          <TouchableOpacity key={index} onPress={() => setExpanded(!expanded)}>
            <Card style={{ margin: 10, borderRadius: 10 }}>
              <Card.Title title={word.word} />
              {expanded && (
                <Card.Content>
                  <Paragraph>{word.definition}</Paragraph>
                </Card.Content>
              )}
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

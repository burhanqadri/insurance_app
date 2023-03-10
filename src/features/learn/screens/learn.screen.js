import {
  Card,
  IconButton,
  List,
  Paragraph,
  Surface,
  Text,
  Title,
} from "react-native-paper";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";

import { UserDataContext } from "../../../services/userData/userData.context";

const screenWidth = Dimensions.get("window").width;

const stories = [
  {
    id: 1,
    source: require("../../../../assets/pic_1.jpg"),
    title: "Story 1",
  },
  {
    id: 2,
    source: require("../../../../assets/pic_2.jpg"),
    title: "Story 2",
  },
  {
    id: 3,
    source: require("../../../../assets/pic_4.jpg"),
    title: "Story 3",
  },
  {
    id: 4,
    source: require("../../../../assets/pic_7.jpg"),
    title: "Story 4",
  },
];

const Story = ({ story, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Surface style={styles.storyContainer}>
      {/* <Text style={{ color: "red" }}>Gin and tonic</Text> */}
      <Image source={story.source} style={styles.storyImage} />
    </Surface>
    <Text style={styles.storyTitle}>{story.title}</Text>
  </TouchableOpacity>
);

const StoryModal = ({ story, onClose }) => (
  <View style={styles.modalContainer}>
    <Image source={story.source} style={styles.modalImage} />
    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
      <Text style={styles.closeButtonText}>X</Text>
    </TouchableOpacity>
  </View>
);

export const LearnScreen = ({ navigation }) => {
  // const { func_completeTask, func_getUserTasks } = useContext(UserDataContext);

  const [selectedStory, setSelectedStory] = useState(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "left", paddingVertical: 14 }}>
        <Title style={{ fontSize: 32, fontWeight: "bold" }}>Learn</Title>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesContainer}
      >
        {stories.map((story) => (
          <Story
            key={story.id}
            story={story}
            onPress={() => setSelectedStory(story)}
          />
        ))}
      </ScrollView>
      <Card
        style={styles.cardContainer}
        onPress={() => navigation.navigate("Glossary")}
      >
        <Card.Title title="Glossary" />
        <Card.Content>
          <Paragraph>
            Tap to view the full glossary of terms used in this app.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.cardContainer}>
        <Card.Title title="Instructions for Filing for Reimbursement" />
        <Card.Content>
          <Paragraph>
            Tap to expand instructions on how to file for reimbursement in this
            app.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <IconButton
            icon={expanded ? "chevron-up" : "chevron-down"}
            color={"#000"}
            size={20}
            onPress={() => setExpanded(!expanded)}
          />
        </Card.Actions>
        {expanded && (
          <List.Accordion
            title="Steps to file for reimbursement"
            style={styles.accordionContainer}
          >
            <List.Item title="Step 1">
              <Paragraph>
                Go to the Reimbursement section in the app and provide the
                necessary information.
              </Paragraph>
            </List.Item>
            <List.Item title="Step 2">
              <Paragraph>
                Attach the required supporting documents and submit the request.
              </Paragraph>
            </List.Item>
            <List.Item title="Step 3">
              <Paragraph>
                Wait for the request to be reviewed and approved.
              </Paragraph>
            </List.Item>
            <List.Item title="Step 4">
              <Paragraph>
                Receive the reimbursement in the form of payment.
              </Paragraph>
            </List.Item>
          </List.Accordion>
        )}
        {expanded && (
          <List.Accordion
            title="Steps to get your insurance member card"
            style={styles.accordionContainer}
          >
            <List.Item title="Step 1">
              <Paragraph>
                Go to the Reimbursement section in the app and provide the
                necessary information.
              </Paragraph>
            </List.Item>
            <List.Item title="Step 2">
              <Paragraph>
                Attach the required supporting documents and submit the request.
              </Paragraph>
            </List.Item>
            <List.Item title="Step 3">
              <Paragraph>
                Wait for the request to be reviewed and approved.
              </Paragraph>
            </List.Item>
            <List.Item title="Step 4">
              <Paragraph>
                Receive the reimbursement in the form of payment.
              </Paragraph>
            </List.Item>
          </List.Accordion>
        )}
      </Card>
      {selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    // flex: 1,
  },
  storiesContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  storyContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 10,
    overflow: "hidden",
  },
  storyImage: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  modalContainer: {
    // flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    height: screenWidth,
    width: screenWidth,
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  cardAction: {
    color: "#ff5a",
    fontWeight: "bold",
    textAlign: "right",
  },
  expandButton: {
    alignSelf: "flex-end",
  },
  instructionsContainer: {
    padding: 10,
  },
});

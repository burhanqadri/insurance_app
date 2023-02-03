import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Surface, Text } from "react-native-paper";

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
      <Image source={story.source} style={styles.storyImage} />
      <Text style={styles.storyTitle}>{story.title}</Text>
    </Surface>
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
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <View style={styles.container}>
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
      {selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storiesContainer: {
    paddingVertical: 10,
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
  storyRow: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  fullScreenContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  fullScreenImage: {
    height: "100%",
    width: "100%",
  },
});

import { IconButton, Text } from "react-native-paper";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Video } from "expo-av";

export const VideoPlayer = ({ source }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: source }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay={isPlaying}
        resizeMode="cover"
        useNativeControls={false}
        style={styles.video}
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
          <IconButton
            icon={isPlaying ? "pause" : "play"}
            size={40}
            color="#fff"
            style={styles.playPauseButton}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Video Title</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 48,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  playPauseButton: {
    marginRight: 16,
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});

export default VideoPlayer;

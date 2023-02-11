import { Button, Card } from "react-native-paper";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import PDFView from "react-native-pdf";

const MyComponent = () => {
  const [showPDF, setShowPDF] = useState(false);
  const [source, setSource] = useState("");

  const onButtonPress = () => {
    setShowPDF(true);
    setSource("https://url-to-your-pdf-file.pdf");
  };

  const closePDF = () => {
    setShowPDF(false);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Button mode="contained" onPress={onButtonPress}>
          Open PDF
        </Button>
      </Card>
      {showPDF && (
        <View style={styles.pdfContainer}>
          <Button style={styles.closeButton} onPress={closePDF}>
            X
          </Button>
          <PDFView style={styles.pdf} source={{ uri: source }} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: 16,
    padding: 16,
  },
  pdfContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  pdf: {
    flex: 1,
  },
});

export default MyComponent;

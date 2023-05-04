import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export function RigthFeed() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.Image} />
      <View style={styles.legend} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    width: "60%",
    alignItems: "flex-start",
  },
  Image: {
    height: "70%",
    width: "70%",
    backgroundColor: "#71b2c3",
  },
  legend: {
    marginTop: "10%",
    height: "20%",
    backgroundColor: "#0654ba",
  },
});

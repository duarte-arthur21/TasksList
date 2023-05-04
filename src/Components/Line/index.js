import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export function Line() {
  return <View style={styles.wrapper}></View>;
}

const styles = StyleSheet.create({
  wrapper: {
    height: "8%",
    width: "40%",
    borderRadius: 15,
    backgroundColor: "#0654ba",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

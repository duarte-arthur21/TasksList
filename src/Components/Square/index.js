import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export function Square() {
  return <View style={styles.wrapper}></View>;
}

const styles = StyleSheet.create({
  wrapper: {
    height: "45%",
    width: "15%",
    borderRadius: 10,
    backgroundColor: "#0654ba",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

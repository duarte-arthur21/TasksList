import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export function LeftFeed() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.line}></View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "baseline",
  },
  line: {
    height: "50px",
    width: "40%",
    backgroundColor: "#0654ba",
    borderRadius: 30,
  },
});

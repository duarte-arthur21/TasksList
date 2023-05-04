import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export function Stores() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.circle}></View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: "45%",
    width: "45px",
    borderRadius: 30,
    backgroundColor: "#3770a1",
  },
  line: {
    marginTop: "2px",
    height: "6px",
    width: "40px",
    borderRadius: 30,
    backgroundColor: "#3770a1",
  },
});

import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Stores } from "../Stores";

export function Promotions() {
  return (
    <View style={styles.wrapper}>
      <Stores />
      <Stores />
      <Stores />
      <Stores />
      <Stores />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    height: "10%",
    width: "100%",
    backgroundColor: "#42e3f5",
    flexDirection: "row",
    alignItems: "center",
  },
});

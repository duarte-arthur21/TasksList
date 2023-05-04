import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Personas } from "../Personas";

export function Profiles() {
  return (
    <View style={styles.wrapper}>
      <Personas />
      <Personas />
      <Personas />
      <Personas />
      <Personas />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    height: "10%",
    width: "100%",
    backgroundColor: "#3770a1",
    alignItems: "center",
    flexDirection: "row",
  },
});

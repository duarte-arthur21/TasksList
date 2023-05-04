import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Square } from "../Square";
import { Line } from "../Line";

export function NavBar() {
  return (
    <View style={styles.wrapper}>
      <Square />
      <Line />
      <Square />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    height: "15%",
    width: "100%",
    backgroundColor: "#42e3f5",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

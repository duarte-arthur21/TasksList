import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export function Items() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.square}></View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: 100,
    width: 100,
  },
  square: {
    height: "90px",
    width: "90px",
    backgroundColor: "#44b9bd",
    marginRight: "7px",
  },
  line: {
    height: "7px",
    width: "90px",
    borderRadius: 10,
    backgroundColor: "#44b9bd",
    marginTop: "3px",
    marginRight: "7px",
  },
});

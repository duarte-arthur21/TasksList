import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export function Personas() {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.circle}></View>
        <View style={styles.line}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
  },
  circle: {
    height: "60px",
    width: "60%",
    borderRadius: 30,
    backgroundColor: "#42e3f5",
  },
  line: {
    marginTop: "2px",
    height: "5px",
    width: "50px",
    borderRadius: 30,
    backgroundColor: "#42e3f5",
  },
});

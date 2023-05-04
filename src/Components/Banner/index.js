import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export function Banner() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.square} />

      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={styles.circleBlack} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    height: "25%",
    width: "100%",
    backgroundColor: "#3770a1",
    alignItems: "center",
  },
  square: {
    marginTop: "10px",
    height: "70%",
    width: "70%",
    backgroundColor: "#71b2c3",
  },
  circle: {
    height: "30px",
    width: "30px",
    borderRadius: 30,
    backgroundColor: "#71b2c3",
    margin: "5px",
  },
  circleBlack: {
    height: "30px",
    width: "30px",
    borderRadius: 30,
    backgroundColor: "#0654ba",
    margin: "5px",
  },
  container: {
    marginTop: "-20px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 100,
    width: 100,
  },
});

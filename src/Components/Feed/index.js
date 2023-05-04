import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { RigthFeed } from "./RigthFeed";
import { LeftFeed } from "./LeftFeed";

export function Feed() {
  return (
    <View style={styles.wrapper}>
      <LeftFeed />
      <RigthFeed />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    height: "20%",
    width: "100%",
    backgroundColor: "#3770a1",
    alignItems: "center",
  },
});

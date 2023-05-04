import React from "react";
import { View, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { Items } from "../Items";

export function Products() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.wrapper}>
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: "30px",
  },
  scrollView: {
    display: "flex",
    marginHorizontal: 20,
    backgroundColor: "#42e3f5",
    marginLeft: "-7px",
    height: "100%",
    width: "110%",
  },
});

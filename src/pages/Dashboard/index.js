import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "./header";
import { List } from "./components/List";

const Dashboard = () => {
  return (
    <View style={styles.Wrapper}>
      <Header />
      <List />
    </View>
  );
};

export { Dashboard };

const styles = StyleSheet.create({
  Wrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    color: "#fff",
  },
});

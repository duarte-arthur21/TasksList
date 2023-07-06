import React from "react";
import { Form } from "./Form";
import { Header } from "./Header";
import { View, StyleSheet } from "react-native";

const AddTodo = () => {
  return (
    <View style={styles.Wrapper}>
      <Header />
      <Form />
    </View>
  );
};

export { AddTodo };

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

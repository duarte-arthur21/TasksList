import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Footer({ navigation }) {
  const handleClick = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text>Já possuí uma conta ?</Text>
      <Text style={styles.link} onPress={handleClick}>
        {" "}
        Faça Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    height: 74,
    top: "600",
    left: 65,
    fontWeight: 500,
    fontSize: 13,
    alignItems: "center",
    color: "rgba(85, 132, 122, 0.97)",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: "30px",
  },
});

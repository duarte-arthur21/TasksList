import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export function Header() {
  return (
    <View>
      <Text style={styles.titulo}>Bem vindo!</Text>
      <Image
        source={require("../../images/image3.svg")}
        style={styles.picture}
      />
      <Text style={styles.titulo}>Tarefas a fazer:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "",
  },
  picture: {
    position: "relative",
    width: "211px",
    height: "226px",
    left: "89px",
  },
});

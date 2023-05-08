import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

function Button(props) {
  const { onPress, titulo } = props;

  return (
    <TouchableOpacity style={estilo.button} onPress={onPress}>
      <Text>{titulo}</Text>
    </TouchableOpacity>
  );
}

export { Button };

const estilo = StyleSheet.create({
  button: {
    display: "flex",
    position: "relative",
    fontSize: 35,
    backgroundColor: "#FFD700",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 5,
    width: 130,
    height: 30,
  },
});

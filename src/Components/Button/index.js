import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

function Button(props) {
  console.log(props);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={estilo.calcular}>{props.titulo}</Text>
    </TouchableOpacity>
  );
}

export { Button };

const estilo = StyleSheet.create({
  calcular: {
    fontSize: 25,
    backgroundColor: "#FFD700",
    borderRadius: 10,
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "-15px",
    position: "relative",
    width: "150%",
  },
});

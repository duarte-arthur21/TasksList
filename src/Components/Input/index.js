import React from "react";
import { View, Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";

function Input(props) {
  const { titulo, texto, onChangeText } = props;
  return (
    <View>
      <Text style={estilo.titulo}>{titulo}</Text>
      <TextInput
        style={estilo.textInput}
        placeholder={texto}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export { Input };

const estilo = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "100",
    color: "#000",
    borderColor: "#000",
    textAlign: "justify",
    marginLeft: "2px",
    marginRight: "2px",
    marginTop: "20px",
    position: "relative",
  },
  textInput: {
    fontSize: 20,
    color: "#888888",
    textAlign: "center",
    backgroundColor: "#D3D3D3",
    borderBottomColor: "#000",
    borderRadius: 15,
    marginBottom: "5%",
  },
});

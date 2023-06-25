import React from "react";
import { View, Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";

function Input(props) {
  const { titulo, texto, onChangeText, value, variant, type } = props;
  return (
    <View>
      <Text style={estilo.titulo}>{titulo}</Text>
      <TextInput
        style={[
          estilo.textInput,
          variant === "primary" && estilo.primaryButton,
          variant === "secondary" && estilo.secondaryButton,
        ]}
        value={value}
        placeholder={texto}
        onChangeText={onChangeText}
        type={type}
      />
    </View>
  );
}

export { Input };

const estilo = StyleSheet.create({
  titulo: {
    flex: 1,
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
    textAlign: "center",
    borderBottomColor: "#000",
    placeholderTextColor: "#D3D3D3",
    borderRadius: 15,
    marginBottom: "5%",
  },
  primaryButton: {
    color: "#888888",
    backgroundColor: "#D3D3D3",
  },
  secondaryButton: {
    backgroundColor: "white",
    borderStyle: "#000",
  },
});

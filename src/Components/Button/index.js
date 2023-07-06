import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

function Button(props) {
  const { onPress, titulo, variant } = props;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "primary" && styles.primaryButton,
        variant === "secondary" && styles.secondaryButton,
        variant === "sucess" && styles.SuccessButton,
        variant === "danger" && styles.DangerButton,
        variant === "dark" && styles.DarkButton,
        variant === "info" && styles.infoButton,
      ]}
      onPress={onPress}
    >
      <Text>{titulo}</Text>
    </TouchableOpacity>
  );
}

export { Button };

const styles = StyleSheet.create({
  button: {
    display: "flex",
    fontSize: 35,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 5,
    width: 130,
    height: 30,
  },
  primaryButton: {
    backgroundColor: "blue",
    color: "white",
  },
  secondaryButton: {
    backgroundColor: "#c0c0c0",
  },
  SuccessButton: {
    backgroundColor: "rgba(85, 132, 122, 0.97)",
  },
  DangerButton: {
    backgroundColor: "#ff0000",
  },
  infoButton: {
    backgroundColor: "#FFD700",
    color: "white",
  },
  DarkButton: {
    backgroundColor: "#000000",
    color: "white",
  },
});

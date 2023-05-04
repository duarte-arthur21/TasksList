import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Details({ navigation }) {
  return (
    <View style={styles.Container}>
      <Text>Page Details</Text>
      <Button title="Tela Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Tela FlexBox"
        onPress={() => navigation.navigate("FlexBox")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#0000",
    alignItems: "center",
    justifyContent: "center",
  },
});

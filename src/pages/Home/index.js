import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.Container}>
      <Text>Page Home</Text>
      <Button
        title="Tela Detail"
        onPress={() => navigation.navigate("Details")}
      />
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

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Components/config";

export function Form({ navigation }) {
  const [isTask, setIsTasks] = useState(null);

  const handleTextChange = (newText) => {
    setIsTasks(newText);
  };

  const handleDashboard = () => {
    navigation.navigate("Dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isTask === null) {
      handleDashboard();
    } else {
      addDoc(collection(db, "tasks"), {
        description: isTask,
        checked: false,
      })
        .then(() => {
          navigation.navigate("Dashboard");

          console.log("Sucess");
        })
        .catch((error) => {
          console.log("Error: " + error);
        });
    }
  };
  return (
    <View style={styles.StyledForm}>
      <Input
        onChanegText={handleTextChange}
        value={isTask}
        variant="secondary"
      />

      <Button
        titulo="Adicionar tarefa"
        variant="sucess"
        onPress={handleDashboard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  StyledForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "26px",
  },
});

import React from "react";
import { View } from "react-native";
import { Button } from "../Button";
import { Input } from "../Input";

function AddTaskForm(props) {
  const { onPress, value, onChangeText } = props;

  return (
    <View>
      <Input
        titulo="Adicione uma nova tarefa"
        texto="Nome da tarefa"
        onChangeText={onChangeText}
        value={value}
      />

      <Button variant="info" titulo="Enviar" onPress={onPress} />
    </View>
  );
}

export { AddTaskForm };

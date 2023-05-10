import React, { useState } from "react";
import { View, Switch, Text } from "react-native";

function Task(props) {
  const { name, completed, onCompleted } = props;
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked((previousState) => !previousState);
  };

  return (
    <View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isChecked ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isChecked}
        defaultChecked={completed}
        onChange={onCompleted}
      />
      <Text>{name}</Text>
    </View>
  );
}

export { Task };

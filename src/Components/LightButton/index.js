import React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

function LightButton(props) {
  const { onPress, style } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Entypo name="light-up" size={24} style={style} />
    </TouchableOpacity>
  );
}

export { LightButton };

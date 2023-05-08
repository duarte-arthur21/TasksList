import React, { useState } from "react";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { View, Text, StyleSheet } from "react-native";

export default function Conversor() {
  const [msg, setMsg] = useState("");
  const [num, setNum] = useState("");
  const [resultado, setResultado] = useState("");

  function dolarReal() {
    const conv = num * 0.191998;
    setResultado(conv);

    setMsg(" R$ Dolares ");
  }

  function euroReal() {
    const conv = num * 0.176613;
    setResultado(conv);

    setMsg(" € Euros");
  }

  function yuanReal() {
    const conv = num * 1.30191;
    setResultado(conv);

    setMsg(" ¥ Yuans");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Informe um Valor em Real:</Text>

      <Input
        style={styles.textInput}
        titulo="Informe um Valor em Real:"
        defaultValue={num}
        texto="0,00 R$"
        onChangeText={(num) => setNum(parseFloat(num))}
      />

      <Text style={styles.titulo}>Agora converta o valor</Text>
      <Button onPress={() => dolarReal()} titulo="Dolar EUA" variant="sucess" />

      <Button onPress={() => euroReal()} titulo="EURO" variant="primary" />

      <Button onPress={() => yuanReal()} titulo="Yuan" variant="danger" />

      <Text style={styles.resultado}>
        {Math.round(resultado).toFixed(2)}
        {msg}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    position: "relative",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
  resultado: {
    display: "flex",
    fontSize: 30,
    fontFamily: "Arial",
    fontWeight: "bold",
    lineHeight: 90,
    color: "#ffa500",
    textAlign: "center",
    position: "relative",
  },
  titulo: {
    fontSize: 20,
    fontFamily: "Arial",
    lineHeight: 90,
    color: "#fff",
    textAlign: "justify",
    position: "relative",
  },
});

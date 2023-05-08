import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export default function IMC({ navigation }) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [mensagem, setMsg] = useState("");

  function Resultado() {
    const imc = peso / (altura * altura);
    setResultado(imc);

    if (!peso) {
      setMsg("Informe seu Peso");
      setResultado("");
    } else if (!altura) {
      setMsg("Informe sua Altura");
      setResultado("");
    } else {
      if (imc <= 18) {
        setMsg(": Baixo peso");
      } else if (imc > 18 && imc < 25) {
        setMsg(": Peso normal");
      } else if (imc >= 25 && imc < 35) {
        setMsg(": Sobrepeso");
      } else if (imc >= 35 && imc < 40) {
        setMsg(": Obesidade");
      } else if (imc >= 40 && imc <= 49) {
        setMsg(": Obesidade grave");
      } else if (imc > 50) {
        setMsg(": Obesidade gravíssima");
      }
    }
  }

  function limpar() {
    setAltura("");
    setPeso("");
    setResultado("");
    setMsg("");
  }

  return (
    <View style={styles.Container}>
      <Input
        titulo="Informe seu Peso"
        defaultValue={peso}
        onChangeText={(peso) => setPeso(parseFloat(peso))}
        texto="Kg*"
      />
      <Input
        titulo="Informe sua Altura"
        defaultValue={altura}
        onChangeText={(altura) => setAltura(parseFloat(altura))}
        texto="M*"
      />
      <Button titulo="Calcular" onPress={() => Resultado()} variant="info" />
      <Button titulo="Limpar" onPress={() => limpar()} variant="secondary" />
      <Text style={styles.resultado}>
        {resultado}
        {mensagem}
      </Text>{" "}
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
  resultado: {
    fontSize: 30,
    fontFamily: "Arial",
    fontWeight: "bold",
    lineHeight: 84,
    color: "#000000",
    shadowColor: "#000",
    borderColor: "#000",
    textAlign: "center",
    marginLeft: "7%",
    marginRight: "5%",
    marginBottom: "10%",
    position: "relative",
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

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
    <View>
      <Text style={styles.titulo}>Informe um Valor em Real:</Text>
      <TextInput
        style={styles.textInput}
        defaultValue={num}
        placeholder="0,00 R$"
        onChangeText={(num) => setNum(parseFloat(num))}
      />

      <Text style={styles.titulo}>Agora converta o valor</Text>
      <TouchableOpacity onPress={() => dolarReal()}>
        <Text style={styles.calcular}>Dolar EUA</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => euroReal()}>
        <Text style={styles.calcular}>EURO</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => yuanReal()}>
        <Text style={styles.calcular}>Yuan</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>
        {Math.round(resultado).toFixed(2)}
        {msg}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    display: "flex",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "70%",
    opacity: 0.7,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "15%",
  },
  Image: {
    flex: 0.3,
    width: "100%",
    height: "35%",
    marginTop: "30%",
    marginBottom: "29%",
  },
  flag: {
    flex: 1,
    display: "flex",
    position: "absolute",
    marginTop: "6%",
    marginLeft: "10%",
    width: "20%",
    height: "35%",
  },
  resultado: {
    fontSize: 30,
    fontFamily: "Arial",
    fontWeight: "bold",
    lineHeight: 84,
    color: "#ffa500",
    shadowColor: "#000",
    borderColor: "#000",
    textAlign: "center",
    marginLeft: "7%",
    marginRight: "5%",
    marginBottom: "10%",
    position: "relative",
  },
  titulo: {
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "100",
    color: "#fff",
    borderColor: "#000",
    textAlign: "justify",
    marginLeft: "7%",
    marginRight: "5%",
    position: "relative",
  },
  textInput: {
    fontSize: 30,
    color: "#000f",
    textAlign: "center",
    backgroundColor: "#ffff",
    borderBottomColor: "#000",
    borderRadius: 15,
    marginBottom: "5%",
    shadowColor: "#000",
  },
  alignItem: {
    alignItems: "stretch",
    textAlign: "end",
    marginBottom: "1%",
    position: "end",
    justifyContent: "flex-end",
  },
  bottom: {
    fontSize: 30,
    backgroundColor: "#ffa500",
    borderRadius: 15,
    textAlign: "center",
    marginBottom: "5%",
    marginTop: "5%",
    width: "100%",
  },
  calcular: {
    fontSize: 25,
    backgroundColor: "#ffa500",
    borderRadius: 10,
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "5%",
    width: "90%",
  },
});

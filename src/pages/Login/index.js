import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";

export default function Login({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Dashboard");
  };
  const handleClick = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.titulo}>Bem vindo!</Text>

      <Input texto="Email" variant="secondary" />
      <Input texto="Senha" variant="secondary" />

      <Text style={styles.link}>Esqueceu a senha ?</Text>
      <Button titulo="Login" variant="sucess" onPress={handleLogin} />

      <View style={styles.container}>
        <Text>Não tem uma conta ?</Text>
        <Text style={styles.link} onPress={handleClick}>
          Cadastre-se
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    color: "#fff",
  },
  titulo: {
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "",
  },
  link: {
    top: "600",
    left: 65,
    fontWeight: 500,
    fontSize: 13,
    alignItems: "center",
    color: "rgba(85, 132, 122, 0.97)",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    height: "10px",
  },
});

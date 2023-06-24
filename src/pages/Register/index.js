import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";

export default function Register({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Dashboard");
  };
  const handleClick = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.titulo}>Crie sua Conta de Usuario!</Text>

      <Input texto="Email" variant="secondary" />
      <Input texto="Username" variant="secondary" />
      <Input texto="Senha" variant="secondary" />
      <Input texto="Confirme Senha" variant="secondary" />

      <Button titulo="Cadastre-se" variant="sucess" onPress={handleLogin} />

      <View style={styles.container}>
        <Text>Já possuí uma conta ?</Text>
        <Text style={styles.link} onPress={handleClick}>
          {" "}
          Faça Login
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
    height: 74,
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
    marginTop: "30px",
  },
});

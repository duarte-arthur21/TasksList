import React, { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../Components/config";
import { Footer } from "./footer";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function create() {
    if (password === confirmPassword) {
      addDoc(collection(db, "users"), {
        email: email,
        password: password,
        username: username,
      })
        .then(() => {
          console.log("Sucess");
          navigation.navigate("Dashboard");
        })
        .catch((error) => {
          console.log("Error: " + error);
        });
    } else {
      Alert.alert("Senhas diferentes");
    }
  }

  return (
    <View style={styles.Wrapper}>
      <Text style={styles.titulo}>Crie sua Conta de Usuario!</Text>

      <Input
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        texto="Email"
        variant="secondary"
        type="email"
      />

      <Input
        value={username}
        onChangeText={(username) => {
          setUsername(username);
        }}
        texto="Username"
        variant="secondary"
      />

      <Input
        secureTextEntry
        value={password}
        onChangeText={(password) => {
          setPassword(password);
        }}
        texto="Senha"
        variant="secondary"
      />

      <Input
        secureTextEntry
        value={confirmPassword}
        onChangeText={(confirmPassword) => {
          setConfirmPassword(confirmPassword);
        }}
        texto="Confirme Senha"
        variant="secondary"
      />

      <Button titulo="Cadastre-se" variant="sucess" onPress={create} />

      <Footer />
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
});

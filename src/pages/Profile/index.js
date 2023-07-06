import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "../../Components/Input";
import { doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../../Components/config";
import { Button } from "../../Components/Button";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function edit() {
    updateDoc(doc(db, "users", ""), {
      email: email,
      password: password,
      username: username,
    })
      .then(() => {
        console.log("Sucess");
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  function Delete() {
    deleteDoc(doc(db, "users", ""));
  }
  function loadUser() {
    getDoc(
      doc(db, "users", "")
        .then((docData) => {
          if (docData.exists()) {
            setUsername(docData.data().username);
            setEmail(docData.data().email);
            setPassword(docData.data().password);
          } else {
            console.log("No such a data");
          }
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }

  return (
    <View style={styles.Wrapper}>
      <Text style={styles.titulo}>Seu Perfil!</Text>
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

      <View>
        <Button titulo="Salvar" variant="sucess" onPress={edit} />
        <Button titulo="Excluir" variant="danger" onPress={Delete} />
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
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

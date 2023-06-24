import React from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import { Button } from "../../Components/Button";
import useToggle from "../../Components/UseToggle";

export default function Home() {
  const [toggleValue, toggle] = useToggle("OFF");

  return (
    <View style={styles.Wrapper}>
      <ImageBackground
        source={require("../../images/space.avif")}
        style={styles.background}
      >
        <View>
          <View style={styles.Container}>
            <Image
              source={require("../../images/perfil.jpg")}
              style={styles.Perfil}
            />
          </View>
          <h1 style={{ color: "#FFD700" }}>Hello World!</h1>
          <View>
            <h3>Olá eu sou o Arthur Duarte! 👋</h3>
          </View>

          <p style={{ padding: 5 }}>
            Cursando sexto semestre de Tecnologia em Sistemas para Internet,
            Técnico de Informática,🧑‍💻!
          </p>

          <p style={{ padding: 5 }}>
            Tenho como objetivo entrar no mercado de trabalho como desenvolvedor
            Front-end
          </p>

          <p style={{ padding: 5 }}>
            Atual faço parte do time de programadores front-end em formação pela
            Plural Systems!
          </p>

          <View style={styles.Container}>
            <Button titulo={`${toggleValue}`} onPress={toggle} variant="info" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    color: "#fff",
  },
  Container: {
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  Perfil: {
    width: 130,
    height: 130,
    borderRadius: 450,
    padding: 1,
    display: "flex",
  },
});

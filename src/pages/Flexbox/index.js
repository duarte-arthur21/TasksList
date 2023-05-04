import React from "react";
import { StyleSheet, View } from "react-native";
import { Banner } from "../../Components/Banner";
import { NavBar } from "../../Components/NavBar";
import { Feed } from "../../Components/Feed";
import { Products } from "../../Components/Products";
import { Promotions } from "../../Components/Promotions";
import { Profiles } from "../../Components/Profiles";

export default function Flexbox() {
  return (
    <View style={styles.Wrapper}>
      <NavBar />
      <Banner />
      <Promotions />
      <Feed />
      <Products />
      <Profiles />
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    flexDirection: "column",
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
  },
});

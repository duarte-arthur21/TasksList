import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../../../Components/config";

const Item = (props) => {
  const { description, checked } = props;
  const [isChecked, setIsChecked] = useState(true);

  const handleBlur = async () => {
    const collectionRef = collection(db, "tasks");
    const documentRef = doc(collectionRef, "");

    updateDoc(documentRef, {
      checked: !isChecked,
    })
      .then(() => {
        console.log("Valor do campo booleano atualizado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao atualizar o valor do campo booleano:", error);
      });
  };

  return (
    <View>
      <Text style={styles.Label}>
        <View style={isChecked ? styles.checkboxChecked : styles.checkbox} />

        <TextInput
          style={styles.CheckboxInput}
          editable={false}
          value={isChecked}
          onBlur={handleBlur}
        />
        {description}
      </Text>
    </View>
  );
};

export { Item };

const styles = StyleSheet.create({
  Label: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "13px",
    display: "flex",
    gap: "15px",
    textAlign: "center",
    cursor: "pointer",
  },
  checkbox: {
    width: "14px",
    height: "17px",
    border: "solid 2px",

    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "rgba(0, 0, 0, 1)",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  checkboxChecked: {
    width: "8px",
    height: "17px",
    border: "solid 2px",

    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(85, 132, 122, 0.97)",
    borderColor: "rgba(0, 0, 0, 1)",
    paddingHorizontal: 10,
  },

  span: {
    display: "inline-block",
    width: "17px",
    height: "17px",
    border: "2px solid #000",
  },

  CheckboxInput: {
    display: "none",
  },
});

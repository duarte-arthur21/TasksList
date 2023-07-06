import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import "firebase/database";
import { Item } from "./Item";

const List = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTodo = () => {
    navigation.navigate("Dashboard");
  };

  useEffect(() => {
    const fetchData = () => {
      const firestore = getFirestore();
      const collectionRef = collection(firestore, "tasks");

      getDocs(collectionRef)
        .then((querySnapshot) => {
          const documentArray = querySnapshot.docs.map((doc) => doc.data());
          setTasks(documentArray);
        })
        .catch((error) => {
          console.log("Erro ao buscar tarefas:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <View style={styles.Wrapper}>
      <View style={styles.header}>
        <View style={styles.PlusButton} onTouchStart={handleAddTodo}>
          +
        </View>
      </View>

      {tasks.map((document, index) => (
        <View key={index} style={styles.Items}>
          <Item description={document.description} />
        </View>
      ))}
    </View>
  );
};

export { List };

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: "#ffffff",
    borderRadius: "30px",
    width: "339px",
    height: "240px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    paddingInline: "31px",
    paddingBlock: "18px",
    marginTop: "21px",
  },
  header: {
    fontWeight: "500",
    fontSize: "13px",
    fontFamily: "Poppins",
    color: "#00000078",
    height: "34px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "4px",
  },

  PlusButton: {
    backgroundColor: "#000",
    width: "31px",
    height: "31px",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "28px",
    borderRadius: "50%",
    cursor: "pointer",

    //   &:hover {
    //     opacity: 0.7;
    //   }
  },
  Items: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    // height: calc(80% - 20px"),
    //   overflow-y: "auto",
    paddingBottom: "20px",
  },
});

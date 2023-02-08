import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Shoppingitem from "./components/Shoppingitem";
import { AntDesign } from "@expo/vector-icons";
import { async } from "@firebase/util";

import {
  app,
  db,
  collection,
  addDoc,
  getFirestore,
  getDocs,
} from "./firebase/index";
export default function App() {
  const [title, setTitle] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  // Pushing Data to fireBase
  const addShoppingItem = async () => {
    try {
      const docRef = await addDoc(collection(db, "shopping"), {
        title: title,
        isChecked: false,
      });
      setTitle("");
    } catch (e) {
      console.error("Error addikng document: ", e);
    }
    getShoppingList();
  };
  // Getting Data from Firebase
  const getShoppingList = async () => {
    const querySnapshot = await getDocs(collection(db, "shopping"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      setShoppingList({
        ...doc.data(),
        id: doc.id,
      });
    });
  };
  useEffect(() => {
    getShoppingList();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Heading */}
        <Text style={styles.heading}>Shopping List</Text>
        {/* No of Shopping items */}
        <Text style={styles.noOfItems}>0</Text>
        {/* delete all */}
        <Pressable>
          <AntDesign
            style={styles.delete}
            name="delete"
            size={30}
            color="black"
          />
        </Pressable>
      </View>
      {/* Flatlist Here */}
      {shoppingList.length > 0 ? (
        <FlatList
          data={shoppingList}
          renderItem={(item) => (
            <Shoppingitem title={item.title} keyExtractor={(item) => item.id} />
          )}
        />
      ) : (
        <ActivityIndicator />
      )}
      {/* Text Input */}
      <TextInput
        placeholder="Enter The Shopping Item"
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        onSubmitEditing={addShoppingItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    // backgroundColor: "red",
    width: "90%",
    padding: 10,
    marginTop: 30,
    alignSelf: "center",
    justifyContent: "space-between",
    // marginBottom:
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    flex: 1,
  },
  noOfItems: {
    fontSize: 30,
    fontWeight: "500",
    marginRight: 20,
  },
  delete: {
    lineHeight: 40,
    paddingLeft: 12,
  },
  input: {
    backgroundColor: "lightgray",

    padding: 10,
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: "auto",
    marginBottom: 10,
  },
});

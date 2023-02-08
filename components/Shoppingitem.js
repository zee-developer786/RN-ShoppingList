import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const Shoppingitem = (props) => {
  return (
    <View style={styles.container}>
      {/* Checked icon */}
      <Pressable>
        <AntDesign name="checkcircleo" size={24} color="black" />
      </Pressable>

      {/* shopping text */}
      <Text style={styles.title}>{props.title}</Text>
      {/* delete button */}
      <Pressable>
        <AntDesign name="delete" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default Shoppingitem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 10,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "500",
  },
});

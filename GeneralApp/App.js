import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [people, setpeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "abc", id: "7" },
    { name: "hamza", id: "8" },
    { name: "ali", id: "9" },
    { name: "asghar", id: "10" },
    { name: "alo", id: "11" },
    { name: "asdasfjad", id: "12" },
    { name: "bower", id: "13" },
  ]);
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              alert("My Name is: " + item.name);
            }}
          >
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
    marginTop: 40,
    backgroundColor: "pink",
    color: "black",
  },
  list: {
    backgroundColor: "black",
    padding: 30,
    paddingTop: 100,
  },
});

export default App;

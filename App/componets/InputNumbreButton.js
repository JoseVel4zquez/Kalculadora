import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

export default function InputNumbreButton() {
  return <TouchableOpacity style={styles.container}></TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
});

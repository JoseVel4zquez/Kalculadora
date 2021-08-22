import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Cientifica() {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{color: colors.text}}>Calculadora Cientifica</Text>
    </View>
  );
}

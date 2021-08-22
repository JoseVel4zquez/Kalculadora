import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen({navigation}) {
  const { colors } = useTheme();

  const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '=']

  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    result: {
      width: '100%',
      minHeight: 300,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    resultText: {
      margin: 10, 
      fontSize: 25,
    },
    button:{ 
      borderColor: colors.text,
      alignItems: 'center',
      borderWidth: 0.5,
      justifyContent: 'center',
      minWidth: 90,
      minHeight: 90,
      flex: 2,
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    }
  })

  return (
    <View>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <View style={styles.result}>
        <Text style={[styles.resultText, {color: colors.text}]}>2 + 2 = 5</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
          button === '=' ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: 'lightblue'}]}><Text style={{color: colors.text}}>{button}</Text></TouchableOpacity>
          :
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#ededed'}]}><Text style={{color: colors.text}}>{button}</Text></TouchableOpacity>
        )}
      </View>
    </View>
  );
}
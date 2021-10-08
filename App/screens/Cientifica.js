import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useFocusEffect } from "@react-navigation/native";
import useOrientation from "../hooks/useOrientation";
import { ButtonContainer } from "../hooks/buttons";

export default function Cientifica() {

  const orientation = useOrientation();


  const [darkMode, setDarkMode] = useState(false);
  const [ciencia, setCiencia] = useState([
    "AC",
    "DEL",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    3,
    2,
    1,
    "+",
    0,
    ".",
    "+/-",
    "=",
  ]);
  ScreenOrientation.unlockAsync();
  const theme = useTheme();

  useEffect(() => {
    if (theme.dark) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [theme]);

  useFocusEffect(
    useCallback(() => {
      ScreenOrientation.addOrientationChangeListener((event) => {
        switch (event.orientationInfo.orientation) {
          case 1:
            setCiencia(buttons);

            break;
          case 3:
            setCiencia(cientifico.concat(buttons));

            break;
          case 4:
            setCiencia(cientifico.concat(buttons));
            break;

          default:
            setCiencia(buttons);
            break;
        }
      });
    }, [])
  );

  const buttons = [
    "AC",
    "DEL",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    3,
    2,
    1,
    "+",
    0,
    ".",
    "+/-",
    "=",
  ];
  const cientifico = [
    "cos",
    "sen",
    "tan",
    "√",
    "x²",
    "1/x",
    "|x|",
    "n!",
    "e",
    "π",
    "log",
    "ln",
  ];
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");
  const [CalculadoraOrientation, setCalculadoraOrientation] = useState(0);
  function handleInput(buttonPressed) {
    console.log(buttonPressed);
    if (
      (buttonPressed === "+") |
      (buttonPressed === "-") |
      (buttonPressed === "*") |
      (buttonPressed == "/") |
      (buttonPressed === "+/-") |
      (buttonPressed === "%")
    ) {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ");
      return;
    }
    function calculator() {
      const splitNumber = currentNumber.split(" ");
      const firstNumber = parseFloat(splitNumber[0]);
      const lastNumbers = parseFloat(splitNumber[2]);
      const operator = splitNumber[1];

      switch (operator) {
        case "+":
          setCurrentNumber((firstNumber + lastNumbers).toString());
          break;
        case "-":
          setCurrentNumber((firstNumber - lastNumbers).toString());
          break;
        case "*":
          setCurrentNumber((firstNumber * lastNumbers).toString());
          break;
        case "/":
          setCurrentNumber((firstNumber / lastNumbers).toString());

          break;
        case "+/-":
          setCurrentNumber((firstNumber * -1).toString());
          break;
        case "%":
          setCurrentNumber((firstNumber / 100).toString());
      }
    }
    switch (buttonPressed) {
      case "DEL":
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        setLastNumber("");
        setCurrentNumber("");
        return;
      case "AC":
        setLastNumber("");
        setCurrentNumber("");
        return;
      case "+/-":
        setLastNumber(currentNumber + "+/-");
        calculator();
        return;
      case "=":
        setLastNumber(currentNumber + " = ");
        calculator();
        return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }

  const styles = StyleSheet.create({
    result: {
      backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
      width: "100%",
      minHeight: 100,
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    resultText: {
      color: darkMode ? "#f5f5f5" : "#282F38",
      margin: 10,
      fontSize: 40,
    },
    historyText: {
      color: darkMode ? "#b5b5b5" : "#7c7c7c",
      fontSize: 20,
      marginRight: 3,
      alignSelf: "flex-end",
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      top: cientifico ? '-7%' : '-70%',
      width: cientifico ? '100%' : '22%',
    },
    button: {
      borderColor: darkMode ? "#3f4d5b" : "#e5e5e5",
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      minWidth: 88,
      minHeight: 88,
      flex: 2,
    },
    textButton: {
      color: darkMode ? "#b5b7bb" : "#7c7c7c",
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>

      <View style={styles.buttons}>
      {/* <ButtonContainer width={orientation.width / 3} isPortriat={orientation.isPortrait}> */}
        {ciencia.map((button) =>
          button === "=" ? (
            <TouchableOpacity
              key={button}
              style={[styles.button, { backgroundColor: "#9dbc7b" }]}
              onPress={() => handleInput(button)}
            >
              <Text
                style={[styles.textButton, { color: "white", fontSize: 30 }]}
              >
                {button}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor:
                    typeof button === "number"
                      ? darkMode === true
                        ? "#303946"
                        : "#fff"
                      : darkMode === true
                      ? "#414853"
                      : "#ededed",
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          )
        )}
      {/* </ButtonContainer> */}
      </View>
    </View>
  );
}

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
  Picker,
} from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Velocidad() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Seleccionar");
  const [selectedValue2, setSelectedValue2] = useState("Seleccionar");
  const theme = useTheme();

  useEffect(() => {
    if (theme.dark) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [theme]);
  const buttons = ["AC", "DEL", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "="];

  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");
  function handleInput(buttonPressed) {
    console.log(buttonPressed);
    if (
      (buttonPressed === "+") |
      (buttonPressed === "-") |
      (buttonPressed === "*") |
      (buttonPressed == "/") |
      (buttonPressed === "+/-")
    ) {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ");
      return;
    }
    function calculator() {
      const splitNumber = currentNumber.split(" ");
      const firstNumber = parseFloat(splitNumber[0]);
      const lastNumbers = parseFloat(splitNumber[2]);
      const operator = splitNumber[1];

      console.log(selectedValue2);
      if (
        selectedValue == "Seleccionar" &&
        (selectedValue2 == "Seleccionar") |
          (selectedValue == "Seleccionar") |
          (selectedValue2 == "Seleccionar")
      ) {
        setCurrentNumber("Selecciona una opcion");
      } else if (selectedValue === selectedValue2) {
        setCurrentNumber(firstNumber.toString());
      } else if (
        selectedValue == "Centimetros/segundo" &&
        selectedValue2 == "Metros/segundo"
      ) {
        setCurrentNumber((firstNumber / 100).toString());
      } else if (
        selectedValue == "Centimetros/segundo" &&
        selectedValue2 == "Millas/hora"
      ) {
        setCurrentNumber((firstNumber / 44.704).toString());
      } else if (
        selectedValue == "Centimetros/segundo" &&
        selectedValue2 == "Nudos"
      ) {
        setCurrentNumber((firstNumber / 51.444).toString());
      } else if (
        selectedValue == "Centimetros/segundo" &&
        selectedValue2 == "Mach"
      ) {
        setCurrentNumber((firstNumber / 34300).toString());
      }
      //metros por segundo
      else if (
        selectedValue == "Metros/segundo" &&
        selectedValue2 == "Centimetros/segundo"
      ) {
        setCurrentNumber((firstNumber * 100).toString());
      } else if (
        selectedValue == "Metros/segundo" &&
        selectedValue2 == "Millas/hora"
      ) {
        setCurrentNumber((firstNumber * 2.237).toString());
      } else if (
        selectedValue == "Metros/segundo" &&
        selectedValue2 == "Nudos"
      ) {
        setCurrentNumber((firstNumber * 1.944).toString());
      } else if (
        selectedValue == "Metros/segundo" &&
        selectedValue2 == "Mach"
      ) {
        setCurrentNumber((firstNumber / 343).toString());
      }
      //Millas por hora
      else if (
        selectedValue == "Millas/hora" &&
        selectedValue2 == "Centimetros/segundo"
      ) {
        setCurrentNumber((firstNumber * 44.704).toString());
      } else if (
        selectedValue == "Millas/hora" &&
        selectedValue2 == "Metros/segundo"
      ) {
        setCurrentNumber((firstNumber / 2.237).toString());
      } else if (selectedValue == "Millas/hora" && selectedValue2 == "Nudos") {
        setCurrentNumber((firstNumber / 1.151).toString());
      } else if (selectedValue == "Millas/hora" && selectedValue2 == "Mach") {
        setCurrentNumber((firstNumber / 767).toString());
      }
      //Nudos
      else if (
        selectedValue == "Nudos" &&
        selectedValue2 == "Centimetros/segundo"
      ) {
        setCurrentNumber((firstNumber * 51.444).toString());
      } else if (
        selectedValue == "Nudos" &&
        selectedValue2 == "Metros/segundo"
      ) {
        setCurrentNumber((firstNumber / 1.944).toString());
      } else if (selectedValue == "Nudos" && selectedValue2 == "Millas/hora") {
        setCurrentNumber((firstNumber * 1.151).toString());
      } else if (selectedValue == "Nudos" && selectedValue2 == "Mach") {
        setCurrentNumber((firstNumber / 667).toString());
      }
      //mach
      else if (
        selectedValue == "Mach" &&
        selectedValue2 == "Centimetros/segundo"
      ) {
        setCurrentNumber((firstNumber * 34300).toString());
      } else if (
        selectedValue == "Mach" &&
        selectedValue2 == "Metros/segundo"
      ) {
        setCurrentNumber((firstNumber * 343).toString());
      } else if (selectedValue == "Mach" && selectedValue2 == "Millas/hora") {
        setCurrentNumber((firstNumber * 767).toString());
      } else if (selectedValue == "Mach" && selectedValue2 == "Nudos") {
        setCurrentNumber((firstNumber * 667).toString());
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

      case "=":
        setLastNumber(
          currentNumber + " " + selectedValue + " a " + selectedValue2
        );
        calculator();
        return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }
  const styles = StyleSheet.create({
    container: {
      flex: 3,
      // justifyContent: "space-evenly",
    },  
    result: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
      minHeight: 22,
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    resultText: {
      justifyContent: "flex-end",
      color: darkMode ? "#f5f5f5" : "#282F38",
      margin: 10,
      marginBottom: 10,
      fontSize: 20,
    },
    historyText: {
      color: darkMode ? "#b5b5b5" : "#7c7c7c",
      fontSize: 15,
      marginRight: 3,
      // marginBottom: -10,
      alignSelf: "flex-end",
      // flex: 0.2,
    },
    buttons: {
      // flex: 2,
      flexDirection: "row",
      flexWrap: "wrap",
      // width: 350,
      // height: 204,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    button: {
      borderColor: darkMode ? "#3f4d5b" : "#e5e5e5",
      borderWidth: 0.5,
      alignItems: "center",
      justifyContent: "center",
      minWidth: 80,
      minHeight: 90,
      flex: 2,
    },
    textButton: {
      // flex: 1,
      color: darkMode ? "#b5b7bb" : "#7c7c7c",
      fontSize: 20,
      
    },
    pikerView: {
      flex: 0.5,
      backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
      flexDirection: "row",
      // marginBottom: 50,
      // marginTop: 0,
      // paddingBottom: 50,
      alignItems: "center",
    },
  });
  return (
    <View style={styles.container}>
            <View style={styles.result}>
                <Text style={styles.historyText}>{lastNumber}</Text>
                <Text style={styles.resultText}>{currentNumber}</Text>
            </View>
            <View style={styles.pikerView}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ marginTop: 0, flex: 1, }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
          <Picker.Item
            label="Seleccionar"
            value="Seleccionar"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Centimetros/segundo"
            value="Centimetros/segundo"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Metros/segundo"
            value="Metros/segundo"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Millas/hora"
            value="Millas/hora"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Nudos"
            value="Nudos"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Mach"
            value="Mach"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
        </Picker>
        <Picker
          selectedValue={selectedValue2}
          style={{ marginTop: 0, flex: 1, }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
        >
          <Picker.Item
            label="Seleccionar"
            value="Seleccionar"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Centimetros/segundo"
            value="Centimetros/segundo"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Metros/segundo"
            value="Metros/segundo"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Millas/hora"
            value="Millas/hora"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Nudos"
            value="Nudos"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Mach"
            value="Mach"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
        </Picker>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
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
      </View>
    </View>
  );
}

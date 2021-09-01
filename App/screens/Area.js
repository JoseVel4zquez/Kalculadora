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

export default function Area() {
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
        selectedValue == "Milimetros cuadrados" &&
        selectedValue2 == "Centimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber / 100).toString());
      } else if (
        selectedValue == "Milimetros cuadrados" &&
        selectedValue2 == "Hectareas"
      ) {
        setCurrentNumber((firstNumber / 1e10).toString());
      } else if (
        selectedValue == "Milimetros cuadrados" &&
        selectedValue2 == "Kilometros cuadrados"
      ) {
        setCurrentNumber((firstNumber / 1e12).toString());
      } else if (
        selectedValue == "Milimetros cuadrados" &&
        selectedValue2 == "Pulgadas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 645).toString());
      } else if (
        selectedValue == "Milimetros cuadrados" &&
        selectedValue2 == "Pies cuadrados"
      ) {
        setCurrentNumber((firstNumber / 92903).toString());
      } else if (
        selectedValue == "Milimetros cuadrados" &&
        selectedValue2 == "Yardas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 836127).toString());
      } else if (
        selectedValue == "Milimetros cuadrados" &&
        selectedValue2 == "Acres"
      ) {
        setCurrentNumber((firstNumber / 4.047e9).toString());
      } else if (
        selectedValue == "Milimetros cuadrados" &&
        selectedValue2 == "Millas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 2.59e12).toString());
      }
      //Centimetros cuadrados
      else if (
        selectedValue == "Centimetros cuadrados" &&
        selectedValue2 == "Milimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 100).toString());
      } else if (
        selectedValue == "Centimetros cuadrados" &&
        selectedValue2 == "Hectareas"
      ) {
        setCurrentNumber((firstNumber / 1e8).toString());
      } else if (
        selectedValue == "Centimetros cuadrados" &&
        selectedValue2 == "Kilometros cuadrados"
      ) {
        setCurrentNumber((firstNumber / 1e10).toString());
      } else if (
        selectedValue == "Centimetros cuadrados" &&
        selectedValue2 == "Pulgadas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 6.452).toString());
      } else if (
        selectedValue == "Centimetros cuadrados" &&
        selectedValue2 == "Pies cuadrados"
      ) {
        setCurrentNumber((firstNumber / 929).toString());
      } else if (
        selectedValue == "Centimetros cuadrados" &&
        selectedValue2 == "Yardas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 8361).toString());
      } else if (
        selectedValue == "Centimetros cuadrados" &&
        selectedValue2 == "Acres"
      ) {
        setCurrentNumber((firstNumber / 4.047e7).toString());
      } else if (
        selectedValue == "Centimetros cuadrados" &&
        selectedValue2 == "Millas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 2.59e10).toString());
      }
      //hectareas
      else if (
        selectedValue == "Hectareas" &&
        selectedValue2 == "Milimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 1e10).toString());
      } else if (
        selectedValue == "Hectareas" &&
        selectedValue2 == "Centimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 1e8).toString());
      } else if (
        selectedValue == "Hectareas" &&
        selectedValue2 == "Kilometros cuadrados"
      ) {
        setCurrentNumber((firstNumber / 100).toString());
      } else if (
        selectedValue == "Hectareas" &&
        selectedValue2 == "Pulgadas cuadradas"
      ) {
        setCurrentNumber((firstNumber * 1.55e7).toString());
      } else if (
        selectedValue == "Hectareas" &&
        selectedValue2 == "Pies cuadrados"
      ) {
        setCurrentNumber((firstNumber * 107639).toString());
      } else if (
        selectedValue == "Hectareas" &&
        selectedValue2 == "Yardas cuadradas"
      ) {
        setCurrentNumber((firstNumber * 11960).toString());
      } else if (selectedValue == "Hectareas" && selectedValue2 == "Acres") {
        setCurrentNumber((firstNumber * 2.471).toString());
      } else if (
        selectedValue == "Hectareas" &&
        selectedValue2 == "Millas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 259).toString());
      }
      //kilometros cuadrados
      else if (
        selectedValue == "Kilometros cuadrados" &&
        selectedValue2 == "Milimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 1e12).toString());
      } else if (
        selectedValue == "Kilometros cuadrados" &&
        selectedValue2 == "Centimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 1e10).toString());
      } else if (
        selectedValue == "Kilometros cuadrados" &&
        selectedValue2 == "Hectareas"
      ) {
        setCurrentNumber((firstNumber * 100).toString());
      } else if (
        selectedValue == "Kilometros cuadrados" &&
        selectedValue2 == "Pulgadas cuadradas"
      ) {
        setCurrentNumber((firstNumber * 1.55e9).toString());
      } else if (
        selectedValue == "Kilometros cuadrados" &&
        selectedValue2 == "Pies cuadrados"
      ) {
        setCurrentNumber((firstNumber * 1.076e7).toString());
      } else if (
        selectedValue == "Kilometros cuadrados" &&
        selectedValue2 == "Yardas cuadradas"
      ) {
        setCurrentNumber((firstNumber * 1.196e6).toString());
      } else if (
        selectedValue == "Kilometros cuadrados" &&
        selectedValue2 == "Acres"
      ) {
        setCurrentNumber((firstNumber * 247).toString());
      } else if (
        selectedValue == "Kilometros cuadrados" &&
        selectedValue2 == "Millas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 2.59).toString());
      }
      //Pulgadas cuadradas
      else if (
        selectedValue == "Pulgadas cuadradas" &&
        selectedValue2 == "Milimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 645).toString());
      } else if (
        selectedValue == "Pulgadas cuadradas" &&
        selectedValue2 == "Centimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 6.452).toString());
      } else if (
        selectedValue == "Pulgadas cuadradas" &&
        selectedValue2 == "Hectareas"
      ) {
        setCurrentNumber((firstNumber / 1.55e7).toString());
      } else if (
        selectedValue == "Pulgadas cuadradas" &&
        selectedValue2 == "Kilometros cuadrados"
      ) {
        setCurrentNumber((firstNumber / 1.55e9).toString());
      } else if (
        selectedValue == "Pulgadas cuadradas" &&
        selectedValue2 == "Pies cuadrados"
      ) {
        setCurrentNumber((firstNumber / 144).toString());
      } else if (
        selectedValue == "Pulgadas cuadradas" &&
        selectedValue2 == "Yardas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 1296).toString());
      } else if (
        selectedValue == "Pulgadas cuadradas" &&
        selectedValue2 == "Acres"
      ) {
        setCurrentNumber((firstNumber / 6.273e6).toString());
      } else if (
        selectedValue == "Pulgadas cuadradas" &&
        selectedValue2 == "Millas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 4.014e9).toString());
      }
      //pies cuadrados
      else if (
        selectedValue == "Pies cuadrados" &&
        selectedValue2 == "Milimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 92903).toString());
      } else if (
        selectedValue == "Pies cuadrados" &&
        selectedValue2 == "Centimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 929).toString());
      } else if (
        selectedValue == "Pies cuadrados" &&
        selectedValue2 == "Hectareas"
      ) {
        setCurrentNumber((firstNumber / 107639).toString());
      } else if (
        selectedValue == "Pies cuadrados" &&
        selectedValue2 == "Kilometros cuadrados"
      ) {
        setCurrentNumber((firstNumber / 1.076e7).toString());
      } else if (
        selectedValue == "Pies cuadrados" &&
        selectedValue2 == "Pulgadas cuadradas"
      ) {
        setCurrentNumber((firstNumber * 144).toString());
      } else if (
        selectedValue == "Pies cuadrados" &&
        selectedValue2 == "Yardas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 9).toString());
      } else if (
        selectedValue == "Pies cuadrados" &&
        selectedValue2 == "Acres"
      ) {
        setCurrentNumber((firstNumber / 43560).toString());
      } else if (
        selectedValue == "Pies cuadrados" &&
        selectedValue2 == "Millas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 2.788e7).toString());
      }
      //Yardas cuadradas
      else if (
        selectedValue == "Yardas cuadradas" &&
        selectedValue2 == "Milimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 836127).toString());
      } else if (
        selectedValue == "Yardas cuadradas" &&
        selectedValue2 == "Centimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 8361).toString());
      } else if (
        selectedValue == "Yardas cuadradas" &&
        selectedValue2 == "Hectareas"
      ) {
        setCurrentNumber((firstNumber / 11960).toString());
      } else if (
        selectedValue == "Yardas cuadradas" &&
        selectedValue2 == "Kilometros cuadrados"
      ) {
        setCurrentNumber((firstNumber / 1.196e6).toString());
      } else if (
        selectedValue == "Yardas cuadradas" &&
        selectedValue2 == "Pulgadas cuadradas"
      ) {
        setCurrentNumber((firstNumber * 1296).toString());
      } else if (
        selectedValue == "Yardas cuadradas" &&
        selectedValue2 == "Pies cuadrados"
      ) {
        setCurrentNumber((firstNumber * 9).toString());
      } else if (
        selectedValue == "Yardas cuadradas" &&
        selectedValue2 == "Acres"
      ) {
        setCurrentNumber((firstNumber / 4840).toString());
      } else if (
        selectedValue == "Yardas cuadradas" &&
        selectedValue2 == "Millas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 3.098e6).toString());
      }
      //Acres
      else if (
        selectedValue == "Acres" &&
        selectedValue2 == "Milimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 4.047e9).toString());
      } else if (
        selectedValue == "Acres" &&
        selectedValue2 == "Centimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 4.047e7).toString());
      } else if (selectedValue == "Acres" && selectedValue2 == "Hectareas") {
        setCurrentNumber((firstNumber / 2.471).toString());
      } else if (
        selectedValue == "Acres" &&
        selectedValue2 == "Kilometros cuadrados"
      ) {
        setCurrentNumber((firstNumber / 247).toString());
      } else if (
        selectedValue == "Acres" &&
        selectedValue2 == "Pulgadas cuadradas"
      ) {
        setCurrentNumber((firstNumber * 6.273e6).toString());
      } else if (
        selectedValue == "Acres" &&
        selectedValue2 == "Pies cuadrados"
      ) {
        setCurrentNumber((firstNumber * 43560).toString());
      } else if (
        selectedValue == "Acres" &&
        selectedValue2 == "Yardas cuadradas"
      ) {
        setCurrentNumber((firstNumber * 4840).toString());
      } else if (
        selectedValue == "Acres" &&
        selectedValue2 == "Millas cuadradas"
      ) {
        setCurrentNumber((firstNumber / 640).toString());
      }
      //Milla cuadradas
      else if (
        selectedValue == "Millas cuadradas" &&
        selectedValue2 == "Milimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 2.59e12).toString());
      } else if (
        selectedValue == "Millas cuadradas" &&
        selectedValue2 == "Centimetros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 2.59e10).toString());
      } else if (
        selectedValue == "Millas cuadradas" &&
        selectedValue2 == "Hectareas"
      ) {
        setCurrentNumber((firstNumber * 259).toString());
      } else if (
        selectedValue == "Millas cuadradas" &&
        selectedValue2 == "Kilometros cuadrados"
      ) {
        setCurrentNumber((firstNumber * 2.59).toString());
      } else if (
        selectedValue == "Millas cuadradas" &&
        selectedValue2 == "Pulgadas cuadradas"
      ) {
        setCurrentNumber((firstNumber * 4.014e9).toString());
      } else if (
        selectedValue == "Millas cuadradas" &&
        selectedValue2 == "Pies cuadrados"
      ) {
        setCurrentNumber((firstNumber * 2.788e7).toString());
      } else if (
        selectedValue == "Millas cuadradas" &&
        selectedValue2 == "Yardas cuadradas"
      ) {
        setCurrentNumber((firstNumber * 3.098e6).toString());
      } else if (
        selectedValue == "Millas cuadradas" &&
        selectedValue2 == "Acres"
      ) {
        setCurrentNumber((firstNumber * 640).toString());
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
            label="Milimetros cuadrados"
            value="Milimetros cuadrados"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Centimetros cuadrados"
            value="Centimetros cuadrados"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Hectareas"
            value="Hectareas"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Kilometros cuadrados"
            value="Kilometros cuadrados"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Pulgadas cuadradas"
            value="Pulgadas cuadradas"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Pies cuadrados"
            value="Pies cuadrados"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Yardas cuadradas"
            value="Yardas cuadradas"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Acres"
            value="Acres"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Millas cuadradas"
            value="Millas cuadradas"
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
            label="Milimetros cuadrados"
            value="Milimetros cuadrados"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Centimetros cuadrados"
            value="Centimetros cuadrados"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Hectareas"
            value="Hectareas"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Kilometros cuadrados"
            value="Kilometros cuadrados"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Pulgadas cuadradas"
            value="Pulgadas cuadradas"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Pies cuadrados"
            value="Pies cuadrados"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Yardas cuadradas"
            value="Yardas cuadradas"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Acres"
            value="Acres"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Millas cuadradas"
            value="Millas cuadradas"
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

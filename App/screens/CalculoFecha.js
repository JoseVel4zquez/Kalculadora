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
// import { useTheme } from "@react-navigation/native";
// import DateTimePicker from "@react-native-community/datetimepicker";

export default function CalculoFecha() {
  // const [darkMode, setDarkMode] = useState(false);
  // const [selectedValue, setSelectedValue] = useState("Seleccionar");
  // const [selectedValue2, setSelectedValue2] = useState("Seleccionar");
  // const theme = useTheme();

  // useEffect(() => {
  //   if (theme.dark) {
  //     setDarkMode(true);
  //   } else {
  //     setDarkMode(false);
  //   }
  // }, [theme]);
  // const buttons = ["AC", "DEL"];
  // const opciones = ["Grados", "Radianes", "Grados Centesimales"];
  // const [currentNumber, setCurrentNumber] = useState("");
  // const [lastNumber, setLastNumber] = useState("");
  // const [date, setDate] = useState(new Date(1598051730000));
  // const [date2, setDate2] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState("date");
  // const [show, setShow] = useState(false);
  // const [show2, setShow2] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === "ios");
  //   setDate(currentDate);
  // };
  // const onChange2 = (event, selectedDate) => {
  //   const currentDate = selectedDate || date2;
  //   setShow2(Platform.OS === "ios");
  //   setDate2(currentDate);
  //   calcularFecha(date, date2);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };
  // const showMode2 = (currentMode) => {
  //   setShow2(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode("date");
  // };

  // const showDatepicker2 = () => {
  //   showMode2("date");
  // };
  

  // const calcularFecha = (fecha1, fecha2) => {
  //   let correccionF1 = fecha1.toString().substring(0, 10);
  //   let correccionF2 = fecha2.toString().substring(0, 10);
  //   let fFecha1 = new Date(correccionF1).getTime();
  //   let fFecha2 = new Date(correccionF2).getTime();
  //   let milisegundosDia = 24 * 60 * 1000;
  //   let milisegundosTranscurridos = Math.abs(fFecha1 - fFecha2);
  //   let diasTranscurridos = Math.floor(
  //     milisegundosTranscurridos / milisegundosDia
  //   );
  //   console.log(diasTranscurridos);
  // };
  // function handleInput(buttonPressed) {
  //   console.log(buttonPressed);

  //   function calculator() {
  //     const splitNumber = currentNumber.split(" ");
  //     const firstNumber = parseFloat(splitNumber[0]);
  //     const lastNumbers = parseFloat(splitNumber[2]);
  //     const operator = splitNumber[1];
  //   }
  //   switch (buttonPressed) {
  //     case "DEL":
  //       setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
  //       setLastNumber("");
  //       setCurrentNumber("");
  //       return;
  //     case "AC":
  //       setLastNumber("");
  //       setCurrentNumber("");
  //       return;

  //     case "=":
  //       setLastNumber(
  //         currentNumber + " " + selectedValue + " a " + selectedValue2
  //       );
  //       calculator();
  //       return;
  //   }
  //   setCurrentNumber(currentNumber + buttonPressed);
  // }
  // const styles = StyleSheet.create({
  //   result: {
  //     backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
  //     width: "100%",
  //     minHeight: 100,
  //     alignItems: "flex-end",
  //     justifyContent: "flex-end",
  //   },
  //   resultText: {
  //     color: darkMode ? "#f5f5f5" : "#282F38",
  //     margin: 10,
  //     fontSize: 40,
  //   },
  //   historyText: {
  //     color: darkMode ? "#b5b5b5" : "#7c7c7c",
  //     fontSize: 20,
  //     marginRight: 3,
  //     alignSelf: "flex-end",
  //   },
  //   buttons: {
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //   },
  //   button: {
  //     borderColor: darkMode ? "#3f4d5b" : "#e5e5e5",
  //     borderWidth: 1,
  //     alignItems: "center",
  //     justifyContent: "center",
  //     minWidth: 88,
  //     minHeight: 88,
  //     flex: 2,
  //   },
  //   textButton: {
  //     color: darkMode ? "#b5b7bb" : "#7c7c7c",
  //     fontSize: 20,
  //   },
  //   pikerView: {
  //     backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
  //     flexDirection: "row",
  //     width: "100%",
  //   },
  // });

  return (
    <View style={styles.container}>
      {/* <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.pikerView}>
        <View style={{ width: "50%" }}>
          <View>
            <Button onPress={showDatepicker} title="Selecciona la fecha" />
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
              style={{ flexDirection: "row" }}
            />
          )}
        </View>
        <View style={{ width: "50%" }}>
          <View style={{ flexDirection: "row" }}>
            <Button onPress={showDatepicker2} title="Selecciona la fecha" />
          </View>

          {show2 && (
            <DateTimePicker
              testID="dateTimePicker2"
              value={date2}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange2}
              style={{ flexDirection: "row" }}
            />
          )}
        </View>
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
        )} */}
      {/* </View> */}
    </View>
  );
}

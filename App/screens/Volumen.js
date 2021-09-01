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

export default function Volumen() {
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
        selectedValue == "Mililitros" &&
        selectedValue2 == "Centimetros cubicos"
      ) {
        setCurrentNumber((firstNumber * 1).toString());
      } else if (
        selectedValue == "Mililitros" &&
        selectedValue2 == "Cucharaditas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 4.929).toString());
      } else if (
        selectedValue == "Mililitros" &&
        selectedValue2 == "Cucharadas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 14.787).toString());
      } else if (
        selectedValue == "Mililitros" &&
        selectedValue2 == "Onzas liquidas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 29.574).toString());
      } else if (
        selectedValue == "Mililitros" &&
        selectedValue2 == "Tazas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 240).toString());
      } else if (
        selectedValue == "Mililitros" &&
        selectedValue2 == "Pintas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 473).toString());
      } else if (
        selectedValue == "Mililitros" &&
        selectedValue2 == "Cuartos de galon(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 946).toString());
      } else if (
        selectedValue == "Mililitros" &&
        selectedValue2 == "Galones(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 3785).toString());
      } else if (
        selectedValue == "Mililitros" &&
        selectedValue2 == "Pulgadas cubicas"
      ) {
        setCurrentNumber((firstNumber / 16.387).toString());
      } else if (
        selectedValue == "Mililitros" &&
        selectedValue2 == "Pies cubicos"
      ) {
        setCurrentNumber((firstNumber / 28317).toString());
      } else if (
        selectedValue == "Mililitros" &&
        selectedValue2 == "Yardas cubicas"
      ) {
        setCurrentNumber((firstNumber / 764555).toString());
      } else if (
        selectedValue == "Mililitros" &&
        selectedValue2 == "Cucharaditas(UK)"
      ) {
        setCurrentNumber((firstNumber / 5.919).toString());
      }
      //CENTIMETROS CUBICOS
      else if (
        selectedValue == "Centimetros cubicos" &&
        selectedValue2 == "Mililitros"
      ) {
        setCurrentNumber((firstNumber * 1).toString());
      } else if (
        selectedValue == "Centimetros cubicos" &&
        selectedValue2 == "Cucharaditas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 4.929).toString());
      } else if (
        selectedValue == "Centimetros cubicos" &&
        selectedValue2 == "Cucharadas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 14.787).toString());
      } else if (
        selectedValue == "Centimetros cubicos" &&
        selectedValue2 == "Onzas liquidas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 29.574).toString());
      } else if (
        selectedValue == "Centimetros cubicos" &&
        selectedValue2 == "Tazas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 240).toString());
      } else if (
        selectedValue == "Centimetros cubicos" &&
        selectedValue2 == "Pintas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 473).toString());
      } else if (
        selectedValue == "Centimetros cubicos" &&
        selectedValue2 == "Cuartos de galon(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 946).toString());
      } else if (
        selectedValue == "Centimetros cubicos" &&
        selectedValue2 == "Galones(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 3785).toString());
      } else if (
        selectedValue == "Centimetros cubicos" &&
        selectedValue2 == "Pulgadas cubicas"
      ) {
        setCurrentNumber((firstNumber / 16.387).toString());
      } else if (
        selectedValue == "Centimetros cubicos" &&
        selectedValue2 == "Pies cubicos"
      ) {
        setCurrentNumber((firstNumber / 28317).toString());
      } else if (
        selectedValue == "Centimetros cubicos" &&
        selectedValue2 == "Yardas cubicas"
      ) {
        setCurrentNumber((firstNumber / 764555).toString());
      } else if (
        selectedValue == "Centimetros cubicos" &&
        selectedValue2 == "Cucharaditas(UK)"
      ) {
        setCurrentNumber((firstNumber / 5.919).toString());
      }
      //cucharaditas eua
      else if (
        selectedValue == "Cucharaditas(EE.UU)" &&
        selectedValue2 == "Mililitros"
      ) {
        setCurrentNumber((firstNumber * 4.929).toString());
      } else if (
        selectedValue == "Cucharaditas(EE.UU)" &&
        selectedValue2 == "Centimetros cubicos"
      ) {
        setCurrentNumber((firstNumber * 4.929).toString());
      } else if (
        selectedValue == "Cucharaditas(EE.UU)" &&
        selectedValue2 == "Cucharadas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 3).toString());
      } else if (
        selectedValue == "Cucharaditas(EE.UU)" &&
        selectedValue2 == "Onzas liquidas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 6).toString());
      } else if (
        selectedValue == "Cucharaditas(EE.UU)" &&
        selectedValue2 == "Tazas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 48.692).toString());
      } else if (
        selectedValue == "Cucharaditas(EE.UU)" &&
        selectedValue2 == "Pintas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 96).toString());
      } else if (
        selectedValue == "Cucharaditas(EE.UU)" &&
        selectedValue2 == "Cuartos de galon(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 192).toString());
      } else if (
        selectedValue == "Cucharaditas(EE.UU)" &&
        selectedValue2 == "Galones(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 768).toString());
      } else if (
        selectedValue == "Cucharaditas(EE.UU)" &&
        selectedValue2 == "Pulgadas cubicas"
      ) {
        setCurrentNumber((firstNumber / 3.325).toString());
      } else if (
        selectedValue == "Cucharaditas(EE.UU)" &&
        selectedValue2 == "Pies cubicos"
      ) {
        setCurrentNumber((firstNumber / 5745).toString());
      } else if (
        selectedValue == "Cucharaditas(EE.UU)" &&
        selectedValue2 == "Yardas cubicas"
      ) {
        setCurrentNumber((firstNumber / 155116).toString());
      } else if (
        selectedValue == "Cucharaditas(EE.UU)" &&
        selectedValue2 == "Cucharaditas(UK)"
      ) {
        setCurrentNumber((firstNumber / 1.201).toString());
      }
      //Cucharadas estados unidos
      else if (
        selectedValue == "Cucharadas(EE.UU)" &&
        selectedValue2 == "Mililitros"
      ) {
        setCurrentNumber((firstNumber * 14.787).toString());
      } else if (
        selectedValue == "Cucharadas(EE.UU)" &&
        selectedValue2 == "Centimetros cubicos"
      ) {
        setCurrentNumber((firstNumber * 14.787).toString());
      } else if (
        selectedValue == "Cucharadas(EE.UU)" &&
        selectedValue2 == "Cucharaditas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 3).toString());
      } else if (
        selectedValue == "Cucharadas(EE.UU)" &&
        selectedValue2 == "Onzas liquidas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 2).toString());
      } else if (
        selectedValue == "Cucharadas(EE.UU)" &&
        selectedValue2 == "Tazas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 16.231).toString());
      } else if (
        selectedValue == "Cucharadas(EE.UU)" &&
        selectedValue2 == "Pintas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 32).toString());
      } else if (
        selectedValue == "Cucharadas(EE.UU)" &&
        selectedValue2 == "Cuartos de galon(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 64).toString());
      } else if (
        selectedValue == "Cucharadas(EE.UU)" &&
        selectedValue2 == "Galones(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 256).toString());
      } else if (
        selectedValue == "Cucharadas(EE.UU)" &&
        selectedValue2 == "Pulgadas cubicas"
      ) {
        setCurrentNumber((firstNumber / 1.108).toString());
      } else if (
        selectedValue == "Cucharadas(EE.UU)" &&
        selectedValue2 == "Pies cubicos"
      ) {
        setCurrentNumber((firstNumber / 1915).toString());
      } else if (
        selectedValue == "Cucharadas(EE.UU)" &&
        selectedValue2 == "Yardas cubicas"
      ) {
        setCurrentNumber((firstNumber / 51705).toString());
      } else if (
        selectedValue == "Cucharadas(EE.UU)" &&
        selectedValue2 == "Cucharaditas(UK)"
      ) {
        setCurrentNumber((firstNumber * 2.498).toString());
      }
      //onzas liquidas
      else if (
        selectedValue == "Onzas liquidas(EE.UU)" &&
        selectedValue2 == "Mililitros"
      ) {
        setCurrentNumber((firstNumber * 29.574).toString());
      } else if (
        selectedValue == "Onzas liquidas(EE.UU)" &&
        selectedValue2 == "Centimetros cubicos"
      ) {
        setCurrentNumber((firstNumber * 29.574).toString());
      } else if (
        selectedValue == "Onzas liquidas(EE.UU)" &&
        selectedValue2 == "Cucharaditas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 6).toString());
      } else if (
        selectedValue == "Onzas liquidas(EE.UU)" &&
        selectedValue2 == "Cucharadas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 2).toString());
      } else if (
        selectedValue == "Onzas liquidas(EE.UU)" &&
        selectedValue2 == "Tazas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 8.115).toString());
      } else if (
        selectedValue == "Onzas liquidas(EE.UU)" &&
        selectedValue2 == "Pintas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 16).toString());
      } else if (
        selectedValue == "Onzas liquidas(EE.UU)" &&
        selectedValue2 == "Cuartos de galon(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 32).toString());
      } else if (
        selectedValue == "Onzas liquidas(EE.UU)" &&
        selectedValue2 == "Galones(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 128).toString());
      } else if (
        selectedValue == "Onzas liquidas(EE.UU)" &&
        selectedValue2 == "Pulgadas cubicas"
      ) {
        setCurrentNumber((firstNumber * 1.805).toString());
      } else if (
        selectedValue == "Onzas liquidas(EE.UU)" &&
        selectedValue2 == "Pies cubicos"
      ) {
        setCurrentNumber((firstNumber / 958).toString());
      } else if (
        selectedValue == "Onzas liquidas(EE.UU)" &&
        selectedValue2 == "Yardas cubicas"
      ) {
        setCurrentNumber((firstNumber / 25853).toString());
      } else if (
        selectedValue == "Onzas liquidas(EE.UU)" &&
        selectedValue2 == "Cucharaditas(UK)"
      ) {
        setCurrentNumber((firstNumber * 4.996).toString());
      }
      //Tazas eua
      else if (
        selectedValue == "Tazas(EE.UU)" &&
        selectedValue2 == "Mililitros"
      ) {
        setCurrentNumber((firstNumber * 240).toString());
      } else if (
        selectedValue == "Tazas(EE.UU)" &&
        selectedValue2 == "Centimetros cubicos"
      ) {
        setCurrentNumber((firstNumber * 240).toString());
      } else if (
        selectedValue == "Tazas(EE.UU)" &&
        selectedValue2 == "Cucharaditas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 48.692).toString());
      } else if (
        selectedValue == "Tazas(EE.UU)" &&
        selectedValue2 == "Cucharadas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 16.231).toString());
      } else if (
        selectedValue == "Tazas(EE.UU)" &&
        selectedValue2 == "Onzas liquidas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 8.115).toString());
      } else if (
        selectedValue == "Tazas(EE.UU)" &&
        selectedValue2 == "Pintas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 1.972).toString());
      } else if (
        selectedValue == "Tazas(EE.UU)" &&
        selectedValue2 == "Cuartos de galon(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 3.943).toString());
      } else if (
        selectedValue == "Tazas(EE.UU)" &&
        selectedValue2 == "Galones(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 15.773).toString());
      } else if (
        selectedValue == "Tazas(EE.UU)" &&
        selectedValue2 == "Pulgadas cubicas"
      ) {
        setCurrentNumber((firstNumber * 14.646).toString());
      } else if (
        selectedValue == "Tazas(EE.UU)" &&
        selectedValue2 == "Pies cubicos"
      ) {
        setCurrentNumber((firstNumber / 118).toString());
      } else if (
        selectedValue == "Tazas(EE.UU)" &&
        selectedValue2 == "Yardas cubicas"
      ) {
        setCurrentNumber((firstNumber / 3186).toString());
      } else if (
        selectedValue == "Tazas(EE.UU)" &&
        selectedValue2 == "Cucharaditas(UK)"
      ) {
        setCurrentNumber((firstNumber * 40.545).toString());
      }
      //PINTAS
      else if (
        selectedValue == "Pintas(EE.UU)" &&
        selectedValue2 == "Mililitros"
      ) {
        setCurrentNumber((firstNumber * 473).toString());
      } else if (
        selectedValue == "Pintas(EE.UU)" &&
        selectedValue2 == "Centimetros cubicos"
      ) {
        setCurrentNumber((firstNumber * 473).toString());
      } else if (
        selectedValue == "Pintas(EE.UU)" &&
        selectedValue2 == "Cucharaditas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 96).toString());
      } else if (
        selectedValue == "Pintas(EE.UU)" &&
        selectedValue2 == "Cucharadas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 32).toString());
      } else if (
        selectedValue == "Pintas(EE.UU)" &&
        selectedValue2 == "Tazas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 1.972).toString());
      } else if (
        selectedValue == "Pintas(EE.UU)" &&
        selectedValue2 == "Cuartos de galon(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 2).toString());
      } else if (
        selectedValue == "Pintas(EE.UU)" &&
        selectedValue2 == "Galones(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 8).toString());
      } else if (
        selectedValue == "Pintas(EE.UU)" &&
        selectedValue2 == "Pulgadas cubicas"
      ) {
        setCurrentNumber((firstNumber * 28.875).toString());
      } else if (
        selectedValue == "Pintas(EE.UU)" &&
        selectedValue2 == "Pies cubicos"
      ) {
        setCurrentNumber((firstNumber / 59.844).toString());
      } else if (
        selectedValue == "Pintas(EE.UU)" &&
        selectedValue2 == "Yardas cubicas"
      ) {
        setCurrentNumber((firstNumber / 1616).toString());
      } else if (
        selectedValue == "Pintas(EE.UU)" &&
        selectedValue2 == "Cucharaditas(UK)"
      ) {
        setCurrentNumber((firstNumber * 79.937).toString());
      }
      //cuartos de galon
      else if (
        selectedValue == "Cuartos de galon(EE.UU)" &&
        selectedValue2 == "Mililitros"
      ) {
        setCurrentNumber((firstNumber * 946).toString());
      } else if (
        selectedValue == "Cuartos de galon(EE.UU)" &&
        selectedValue2 == "Centimetros cubicos"
      ) {
        setCurrentNumber((firstNumber * 946).toString());
      } else if (
        selectedValue == "Cuartos de galon(EE.UU)" &&
        selectedValue2 == "Cucharaditas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 192).toString());
      } else if (
        selectedValue == "Cuartos de galon(EE.UU)" &&
        selectedValue2 == "Cucharadas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 64).toString());
      } else if (
        selectedValue == "Cuartos de galon(EE.UU)" &&
        selectedValue2 == "Onzas liquidas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 32).toString());
      } else if (
        selectedValue == "Cuartos de galon(EE.UU)" &&
        selectedValue2 == "Tazas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 3.943).toString());
      } else if (
        selectedValue == "Cuartos de galon(EE.UU)" &&
        selectedValue2 == "Pintas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 2).toString());
      } else if (
        selectedValue == "Cuartos de galon(EE.UU)" &&
        selectedValue2 == "Galones(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 4).toString());
      } else if (
        selectedValue == "Cuartos de galon(EE.UU)" &&
        selectedValue2 == "Pulgadas cubicas"
      ) {
        setCurrentNumber((firstNumber * 57.75).toString());
      } else if (
        selectedValue == "Cuartos de galon(EE.UU)" &&
        selectedValue2 == "Pies cubicos"
      ) {
        setCurrentNumber((firstNumber / 29.922).toString());
      } else if (
        selectedValue == "Cuartos de galon(EE.UU)" &&
        selectedValue2 == "Yardas cubicas"
      ) {
        setCurrentNumber((firstNumber / 808).toString());
      } else if (
        selectedValue == "Cuartos de galon(EE.UU)" &&
        selectedValue2 == "Cucharaditas(UK)"
      ) {
        setCurrentNumber((firstNumber * 160).toString());
      }
      //galones
      else if (
        selectedValue == "Galones(EE.UU)" &&
        selectedValue2 == "Mililitros"
      ) {
        setCurrentNumber((firstNumber * 3785).toString());
      } else if (
        selectedValue == "Galones(EE.UU)" &&
        selectedValue2 == "Centimetros cubicos"
      ) {
        setCurrentNumber((firstNumber * 3785).toString());
      } else if (
        selectedValue == "Galones(EE.UU)" &&
        selectedValue2 == "Cucharaditas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 768).toString());
      } else if (
        selectedValue == "Galones(EE.UU)" &&
        selectedValue2 == "Cucharadas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 256).toString());
      } else if (
        selectedValue == "Galones(EE.UU)" &&
        selectedValue2 == "Onzas liquidas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 128).toString());
      } else if (
        selectedValue == "Galones(EE.UU)" &&
        selectedValue2 == "Tazas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 15.773).toString());
      } else if (
        selectedValue == "Galones(EE.UU)" &&
        selectedValue2 == "Pintas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 8).toString());
      } else if (
        selectedValue == "Galones(EE.UU)" &&
        selectedValue2 == "Cuartos de galon(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 4).toString());
      } else if (
        selectedValue == "Galones(EE.UU)" &&
        selectedValue2 == "Pulgadas cubicas"
      ) {
        setCurrentNumber((firstNumber * 231).toString());
      } else if (
        selectedValue == "Galones(EE.UU)" &&
        selectedValue2 == "Pies cubicos"
      ) {
        setCurrentNumber((firstNumber / 7.481).toString());
      } else if (
        selectedValue == "Galones(EE.UU)" &&
        selectedValue2 == "Yardas cubicas"
      ) {
        setCurrentNumber((firstNumber / 202).toString());
      } else if (
        selectedValue == "Galones(EE.UU)" &&
        selectedValue2 == "Cucharaditas(UK)"
      ) {
        setCurrentNumber((firstNumber * 639).toString());
      }
      //pulgadas cubicas
      else if (
        selectedValue == "Pulgadas cubicas" &&
        selectedValue2 == "Mililitros"
      ) {
        setCurrentNumber((firstNumber * 16.387).toString());
      } else if (
        selectedValue == "Pulgadas cubicas" &&
        selectedValue2 == "Centimetros cubicos"
      ) {
        setCurrentNumber((firstNumber * 16.387).toString());
      } else if (
        selectedValue == "Pulgadas cubicas" &&
        selectedValue2 == "Cucharaditas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 3.325).toString());
      } else if (
        selectedValue == "Pulgadas cubicas" &&
        selectedValue2 == "Cucharadas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 1.108).toString());
      } else if (
        selectedValue == "Pulgadas cubicas" &&
        selectedValue2 == "Onzas liquidas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 1.805).toString());
      } else if (
        selectedValue == "Pulgadas cubicas" &&
        selectedValue2 == "Tazas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 14.646).toString());
      } else if (
        selectedValue == "Pulgadas cubicas" &&
        selectedValue2 == "Pintas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 28.875).toString());
      } else if (
        selectedValue == "Pulgadas cubicas" &&
        selectedValue2 == "Cuartos de galon(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 57.75).toString());
      } else if (
        selectedValue == "Pulgadas cubicas" &&
        selectedValue2 == "Galones(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 231).toString());
      } else if (
        selectedValue == "Pulgadas cubicas" &&
        selectedValue2 == "Pies cubicos"
      ) {
        setCurrentNumber((firstNumber * 2.768).toString());
      } else if (
        selectedValue == "Pulgadas cubicas" &&
        selectedValue2 == "Yardas cubicas"
      ) {
        setCurrentNumber((firstNumber / 46656).toString());
      } else if (
        selectedValue == "Pulgadas cubicas" &&
        selectedValue2 == "Cucharaditas(UK)"
      ) {
        setCurrentNumber((firstNumber * 2.768).toString());
      }
      //pies cubicos
      else if (
        selectedValue == "Pies cubicos" &&
        selectedValue2 == "Mililitros"
      ) {
        setCurrentNumber((firstNumber * 28317).toString());
      } else if (
        selectedValue == "Pies cubicos" &&
        selectedValue2 == "Centimetros cubicos"
      ) {
        setCurrentNumber((firstNumber * 28317).toString());
      } else if (
        selectedValue == "Pies cubicos" &&
        selectedValue2 == "Cucharaditas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 5745).toString());
      } else if (
        selectedValue == "Pies cubicos" &&
        selectedValue2 == "Cucharadas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 1915).toString());
      } else if (
        selectedValue == "Pies cubicos" &&
        selectedValue2 == "Onzas liquidas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 958).toString());
      } else if (
        selectedValue == "Pies cubicos" &&
        selectedValue2 == "Tazas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 118).toString());
      } else if (
        selectedValue == "Pies cubicos" &&
        selectedValue2 == "Pintas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 59.844).toString());
      } else if (
        selectedValue == "Pies cubicos" &&
        selectedValue2 == "Cuartos de galon(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 29.922).toString());
      } else if (
        selectedValue == "Pies cubicos" &&
        selectedValue2 == "Galones(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 7.481).toString());
      } else if (
        selectedValue == "Pies cubicos" &&
        selectedValue2 == "Pulgadas cubicas"
      ) {
        setCurrentNumber((firstNumber * 1728).toString());
      } else if (
        selectedValue == "Pies cubicos" &&
        selectedValue2 == "Yardas cubicas"
      ) {
        setCurrentNumber((firstNumber / 27).toString());
      } else if (
        selectedValue == "Pies cubicos" &&
        selectedValue2 == "Cucharaditas(UK)"
      ) {
        setCurrentNumber((firstNumber * 4784).toString());
      }
      //YARDAS CUBICAS
      else if (
        selectedValue == "Yardas cubicas" &&
        selectedValue2 == "Mililitros"
      ) {
        setCurrentNumber((firstNumber * 764555).toString());
      } else if (
        selectedValue == "Yardas cubicas" &&
        selectedValue2 == "Centimetros cubicos"
      ) {
        setCurrentNumber((firstNumber * 764555).toString());
      } else if (
        selectedValue == "Yardas cubicas" &&
        selectedValue2 == "Cucharaditas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 155116).toString());
      } else if (
        selectedValue == "Yardas cubicas" &&
        selectedValue2 == "Cucharadas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 51705).toString());
      } else if (
        selectedValue == "Yardas cubicas" &&
        selectedValue2 == "Onzas liquidas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 25853).toString());
      } else if (
        selectedValue == "Yardas cubicas" &&
        selectedValue2 == "Tazas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 3186).toString());
      } else if (
        selectedValue == "Yardas cubicas" &&
        selectedValue2 == "Pintas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 1616).toString());
      } else if (
        selectedValue == "Yardas cubicas" &&
        selectedValue2 == "Cuartos de galon(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 808).toString());
      } else if (
        selectedValue == "Yardas cubicas" &&
        selectedValue2 == "Galones(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 202).toString());
      } else if (
        selectedValue == "Yardas cubicas" &&
        selectedValue2 == "Pulgadas cubicas"
      ) {
        setCurrentNumber((firstNumber * 46656).toString());
      } else if (
        selectedValue == "Yardas cubicas" &&
        selectedValue2 == "Pies cubicos"
      ) {
        setCurrentNumber((firstNumber * 27).toString());
      } else if (
        selectedValue == "Yardas cubicas" &&
        selectedValue2 == "Cucharaditas(UK)"
      ) {
        setCurrentNumber((firstNumber * 129161).toString());
      }
      //cucharaditas(uk)
      else if (
        selectedValue == "Cucharaditas(UK)" &&
        selectedValue2 == "Mililitros"
      ) {
        setCurrentNumber((firstNumber * 5.919).toString());
      } else if (
        selectedValue == "Cucharaditas(UK)" &&
        selectedValue2 == "Centimetros cubicos"
      ) {
        setCurrentNumber((firstNumber * 5.919).toString());
      } else if (
        selectedValue == "Cucharaditas(UK)" &&
        selectedValue2 == "Cucharaditas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber * 1.201).toString());
      } else if (
        selectedValue == "Cucharaditas(UK)" &&
        selectedValue2 == "Cucharadas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 2.498).toString());
      } else if (
        selectedValue == "Cucharaditas(UK)" &&
        selectedValue2 == "Onzas liquidas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 4.996).toString());
      } else if (
        selectedValue == "Cucharaditas(UK)" &&
        selectedValue2 == "Tazas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 40.545).toString());
      } else if (
        selectedValue == "Cucharaditas(UK)" &&
        selectedValue2 == "Pintas(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 79.937).toString());
      } else if (
        selectedValue == "Cucharaditas(UK)" &&
        selectedValue2 == "Cuartos de galon(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 160).toString());
      } else if (
        selectedValue == "Cucharaditas(UK)" &&
        selectedValue2 == "Galones(EE.UU)"
      ) {
        setCurrentNumber((firstNumber / 639).toString());
      } else if (
        selectedValue == "Cucharaditas(UK)" &&
        selectedValue2 == "Pulgadas cubicas"
      ) {
        setCurrentNumber((firstNumber / 2.768).toString());
      } else if (
        selectedValue == "Cucharaditas(UK)" &&
        selectedValue2 == "Pies cubicos"
      ) {
        setCurrentNumber((firstNumber / 4784).toString());
      } else if (
        selectedValue == "Cucharaditas(UK)" &&
        selectedValue2 == "Yardas cubicas"
      ) {
        setCurrentNumber((firstNumber / 129161).toString());
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
            label="Mililitros"
            value="Mililitros"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Centimetros cubicos"
            value="Centimetros cubicos"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Cucharaditas(EE.UU)"
            value="Cucharaditas(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Cucharadas(EE.UU)"
            value="Cucharadas(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Onzas liquidas(EE.UU)"
            value="Onzas liquidas(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Tazas(EE.UU)"
            value="Tazas(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Pintas(EE.UU)"
            value="Pintas(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Cuartos de galon(EE.UU)"
            value="Cuartos de galon(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Galones(EE.UU)"
            value="Galones(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Pulgadas cubicas"
            value="Pulgadas cubicas"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Pies cubicos"
            value="Pies cubicos"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Yardas cubicas"
            value="Yardas cubicas"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Cucharaditas(UK)"
            value="Cucharaditas(UK)"
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
            label="Mililitros"
            value="Mililitros"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Centimetros cubicos"
            value="Centimetros cubicos"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Cucharaditas(EE.UU)"
            value="Cucharaditas(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Cucharadas(EE.UU)"
            value="Cucharadas(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Onzas liquidas(EE.UU)"
            value="Onzas liquidas(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Tazas(EE.UU)"
            value="Tazas(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Pintas(EE.UU)"
            value="Pintas(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Cuartos de galon(EE.UU)"
            value="Cuartos de galon(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Galones(EE.UU)"
            value="Galones(EE.UU)"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Pulgadas cubicas"
            value="Pulgadas cubicas"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Pies cubicos"
            value="Pies cubicos"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Yardas cubicas"
            value="Yardas cubicas"
            color={darkMode ? "#b5b7bb" : "#7c7c7c"}
          />
          <Picker.Item
            label="Cucharaditas(UK)"
            value="Cucharaditas(UK)"
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

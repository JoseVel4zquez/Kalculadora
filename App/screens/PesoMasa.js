import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Picker } from 'react-native'
import { useTheme } from '@react-navigation/native'

const PesoMasa = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Seleccionar");
    const [selectedValue2, setSelectedValue2] = useState("Seleccionar");
    const theme = useTheme();

    useEffect(() => {
        if(theme.dark){
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, [theme]);

    const buttons = ["AC", "DEL", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "="];
    const [currentNumber, setCurrentNumber] = useState("");
    const [lastNumber, setLastNumber] = useState("");

    function handleInput(buttonPressed){
        console.log(buttonPressed)

        function calculator() {
            const splitNumber = currentNumber.split(" ");
            const firstNumber = parseFloat(splitNumber[0]);

            console.log(selectedValue2);
            if(
                selectedValue == "Seleccionar" && 
                (selectedValue2 == "Seleccionar") | 
                (setSelectedValue == "Seleccionar") |
                (selectedValue2 == "Seleccionar")
            ){
                setCurrentNumber("Seleccionar una opcion");
            } else if(
                selectedValue == "Quilates" && 
                (selectedValue2 == "Quilates") | 
                (selectedValue == "Miligramos") &&
                (selectedValue2 == "Miligramos") |
                (selectedValue == "Centigramos") &&
                (selectedValue2 == "Centigramos") |
                (selectedValue == "Decigramos") &&
                (selectedValue2 == "Decigramos") |
                (selectedValue == "Gramos") && (selectedValue2 == "Gramos") |
                (selectedValue == "Decagramos") && (selectedValue2 == "Decagramos") |
                (selectedValue == "Hectogramos") && (selectedValue2 == "Hectogramos") |
                (selectedValue == "Kilogramos") && (selectedValue2 == "Kilogramos") |
                (selectedValue == "Toneladas metricas") && (selectedValue2 == "Toneladas metricas") |
                (selectedValue == "Onzas") && (selectedValue2 == "Onzas") |
                (selectedValue == "Libras") && (selectedValue2 == "Libras") |
                (selectedValue == "Stone") && (selectedValue2 == "Stone") |
                (selectedValue == "Toneladas cortas") && (selectedValue2 == "Toneladas cortas") |
                (selectedValue == "Toneladas largas") && (selectedValue2 == "Toneladas largas")
            ){
                setCurrentNumber(firstNumber.toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber * 200).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber / 200).toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber * 20).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber / 20).toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber * 2).toString());
            } else if(selectedValue == "Decigramos" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber / 2).toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber / 5).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber * 5).toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber * 2).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber / 2).toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber / 500).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber * 500).toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber / 5000).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber * 5000).toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber / 5e+6).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber * 5e+6).toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber / 142).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber * 142).toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber / 2268).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber * 2268).toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber / 31751).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber * 31751).toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber / 4.536e+6).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber * 4.536e+6).toString());
            } else if(selectedValue == "Quilates" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 5.08e+6).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Quilates"){
                setCurrentNumber((firstNumber * 5.08e+6).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber / 10).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber *  10).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber / 100).toString());
            } else if(selectedValue == "Decigramos" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber * 100).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber / 10000).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber * 10000).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber / 100000).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber * 100000).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber / 1e+6).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber * 1e+6).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber / 1e+9).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber * 1e+9).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber / 28350).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber * 28350).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber / 453592).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber * 453592).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber / 6.35e+6).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber * 6.35e+6).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber / 9.072e+8).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber * 9.072e+8).toString());
            } else if(selectedValue == "Miligramos" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 1.016e+9).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Miligramos"){
                setCurrentNumber((firstNumber * 1.016e+9).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber / 10).toString());
            } else if(selectedValue == "Decigramos" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber * 10).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber / 100).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber * 100).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber / 10000).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber * 10000).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber / 100000).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber * 100000).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber / 1e+8).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber * 1e+8).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber / 2835).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber * 2835).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber / 45359).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber * 45359).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber / 635029).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber * 635029).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber / 9.072e+7).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber * 9.072e+7).toString());
            } else if(selectedValue == "Centigramos" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 1.016e+8).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Centigramos"){
                setCurrentNumber((firstNumber * 1.016e+8).toString());
            } else if(selectedValue == "Decigramos" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber / 10).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber * 10).toString());
            } else if(selectedValue == "Decigramos" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber / 100).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber * 100).toString());
            } else if(selectedValue == "Decigramos" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Decigramos" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber / 10000).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber * 10000).toString());
            } else if(selectedValue == "Decigramos" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber / 1e+7).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber * 1e+7).toString());
            } else if(selectedValue == "Decigramos" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber / 283).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber * 283).toString());
            } else if(selectedValue == "Decigramos" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber / 4536).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber * 4536).toString());
            } else if(selectedValue == "Decigramos" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber / 63503).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber * 63503).toString());
            } else if(selectedValue == "Decigramos" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber / 9.072e+6).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber * 9.072e+6).toString());
            }else if(selectedValue == "Decigramos" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 1.016e+7).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Decigramos"){
                setCurrentNumber((firstNumber * 1.016e+7).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber / 10).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber * 10).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber / 100).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber * 100).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber / 1e+6).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber * 1e+6).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber / 28.35).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber * 28.35).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber / 454).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber * 454).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber / 6350).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber * 6350).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber / 907185).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber * 907185).toString());
            } else if(selectedValue == "Gramos" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 1.016e+6).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Gramos"){
                setCurrentNumber((firstNumber * 1.016e+6).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber / 10).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber * 10).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber / 100).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber * 100).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber / 100000).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber * 100000).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber / 2.835).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber * 2.835).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber / 45.359).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber * 45.359).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber / 635).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber * 635).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber / 90718).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber * 90718).toString());
            } else if(selectedValue == "Decagramos" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 101605).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Decagramos"){
                setCurrentNumber((firstNumber * 101605).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber / 10).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber * 10).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber / 10000).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber * 10000).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber * 3.527).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber / 3.527).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber / 4.536).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber * 4.536).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber / 63.503).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber * 63.503).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber / 9072).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber * 9072).toString());
            } else if(selectedValue == "Hectogramos" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 10160).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Hectogramos"){
                setCurrentNumber((firstNumber * 10160).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber / 100).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber * 100).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber * 35.274).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber / 35.274).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber * 2.205).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber / 2.205).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber / 6.35).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber * 6.35).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber / 907).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber * 907).toString());
            } else if(selectedValue == "Kilogramos" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 1016).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Kilogramos"){
                setCurrentNumber((firstNumber * 1016).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber * 35274).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber / 35274).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber * 2205).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber / 2205).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber * 157).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber / 157).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber * 1.102).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber / 1.102).toString());
            } else if(selectedValue == "Toneladas metricas" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 1.016).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Toneladas metricas"){
                setCurrentNumber((firstNumber * 1.016).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber / 16).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber * 16).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber / 224).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber * 224).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber / 32000).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber * 32000).toString());
            } else if(selectedValue == "Onzas" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 35840).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Onzas"){
                setCurrentNumber((firstNumber * 35840).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber / 14).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber * 14).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber / 2000).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber * 2000).toString());
            } else if(selectedValue == "Libras" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 2240).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Libras"){
                setCurrentNumber((firstNumber * 2240).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber / 143).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber * 143).toString());
            } else if(selectedValue == "Stone" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 160).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Stone"){
                setCurrentNumber((firstNumber * 160).toString());
            } else if(selectedValue == "Toneladas cortas" && selectedValue2 == "Toneladas largas"){
                setCurrentNumber((firstNumber / 1.12).toString());
            } else if(selectedValue == "Toneladas largas" && selectedValue2 == "Toneladas cortas"){
                setCurrentNumber((firstNumber * 1.12).toString());
            } 
        }
        switch (buttonPressed){
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
                        label="Quilates"
                        value="Quilates"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"}
                    />
                    <Picker.Item 
                        label="Miligramos"
                        value="Miligramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Centigramos"
                        value="Centigramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Decigramos"
                        value="Decigramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Gramos"
                        value="Gramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Decagramos"
                        value="Decagramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Hectogramos"
                        value="Hectogramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Kilogramos"
                        value="Kilogramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Toneladas metricas"
                        value="Toneladas metricas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Onzas"
                        value="Onzas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Libras"
                        value="Libras"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Stone"
                        value="Stone"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Toneladas cortas (EE. UU.)"
                        value="Toneladas cortas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Toneladas largas (R. U.)"
                        value="Toneladas largas"
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
                        label="Quilates"
                        value="Quilates"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"}
                    />
                    <Picker.Item 
                        label="Miligramos"
                        value="Miligramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Centigramos"
                        value="Centigramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Decigramos"
                        value="Decigramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Gramos"
                        value="Gramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Decagramos"
                        value="Decagramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Hectogramos"
                        value="Hectogramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Kilogramos"
                        value="Kilogramos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Toneladas metricas"
                        value="Toneladas metricas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Onzas"
                        value="Onzas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Libras"
                        value="Libras"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Stone"
                        value="Stone"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Toneladas cortas (EE. UU.)"
                        value="Toneladas cortas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Toneladas largas (R. U.)"
                        value="Toneladas largas"
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
                            <Text style={[styles.textButton, { color: "white", fontSize: 30, }]}>
                                {button}
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            key={button}
                            style={[styles.button, {
                                backgroundColor: 
                                typeof button === "number" 
                                ? darkMode === true 
                                    ? "#303946" 
                                    : "#fff"
                                : darkMode === true
                                ? "#414853"
                                : "#ededed"
                            }, ]}
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

export default PesoMasa

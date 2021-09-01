import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Picker } from 'react-native'
import { useTheme } from '@react-navigation/native'

const Longitud = () => {
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
                selectedValue == "Nanometros" && 
                (selectedValue2 == "Nanometros") | 
                (selectedValue == "Micrones") &&
                (selectedValue2 == "Micrones") |
                (selectedValue == "Milimetros") &&
                (selectedValue2 == "Milimetros") |
                (selectedValue == "Centimetros") &&
                (selectedValue2 == "Centimetros") |
                (selectedValue == "Metros") && (selectedValue2 == "Metros") |
                (selectedValue == "Kilometros") && (selectedValue2 == "Kilometros") |
                (selectedValue == "Pulgadas") && (selectedValue2 == "Pulgadas") |
                (selectedValue == "Pies") && (selectedValue2 == "Pies") |
                (selectedValue == "Yardas") && (selectedValue2 == "Yardas") |
                (selectedValue == "Millas") && (selectedValue2 == "Millas") |
                (selectedValue == "Millas nauticas") && (selectedValue2 == "Millas nauticas")
            ){
                setCurrentNumber(firstNumber.toString());
            } else if(selectedValue == "Nanometros" && selectedValue2 == "Micrones"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Micrones" && selectedValue2 == "Nanometros"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Nanometros" && selectedValue2 == "Milimetros"){
                setCurrentNumber((firstNumber / 1e+6).toString());
            } else if(selectedValue == "Milimetros" && selectedValue2 == "Nanometros"){
                setCurrentNumber((firstNumber * 1e+6).toString());
            } else if(selectedValue == "Nanometros" && selectedValue2 == "Centimetros"){
                setCurrentNumber((firstNumber / 1e+7).toString());
            } else if(selectedValue == "Centimetros" && selectedValue2 == "Nanometros"){
                setCurrentNumber((firstNumber * 1e+7).toString());
            } else if(selectedValue == "Nanometros" && selectedValue2 == "Metros"){
                setCurrentNumber((firstNumber / 1e+9).toString());
            } else if(selectedValue == "Metros" && selectedValue2 == "Nanometros"){
                setCurrentNumber((firstNumber * 1e+9).toString());
            } else if(selectedValue == "Nanometros" && selectedValue2 == "Kilometros"){
                setCurrentNumber((firstNumber / 1e+12).toString());
            } else if(selectedValue == "Kilometros" && selectedValue2 == "Nanometros"){
                setCurrentNumber((firstNumber * 1e+12).toString());
            } else if(selectedValue == "Nanometros" && selectedValue2 == "Pulgadas"){
                setCurrentNumber((firstNumber / 2.54e+7).toString());
            } else if(selectedValue == "Pulgadas" && selectedValue2 == "Nanometros"){
                setCurrentNumber((firstNumber * 2.54e+7).toString());
            } else if(selectedValue == "Nanometros" && selectedValue2 == "Pies"){
                setCurrentNumber((firstNumber / 3.048e+8).toString());
            } else if(selectedValue == "Pies" && selectedValue2 == "Nanometros"){
                setCurrentNumber((firstNumber * 3.048e+8).toString());
            } else if(selectedValue == "Nanometros" && selectedValue2 == "Yardas"){
                setCurrentNumber((firstNumber / 9.144e+8).toString());
            } else if(selectedValue == "Yardas" && selectedValue2 == "Nanometros"){
                setCurrentNumber((firstNumber * 9.144e+8).toString());
            } else if(selectedValue == "Nanometros" && selectedValue2 == "Millas"){
                setCurrentNumber((firstNumber / 1.609e+12).toString());
            } else if(selectedValue == "Millas" && selectedValue2 == "Nanometros"){
                setCurrentNumber((firstNumber * 1.609e+12).toString());
            } else if(selectedValue == "Nanometros" && selectedValue2 == "Millas nauticas"){
                setCurrentNumber((firstNumber / 1.852e+12).toString());
            } else if(selectedValue == "Millas nauticas" && selectedValue2 == "Nanometros"){
                setCurrentNumber((firstNumber * 1.852e+12).toString());
            } else if(selectedValue == "Micrones" && selectedValue2 == "Milimetros"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Milimetros" && selectedValue2 == "Micrones"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Micrones" && selectedValue2 == "Centimetros"){
                setCurrentNumber((firstNumber / 10000).toString());
            } else if(selectedValue == "Centimetros" && selectedValue2 == "Micrones"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Micrones" && selectedValue2 == "Metros"){
                setCurrentNumber((firstNumber / 1e+6).toString());
            } else if(selectedValue == "Metros" && selectedValue2 == "Micrones"){
                setCurrentNumber((firstNumber * 1e+6).toString());
            } else if(selectedValue == "Micrones" && selectedValue2 == "Kilometros"){
                setCurrentNumber((firstNumber / 1e+9).toString());
            } else if(selectedValue == "Kilometros" && selectedValue2 == "Micrones"){
                setCurrentNumber((firstNumber *  1e+9).toString());
            } else if(selectedValue == "Micrones" && selectedValue2 == "Pulgadas"){
                setCurrentNumber((firstNumber / 25400).toString());
            } else if(selectedValue == "Pulgadas" && selectedValue2 == "Micrones"){
                setCurrentNumber((firstNumber * 25400).toString());
            } else if(selectedValue == "Micrones" && selectedValue2 == "Pies"){
                setCurrentNumber((firstNumber / 304800).toString());
            } else if(selectedValue == "Pies" && selectedValue2 == "Micrones"){
                setCurrentNumber((firstNumber * 304800).toString());
            } else if(selectedValue == "Micrones" && selectedValue2 == "Yardas"){
                setCurrentNumber((firstNumber / 914400).toString());
            } else if(selectedValue == "Yardas" && selectedValue2 == "Micrones"){
                setCurrentNumber((firstNumber * 914400).toString());
            } else if(selectedValue == "Micrones" && selectedValue2 == "Millas"){
                setCurrentNumber((firstNumber / 1.609e+9).toString());
            } else if(selectedValue == "Millas" && selectedValue2 == "Micrones"){
                setCurrentNumber((firstNumber * 1.609e+9).toString());
            } else if(selectedValue == "Micrones" && selectedValue2 == "Millas nauticas"){
                setCurrentNumber((firstNumber / 1.852e+9).toString());
            } else if(selectedValue == "Millas nauticas" && selectedValue2 == "Micrones"){
                setCurrentNumber((firstNumber * 1.852e+9).toString());
            } else if(selectedValue == "Milimetros" && selectedValue2 == "Centimetros"){
                setCurrentNumber((firstNumber / 10).toString());
            } else if(selectedValue == "Centimetros" && selectedValue2 == "Milimetros"){
                setCurrentNumber((firstNumber * 10).toString());
            } else if(selectedValue == "Milimetros" && selectedValue2 == "Metros"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Metros" && selectedValue2 == "Milimetros"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Milimetros" && selectedValue2 == "Kilometros"){
                setCurrentNumber((firstNumber / 1e+6).toString());
            } else if(selectedValue == "Kilometros" && selectedValue2 == "Milimetros"){
                setCurrentNumber((firstNumber * 1e+6).toString());
            } else if(selectedValue == "Milimetros" && selectedValue2 == "Pulgadas"){
                setCurrentNumber((firstNumber / 25.4).toString());
            } else if(selectedValue == "Pulgadas" && selectedValue2 == "Milimetros"){
                setCurrentNumber((firstNumber * 25.4).toString());
            } else if(selectedValue == "Milimetros" && selectedValue2 == "Pies"){
                setCurrentNumber((firstNumber / 305).toString());
            } else if(selectedValue == "Pies" && selectedValue2 == "Milimetros"){
                setCurrentNumber((firstNumber * 305).toString());
            } else if(selectedValue == "Milimetros" && selectedValue2 == "Yardas"){
                setCurrentNumber((firstNumber / 914).toString());
            } else if(selectedValue == "Yardas" && selectedValue2 == "Milimetros"){
                setCurrentNumber((firstNumber * 914).toString());
            } else if(selectedValue == "Milimetros" && selectedValue2 == "Millas"){
                setCurrentNumber((firstNumber / 1.609e+6).toString());
            } else if(selectedValue == "Millas" && selectedValue2 == "Milimetros"){
                setCurrentNumber((firstNumber * 1.609e+6).toString());
            } else if(selectedValue == "Milimetros" && selectedValue2 == "Millas nauticas"){
                setCurrentNumber((firstNumber / 1.852e+6).toString());
            } else if(selectedValue == "Millas nauticas" && selectedValue2 == "Milimetros"){
                setCurrentNumber((firstNumber * 1.852e+6).toString());
            } else if(selectedValue == "Centimetros" && selectedValue2 == "Metros"){
                setCurrentNumber((firstNumber / 100).toString());
            } else if(selectedValue == "Metros" && selectedValue2 == "Centimetros"){
                setCurrentNumber((firstNumber * 100).toString());
            } else if(selectedValue == "Centimetros" && selectedValue2 == "Kilometros"){
                setCurrentNumber((firstNumber / 100000).toString());
            } else if(selectedValue == "Kilometros" && selectedValue2 == "Centimetros"){
                setCurrentNumber((firstNumber * 100000).toString());
            } else if(selectedValue == "Centimetros" && selectedValue2 == "Pulgadas"){
                setCurrentNumber((firstNumber / 2.54).toString());
            } else if(selectedValue == "Pulgadas" && selectedValue2 == "Centimetros"){
                setCurrentNumber((firstNumber * 2.54).toString());
            } else if(selectedValue == "Centimetros" && selectedValue2 == "Pies"){
                setCurrentNumber((firstNumber / 30.48).toString());
            } else if(selectedValue == "Pies" && selectedValue2 == "Centimetros"){
                setCurrentNumber((firstNumber * 30.48).toString());
            } else if(selectedValue == "Centimetros" && selectedValue2 == "Yardas"){
                setCurrentNumber((firstNumber / 91.44).toString());
            } else if(selectedValue == "Yardas" && selectedValue2 == "Centimetros"){
                setCurrentNumber((firstNumber * 91.44).toString());
            } else if(selectedValue == "Centimetros" && selectedValue2 == "Millas"){
                setCurrentNumber((firstNumber / 160934).toString());
            } else if(selectedValue == "Millas" && selectedValue2 == "Centimetros"){
                setCurrentNumber((firstNumber * 160934).toString());
            } else if(selectedValue == "Centimetros" && selectedValue2 == "Millas nauticas"){
                setCurrentNumber((firstNumber / 185200).toString());
            } else if(selectedValue == "Millas nauticas" && selectedValue2 == "Centimetros"){
                setCurrentNumber((firstNumber * 185200).toString());
            } else if(selectedValue == "Metros" && selectedValue2 == "Kilometros"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Kilometros" && selectedValue2 == "Metros"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Metros" && selectedValue2 == "Pulgadas"){
                setCurrentNumber((firstNumber * 39.37).toString());
            } else if(selectedValue == "Pulgadas" && selectedValue2 == "Metros"){
                setCurrentNumber((firstNumber / 39.37).toString());
            } else if(selectedValue == "Metros" && selectedValue2 == "Pies"){
                setCurrentNumber((firstNumber * 3.281).toString());
            } else if(selectedValue == "Pies" && selectedValue2 == "Metros"){
                setCurrentNumber((firstNumber / 3.281).toString());
            } else if(selectedValue == "Metros" && selectedValue2 == "Yardas"){
                setCurrentNumber((firstNumber * 1.094).toString());
            } else if(selectedValue == "Yardas" && selectedValue2 == "Metros"){
                setCurrentNumber((firstNumber / 1.094).toString());
            } else if(selectedValue == "Metros" && selectedValue2 == "Millas"){
                setCurrentNumber((firstNumber / 1609).toString());
            } else if(selectedValue == "Millas" && selectedValue2 == "Metros"){
                setCurrentNumber((firstNumber * 1609).toString());
            } else if(selectedValue == "Metros" && selectedValue2 == "Millas nauticas"){
                setCurrentNumber((firstNumber / 1852).toString());
            } else if(selectedValue == "Millas nauticas" && selectedValue2 == "Metros"){
                setCurrentNumber((firstNumber * 1852).toString());
            } else if(selectedValue == "Kilometros" && selectedValue2 == "Pulgadas"){
                setCurrentNumber((firstNumber * 39370).toString());
            } else if(selectedValue == "Pulgadas" && selectedValue2 == "Kilometros"){
                setCurrentNumber((firstNumber / 39370).toString());
            } else if(selectedValue == "Kilometros" && selectedValue2 == "Pies"){
                setCurrentNumber((firstNumber * 3281).toString());
            } else if(selectedValue == "Pies" && selectedValue2 == "Kilometros"){
                setCurrentNumber((firstNumber / 3281).toString());
            } else if(selectedValue == "Kilometros" && selectedValue2 == "Yardas"){
                setCurrentNumber((firstNumber * 1094).toString());
            } else if(selectedValue == "Yardas" && selectedValue2 == "Kilometros"){
                setCurrentNumber((firstNumber / 1094).toString());
            } else if(selectedValue == "Kilometros" && selectedValue2 == "Millas"){
                setCurrentNumber((firstNumber / 1.609).toString());
            } else if(selectedValue == "Millas" && selectedValue2 == "Kilometros"){
                setCurrentNumber((firstNumber * 1.609).toString());
            } else if(selectedValue == "Kilometros" && selectedValue2 == "Millas nauticas"){
                setCurrentNumber((firstNumber * 1.852).toString());
            } else if(selectedValue == "Millas nauticas" && selectedValue2 == "Kilometros"){
                setCurrentNumber((firstNumber / 1.852).toString());
            }else if(selectedValue == "Pulgadas" && selectedValue2 == "Pies"){
                setCurrentNumber((firstNumber / 12).toString());
            } else if(selectedValue == "Pies" && selectedValue2 == "Pulgadas"){
                setCurrentNumber((firstNumber * 12).toString());
            } else if(selectedValue == "Pulgadas" && selectedValue2 == "Yardas"){
                setCurrentNumber((firstNumber / 36).toString());
            } else if(selectedValue == "Yardas" && selectedValue2 == "Pulgadas"){
                setCurrentNumber((firstNumber * 36).toString());
            } else if(selectedValue == "Pulgadas" && selectedValue2 == "Millas"){
                setCurrentNumber((firstNumber / 63360).toString());
            } else if(selectedValue == "Millas" && selectedValue2 == "Pulgadas"){
                setCurrentNumber((firstNumber * 63360).toString());
            } else if(selectedValue == "Pulgadas" && selectedValue2 == "Millas nauticas"){
                setCurrentNumber((firstNumber / 72913).toString());
            } else if(selectedValue == "Millas nauticas" && selectedValue2 == "Pulgadas"){
                setCurrentNumber((firstNumber * 72813).toString());
            } else if(selectedValue == "Pies" && selectedValue2 == "Yardas"){
                setCurrentNumber((firstNumber / 3).toString());
            } else if(selectedValue == "Yardas" && selectedValue2 == "Pies"){
                setCurrentNumber((firstNumber * 3).toString());
            } else if(selectedValue == "Pies" && selectedValue2 == "Millas"){
                setCurrentNumber((firstNumber / 5280).toString());
            } else if(selectedValue == "Millas" && selectedValue2 == "Pies"){
                setCurrentNumber((firstNumber * 5280).toString());
            } else if(selectedValue == "Pies" && selectedValue2 == "Millas nauticas"){
                setCurrentNumber((firstNumber / 6076).toString());
            } else if(selectedValue == "Millas nauticas" && selectedValue2 == "Pies"){
                setCurrentNumber((firstNumber * 6076).toString());
            } else if(selectedValue == "Yardas" && selectedValue2 == "Millas"){
                setCurrentNumber((firstNumber / 1760).toString());
            } else if(selectedValue == "Millas" && selectedValue2 == "Yardas"){
                setCurrentNumber((firstNumber * 1760).toString());
            } else if(selectedValue == "Yardas" && selectedValue2 == "Millas nauticas"){
                setCurrentNumber((firstNumber / 2025).toString());
            } else if(selectedValue == "Millas nauticas" && selectedValue2 == "Yardas"){
                setCurrentNumber((firstNumber * 2025).toString());
            } else if(selectedValue == "Millas" && selectedValue2 == "Millas nauticas"){
                setCurrentNumber((firstNumber / 1.51).toString());
            } else if(selectedValue == "Millas nauticas" && selectedValue2 == "Millas"){
                setCurrentNumber((firstNumber * 1.51).toString());
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
                        label="Nanometros"
                        value="Nanometros"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"}
                    />
                    <Picker.Item 
                        label="Micrones"
                        value="Micrones"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Milimetros"
                        value="Milimetros"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Centimetros"
                        value="Centimetros"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Metros"
                        value="Metros"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Kilometros"
                        value="Kilometros"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Pulgadas"
                        value="Pulgadas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Pies"
                        value="Pies"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Yardas"
                        value="Yardas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Millas"
                        value="Millas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Millas nauticas"
                        value="Millas nauticas"
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
                        label="Nanometros"
                        value="Nanometros"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"}
                    />
                    <Picker.Item 
                        label="Micrones"
                        value="Micrones"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Milimetros"
                        value="Milimetros"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Centimetros"
                        value="Centimetros"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Metros"
                        value="Metros"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Kilometros"
                        value="Kilometros"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Pulgadas"
                        value="Pulgadas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Pies"
                        value="Pies"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Yardas"
                        value="Yardas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Millas"
                        value="Millas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Millas nauticas"
                        value="Millas nauticas"
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

export default Longitud

import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Picker } from 'react-native'
import { useTheme } from '@react-navigation/native'

const Energia = () => {
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
                selectedValue == "Electronvoltios" && 
                (selectedValue2 == "Electronvoltios") | 
                (selectedValue == "Julio") &&
                (selectedValue2 == "Julio") |
                (selectedValue == "Kilojulios") &&
                (selectedValue2 == "Kilojulios") |
                (selectedValue == "Calorias gramo") &&
                (selectedValue2 == "Calorias gramo") |
                (selectedValue == "Kilocaloria") && (selectedValue2 == "Kilocaloria") |
                (selectedValue == "Vatio hora") && (selectedValue2 == "Vatio hora") |
                (selectedValue == "Kilovatio hora") && (selectedValue2 == "Kilovatio hora") |
                (selectedValue == "Libras pie") && (selectedValue2 == "Libras pie") |
                (selectedValue == "BTU") && (selectedValue2 == "BTU")
            ){
                setCurrentNumber(firstNumber.toString());
            } else if(selectedValue == "Electronvoltio" && selectedValue2 == "Julio"){
                setCurrentNumber((firstNumber / 6.242e+18).toString());
            } else if(selectedValue == "Julio" && selectedValue2 == "Electronvoltio"){
                setCurrentNumber((firstNumber * 6.242e+18).toString());
            } else if(selectedValue == "Electronvoltio" && selectedValue2 == "Kilojulios"){
                setCurrentNumber((firstNumber * 1.6022e-22).toString());
            } else if(selectedValue == "Kilojulios" && selectedValue2 == "Electronvoltio"){
                setCurrentNumber((firstNumber / 1.6022e-22).toString());
            } else if(selectedValue == "Electronvoltio" && selectedValue2 == "Calorias gramo"){
                setCurrentNumber((firstNumber * 3.8293e-20).toString());
            } else if(selectedValue == "Calorias gramo" && selectedValue2 == "Electronvoltio"){
                setCurrentNumber((firstNumber / 3.8293e-22).toString());
            } else if(selectedValue == "Electronvoltio" && selectedValue2 == "Kilocaloria"){
                setCurrentNumber((firstNumber * 3.8293e-23).toString());
            } else if(selectedValue == "Kilocaloria" && selectedValue2 == "Electronvoltio"){
                setCurrentNumber((firstNumber / 3.8293e-23).toString());
            } else if(selectedValue == "Electronvoltio" && selectedValue2 == "Vatio hora"){
                setCurrentNumber((firstNumber * 4.451e-23).toString());
            } else if(selectedValue == "Vatio hora" && selectedValue2 == "Electronvoltio"){
                setCurrentNumber((firstNumber / 4.451e-23).toString());
            } else if(selectedValue == "Electronvoltio" && selectedValue2 == "Kilovatio hora"){
                setCurrentNumber((firstNumber * 4.451e-26).toString());
            } else if(selectedValue == "Kilovatio hora" && selectedValue2 == "Electronvoltio"){
                setCurrentNumber((firstNumber / 4.451e-26).toString());
            } else if(selectedValue == "Electronvoltio" && selectedValue2 == "Libras pie"){
                setCurrentNumber((firstNumber / 8.462e+18).toString());
            } else if(selectedValue == "Libras pie" && selectedValue2 == "Electronvoltio"){
                setCurrentNumber((firstNumber * 8.462e+18).toString());
            } else if(selectedValue == "Electronvoltio" && selectedValue2 == "BTU"){
                setCurrentNumber((firstNumber * 1.518e-22).toString());
            } else if(selectedValue == "BTU" && selectedValue2 == "Electronvoltio"){
                setCurrentNumber((firstNumber / 1.518e-22).toString());
            } else if(selectedValue == "Julio" && selectedValue2 == "Kilojulios"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Kilojulios" && selectedValue2 == "Julio"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Julio" && selectedValue2 == "Kilocaloria"){
                setCurrentNumber((firstNumber / 4184).toString());
            } else if(selectedValue == "Kilocaloria" && selectedValue2 == "Julio"){
                setCurrentNumber((firstNumber * 4184).toString());
            } else if(selectedValue == "Julio" && selectedValue2 == "Calorias gramo"){
                setCurrentNumber((firstNumber / 4.184).toString());
            } else if(selectedValue == "Calorias gramo" && selectedValue2 == "Julio"){
                setCurrentNumber((firstNumber * 4.184).toString());
            } else if(selectedValue == "Julio" && selectedValue2 == "Vatio hora"){
                setCurrentNumber((firstNumber / 3600).toString());
            } else if(selectedValue == "Vatio hora" && selectedValue2 == "Julio"){
                setCurrentNumber((firstNumber * 3600).toString());
            } else if(selectedValue == "Julio" && selectedValue2 == "Kilovatio hora"){
                setCurrentNumber((firstNumber / 3.6e+6).toString());
            } else if(selectedValue == "Kilovatio hora" && selectedValue2 == "Julio"){
                setCurrentNumber((firstNumber * 3.6e+6).toString());
            } else if(selectedValue == "Julio" && selectedValue2 == "Libras pie"){
                setCurrentNumber((firstNumber / 1.356).toString());
            } else if(selectedValue == "Libras pie" && selectedValue2 == "Julio"){
                setCurrentNumber((firstNumber *  1.356).toString());
            } else if(selectedValue == "Julio" && selectedValue2 == "BTU"){
                setCurrentNumber((firstNumber / 1055).toString());
            } else if(selectedValue == "BTU" && selectedValue2 == "Julio"){
                setCurrentNumber((firstNumber * 1055).toString());
            } else if(selectedValue == "Kilojulios" && selectedValue2 == "Kilocaloria"){
                setCurrentNumber((firstNumber / 4.184).toString());
            } else if(selectedValue == "Kilocaloria" && selectedValue2 == "Kilojulios"){
                setCurrentNumber((firstNumber * 4.184).toString());
            } else if(selectedValue == "Kilojulios" && selectedValue2 == "Calorias gramo"){
                setCurrentNumber((firstNumber * 239).toString());
            } else if(selectedValue == "Calorias gramo" && selectedValue2 == "Kilojulios"){
                setCurrentNumber((firstNumber / 239).toString());
            } else if(selectedValue == "Kilojulios" && selectedValue2 == "Vatio hora"){
                setCurrentNumber((firstNumber / 3.6).toString());
            } else if(selectedValue == "Vatio hora" && selectedValue2 == "Kilojulios"){
                setCurrentNumber((firstNumber * 3.6).toString());
            } else if(selectedValue == "Kilojulios" && selectedValue2 == "Kilovatio hora"){
                setCurrentNumber((firstNumber / 3600).toString());
            } else if(selectedValue == "Kilovatio hora" && selectedValue2 == "Kilojulios"){
                setCurrentNumber((firstNumber * 3600).toString());
            } else if(selectedValue == "Kilojulios" && selectedValue2 == "Libras pie"){
                setCurrentNumber((firstNumber * 738).toString());
            } else if(selectedValue == "Libras pie" && selectedValue2 == "Kilojulios"){
                setCurrentNumber((firstNumber / 738).toString());
            } else if(selectedValue == "Kilojulios" && selectedValue2 == "BTU"){
                setCurrentNumber((firstNumber / 1.055).toString());
            } else if(selectedValue == "BTU" && selectedValue2 == "Kilojulios"){
                setCurrentNumber((firstNumber * 1.055).toString());
            } else if(selectedValue == "Kilocaloria" && selectedValue2 == "Calorias gramo"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Calorias gramo" && selectedValue2 == "Kilocaloria"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Kilocaloria" && selectedValue2 == "Vatio hora"){
                setCurrentNumber((firstNumber * 1.162).toString());
            } else if(selectedValue == "Vatio hora" && selectedValue2 == "Kilocaloria"){
                setCurrentNumber((firstNumber / 1.162).toString());
            } else if(selectedValue == "Kilocaloria" && selectedValue2 == "Kilovatio hora"){
                setCurrentNumber((firstNumber / 860).toString());
            } else if(selectedValue == "Kilovatio hora" && selectedValue2 == "Kilocaloria"){
                setCurrentNumber((firstNumber * 860).toString());
            } else if(selectedValue == "Kilocaloria" && selectedValue2 == "Libras pie"){
                setCurrentNumber((firstNumber * 3086).toString());
            } else if(selectedValue == "Libras pie" && selectedValue2 == "Kilocaloria"){
                setCurrentNumber((firstNumber / 3086).toString());
            } else if(selectedValue == "Kilocaloria" && selectedValue2 == "BTU"){
                setCurrentNumber((firstNumber * 3.966).toString());
            } else if(selectedValue == "BTU" && selectedValue2 == "Kilocaloria"){
                setCurrentNumber((firstNumber / 3.966).toString());
            } else if(selectedValue == "Calorias gramo" && selectedValue2 == "Vatio hora"){
                setCurrentNumber((firstNumber / 860).toString());
            } else if(selectedValue == "Vatio hora" && selectedValue2 == "Calorias gramo"){
                setCurrentNumber((firstNumber * 860).toString());
            } else if(selectedValue == "Calorias gramo" && selectedValue2 == "Kilovatio hora"){
                setCurrentNumber((firstNumber / 860421).toString());
            } else if(selectedValue == "Kilovatio hora" && selectedValue2 == "Calorias gramo"){
                setCurrentNumber((firstNumber * 860421).toString());
            } else if(selectedValue == "Calorias gramo" && selectedValue2 == "Libras pie"){
                setCurrentNumber((firstNumber * 3.086).toString());
            } else if(selectedValue == "Libras pie" && selectedValue2 == "Calorias gramo"){
                setCurrentNumber((firstNumber / 3.086).toString());
            } else if(selectedValue == "Calorias gramo" && selectedValue2 == "BTU"){
                setCurrentNumber((firstNumber / 252).toString());
            } else if(selectedValue == "BTU" && selectedValue2 == "Calorias gramo"){
                setCurrentNumber((firstNumber * 252).toString());
            } else if(selectedValue == "Vatio hora" && selectedValue2 == "Kilovatio hora"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Kilovatio hora" && selectedValue2 == "Vatio hora"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Vatio hora" && selectedValue2 == "Libras pie"){
                setCurrentNumber((firstNumber * 2655).toString());
            } else if(selectedValue == "Libras pie" && selectedValue2 == "Vatio hora"){
                setCurrentNumber((firstNumber / 2655).toString());
            } else if(selectedValue == "Vatio hora" && selectedValue2 == "BTU"){
                setCurrentNumber((firstNumber * 3.412).toString());
            } else if(selectedValue == "BTU" && selectedValue2 == "Vatio hora"){
                setCurrentNumber((firstNumber / 3.412).toString());
            } else if(selectedValue == "Kilovatio hora" && selectedValue2 == "Libras pie"){
                setCurrentNumber((firstNumber * 2.655e+6).toString());
            } else if(selectedValue == "Libras pie" && selectedValue2 == "Kilovatio hora"){
                setCurrentNumber((firstNumber / 2.655e+6).toString());
            } else if(selectedValue == "Kilovatio hora" && selectedValue2 == "BTU"){
                setCurrentNumber((firstNumber * 3412).toString());
            } else if(selectedValue == "BTU" && selectedValue2 == "Kilovatio hora"){
                setCurrentNumber((firstNumber / 3412).toString());
            } else if(selectedValue == "Libras pie" && selectedValue2 == "BTU"){
                setCurrentNumber((firstNumber / 778).toString());
            } else if(selectedValue == "BTU" && selectedValue2 == "Libras pie"){
                setCurrentNumber((firstNumber * 778).toString());
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
                        label="Electronvoltio"
                        value="Electronvoltio"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"}
                    />
                    <Picker.Item 
                        label="Julio"
                        value="Julio"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Kilojulios"
                        value="Kilojulios"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Kilocaloria"
                        value="Kilocaloria"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Calorias gramo"
                        value="Calorias gramo"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Vatio hora"
                        value="Vatio hora"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Kilovatio hora"
                        value="Kilovatio hora"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Libras pie"
                        value="Libras pie"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="BTU"
                        value="BTU"
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
                        label="Electronvoltio"
                        value="Electronvoltio"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"}
                    />
                    <Picker.Item 
                        label="Julio"
                        value="Julio"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Kilojulios"
                        value="Kilojulios"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Kilocaloria"
                        value="Kilocaloria"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Calorias gramo"
                        value="Calorias gramo"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Vatio hora"
                        value="Vatio hora"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Kilovatio hora"
                        value="Kilovatio hora"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Libras pie"
                        value="Libras pie"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="BTU"
                        value="BTU"
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

export default Energia

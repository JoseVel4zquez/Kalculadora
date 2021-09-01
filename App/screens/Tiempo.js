import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Picker } from 'react-native'
import { useTheme } from '@react-navigation/native'

const Tiempo = () => {
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
                selectedValue == "Microsegundos" && 
                (selectedValue2 == "Microsegundos") | 
                (selectedValue == "Milisegundos") &&
                (selectedValue2 == "Milisegundos") |
                (selectedValue == "Segundos") &&
                (selectedValue2 == "Segundos") |
                (selectedValue == "Minutos") &&
                (selectedValue2 == "Minutos") |
                (selectedValue == "Horas") && (selectedValue2 == "Horas") |
                (selectedValue == "Dias") && (selectedValue2 == "Dias") |
                (selectedValue == "Semanas") && (selectedValue2 == "Semanas") |
                (selectedValue == "Años") && (selectedValue2 == "Años") |
                (selectedValue == "Siglos") && (selectedValue2 == "Años") |
                (selectedValue == "Decadas") && (selectedValue2 == "Años")
            ){
                setCurrentNumber(firstNumber.toString());
            } else if(selectedValue == "Microsegundos" && selectedValue2 == "Milisegundos"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Milisegundos" && selectedValue2 == "Microsegundos"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Microsegundos" && selectedValue2 == "Segundos"){
                setCurrentNumber((firstNumber / 1e-6).toString());
            } else if(selectedValue == "Segundos" && selectedValue2 == "Microsegundos"){
                setCurrentNumber((firstNumber * 1e+6).toString());
            } else if(selectedValue == "Microsegundos" && selectedValue2 == "Minutos"){
                setCurrentNumber((firstNumber / 6e+7).toString());
            } else if(selectedValue == "Minutos" && selectedValue2 == "Microsegundos"){
                setCurrentNumber((firstNumber * 6e+7).toString());
            } else if(selectedValue == "Microsegundos" && selectedValue2 == "Horas"){
                setCurrentNumber((firstNumber / 3.6e+9).toString());
            } else if(selectedValue == "Horas" && selectedValue2 == "Microsegundos"){
                setCurrentNumber((firstNumber * 3.6e+9).toString());
            } else if(selectedValue == "Microsegundos" && selectedValue2 == "Dias"){
                setCurrentNumber((firstNumber / 8.64e+10).toString());
            } else if(selectedValue == "Dias" && selectedValue2 == "Microsegundos"){
                setCurrentNumber((firstNumber * 8.64e+10).toString());
            } else if(selectedValue == "Microsegundos" && selectedValue2 == "Semanas"){
                setCurrentNumber((firstNumber / 6.048e+11).toString());
            } else if(selectedValue == "Semanas" && selectedValue2 == "Microsegundos"){
                setCurrentNumber((firstNumber * 6.048e+11).toString());
            } else if(selectedValue == "Microsegundos" && selectedValue2 == "Años"){
                setCurrentNumber((firstNumber / 3.154e+13).toString());
            } else if(selectedValue == "Años" && selectedValue2 == "Microsegundos"){
                setCurrentNumber((firstNumber * 3.154e+13).toString());
            } else if(selectedValue == "Microsegundos" && selectedValue2 == "Siglos"){
                setCurrentNumber((firstNumber / 3.154e+15).toString());
            } else if(selectedValue == "Siglos" && selectedValue2 == "Microsegundos"){
                setCurrentNumber((firstNumber * 3.154e+15).toString());
            } else if(selectedValue == "Microsegundos" && selectedValue2 == "Decadas"){
                setCurrentNumber((firstNumber / 3.154e+14).toString());
            } else if(selectedValue == "Decadas" && selectedValue2 == "Microsegundos"){
                setCurrentNumber((firstNumber * 3.154e+14).toString());
            } else if(selectedValue == "Milisegundos" && selectedValue2 == "Segundos"){
                setCurrentNumber((firstNumber / 1000).toString());
            } else if(selectedValue == "Segundos" && selectedValue2 == "Milisegundos"){
                setCurrentNumber((firstNumber * 1000).toString());
            } else if(selectedValue == "Milisegundos" && selectedValue2 == "Minutos"){
                setCurrentNumber((firstNumber / 60000).toString());
            } else if(selectedValue == "Minutos" && selectedValue2 == "Milisegundos"){
                setCurrentNumber((firstNumber * 60000).toString());
            } else if(selectedValue == "Milisegundos" && selectedValue2 == "Horas"){
                setCurrentNumber((firstNumber / 3.6e+6).toString());
            } else if(selectedValue == "Horas" && selectedValue2 == "Milisegundos"){
                setCurrentNumber((firstNumber * 3.6e+6).toString());
            } else if(selectedValue == "Milisegundos" && selectedValue2 == "Dias"){
                setCurrentNumber((firstNumber / 8.64e+7).toString());
            } else if(selectedValue == "Dias" && selectedValue2 == "Milisegundos"){
                setCurrentNumber((firstNumber * 8.64e+7).toString());
            } else if(selectedValue == "Milisegundos" && selectedValue2 == "Semanas"){
                setCurrentNumber((firstNumber / 6.048e+8).toString());
            } else if(selectedValue == "Semanas" && selectedValue2 == "Milisegundos"){
                setCurrentNumber((firstNumber *  6.048e+8).toString());
            } else if(selectedValue == "Milisegundos" && selectedValue2 == "Años"){
                setCurrentNumber((firstNumber / 3.154e+10).toString());
            } else if(selectedValue == "Años" && selectedValue2 == "Milisegundos"){
                setCurrentNumber((firstNumber * 3.154e+10).toString());
            } else if(selectedValue == "Milisegundos" && selectedValue2 == "Siglos"){
                setCurrentNumber((firstNumber / 3.154e+12).toString());
            } else if(selectedValue == "Siglos" && selectedValue2 == "Milisegundos"){
                setCurrentNumber((firstNumber * 3.154e+12).toString());
            } else if(selectedValue == "Milisegundos" && selectedValue2 == "Decadas"){
                setCurrentNumber((firstNumber / 3.154e+11).toString());
            } else if(selectedValue == "Decadas" && selectedValue2 == "Milisegundos"){
                setCurrentNumber((firstNumber * 3.154e+11).toString());
            } else if(selectedValue == "Segundos" && selectedValue2 == "Minutos"){
                setCurrentNumber((firstNumber / 60).toString());
            } else if(selectedValue == "Minutos" && selectedValue2 == "Segundos"){
                setCurrentNumber((firstNumber * 60).toString());
            } else if(selectedValue == "Segundos" && selectedValue2 == "Horas"){
                setCurrentNumber((firstNumber / 3600).toString());
            } else if(selectedValue == "Horas" && selectedValue2 == "Segundos"){
                setCurrentNumber((firstNumber * 3600).toString());
            } else if(selectedValue == "Segundos" && selectedValue2 == "Dias"){
                setCurrentNumber((firstNumber / 86400).toString());
            } else if(selectedValue == "Dias" && selectedValue2 == "Segundos"){
                setCurrentNumber((firstNumber * 86400).toString());
            } else if(selectedValue == "Segundos" && selectedValue2 == "Semanas"){
                setCurrentNumber((firstNumber / 604800).toString());
            } else if(selectedValue == "Semanas" && selectedValue2 == "Segundos"){
                setCurrentNumber((firstNumber * 604800).toString());
            } else if(selectedValue == "Segundos" && selectedValue2 == "Años"){
                setCurrentNumber((firstNumber / 3.154e+7).toString());
            } else if(selectedValue == "Años" && selectedValue2 == "Segundos"){
                setCurrentNumber((firstNumber * 3.154e+7).toString());
            } else if(selectedValue == "Segundos" && selectedValue2 == "Siglos"){
                setCurrentNumber((firstNumber / 3.154e+9).toString());
            } else if(selectedValue == "Siglos" && selectedValue2 == "Segundos"){
                setCurrentNumber((firstNumber * 3.154e+9).toString());
            } else if(selectedValue == "Segundos" && selectedValue2 == "Decadas"){
                setCurrentNumber((firstNumber / 3.154e+8).toString());
            } else if(selectedValue == "Decadas" && selectedValue2 == "Segundos"){
                setCurrentNumber((firstNumber * 3.154e+8).toString());
            } else if(selectedValue == "Minutos" && selectedValue2 == "Horas"){
                setCurrentNumber((firstNumber / 60).toString());
            } else if(selectedValue == "Horas" && selectedValue2 == "Minutos"){
                setCurrentNumber((firstNumber * 60).toString());
            } else if(selectedValue == "Minutos" && selectedValue2 == "Dias"){
                setCurrentNumber((firstNumber / 1440).toString());
            } else if(selectedValue == "Dias" && selectedValue2 == "Minutos"){
                setCurrentNumber((firstNumber * 1440).toString());
            } else if(selectedValue == "Minutos" && selectedValue2 == "Semanas"){
                setCurrentNumber((firstNumber / 10080).toString());
            } else if(selectedValue == "Semanas" && selectedValue2 == "Minutos"){
                setCurrentNumber((firstNumber * 10080).toString());
            } else if(selectedValue == "Minutos" && selectedValue2 == "Años"){
                setCurrentNumber((firstNumber / 525600).toString());
            } else if(selectedValue == "Años" && selectedValue2 == "Minutos"){
                setCurrentNumber((firstNumber * 525600).toString());
            } else if(selectedValue == "Minutos" && selectedValue2 == "Siglos"){
                setCurrentNumber((firstNumber / 5.256e+7).toString());
            } else if(selectedValue == "Siglos" && selectedValue2 == "Minutos"){
                setCurrentNumber((firstNumber * 5.256e+7).toString());
            } else if(selectedValue == "Minutos" && selectedValue2 == "Decadas"){
                setCurrentNumber((firstNumber / 5.256e+7).toString());
            } else if(selectedValue == "Decadas" && selectedValue2 == "Minutos"){
                setCurrentNumber((firstNumber * 5.256e+7).toString());
            } else if(selectedValue == "Horas" && selectedValue2 == "Dias"){
                setCurrentNumber((firstNumber / 24).toString());
            } else if(selectedValue == "Dias" && selectedValue2 == "Horas"){
                setCurrentNumber((firstNumber * 24).toString());
            } else if(selectedValue == "Horas" && selectedValue2 == "Semanas"){
                setCurrentNumber((firstNumber / 168).toString());
            } else if(selectedValue == "Semanas" && selectedValue2 == "Horas"){
                setCurrentNumber((firstNumber * 168).toString());
            } else if(selectedValue == "Horas" && selectedValue2 == "Años"){
                setCurrentNumber((firstNumber / 8760).toString());
            } else if(selectedValue == "Años" && selectedValue2 == "Horas"){
                setCurrentNumber((firstNumber * 8760).toString());
            } else if(selectedValue == "Horas" && selectedValue2 == "Siglos"){
                setCurrentNumber((firstNumber / 876000).toString());
            } else if(selectedValue == "Siglos" && selectedValue2 == "Horas"){
                setCurrentNumber((firstNumber * 876000).toString());
            } else if(selectedValue == "Horas" && selectedValue2 == "Decadas"){
                setCurrentNumber((firstNumber / 87600).toString());
            } else if(selectedValue == "Decadas" && selectedValue2 == "Horas"){
                setCurrentNumber((firstNumber * 87600).toString());
            } else if(selectedValue == "Dias" && selectedValue2 == "Semanas"){
                setCurrentNumber((firstNumber / 7).toString());
            } else if(selectedValue == "Semanas" && selectedValue2 == "Dias"){
                setCurrentNumber((firstNumber * 7).toString());
            } else if(selectedValue == "Dias" && selectedValue2 == "Años"){
                setCurrentNumber((firstNumber / 365).toString());
            } else if(selectedValue == "Años" && selectedValue2 == "Dias"){
                setCurrentNumber((firstNumber * 365).toString());
            } else if(selectedValue == "Dias" && selectedValue2 == "Siglos"){
                setCurrentNumber((firstNumber / 36500).toString());
            } else if(selectedValue == "Siglos" && selectedValue2 == "Dias"){
                setCurrentNumber((firstNumber * 36500).toString());
            } else if(selectedValue == "Dias" && selectedValue2 == "Decadas"){
                setCurrentNumber((firstNumber / 3650).toString());
            } else if(selectedValue == "Decadas" && selectedValue2 == "Dias"){
                setCurrentNumber((firstNumber * 3650).toString());
            } else if(selectedValue == "Semanas" && selectedValue2 == "Años"){
                setCurrentNumber((firstNumber / 52.143).toString());
            } else if(selectedValue == "Años" && selectedValue2 == "Semanas"){
                setCurrentNumber((firstNumber * 52.143).toString());
            } else if(selectedValue == "Semanas" && selectedValue2 == "Siglos"){
                setCurrentNumber((firstNumber / 5214).toString());
            } else if(selectedValue == "Siglos" && selectedValue2 == "Semanas"){
                setCurrentNumber((firstNumber * 5214).toString());
            } else if(selectedValue == "Semanas" && selectedValue2 == "Decadas"){
                setCurrentNumber((firstNumber / 521).toString());
            } else if(selectedValue == "Decadas" && selectedValue2 == "Semanas"){
                setCurrentNumber((firstNumber * 521).toString());
            } else if(selectedValue == "Años" && selectedValue2 == "Siglos"){
                setCurrentNumber((firstNumber / 100).toString());
            } else if(selectedValue == "Siglos" && selectedValue2 == "Años"){
                setCurrentNumber((firstNumber * 100).toString());
            } else if(selectedValue == "Años" && selectedValue2 == "Decadas"){
                setCurrentNumber((firstNumber / 10).toString());
            } else if(selectedValue == "Decadas" && selectedValue2 == "Años"){
                setCurrentNumber((firstNumber * 10).toString());
            } else if(selectedValue == "Siglos" && selectedValue2 == "Decadas"){
                setCurrentNumber((firstNumber * 10).toString());
            } else if(selectedValue == "Decadas" && selectedValue2 == "Siglos"){
                setCurrentNumber((firstNumber / 10).toString());
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
                        label="Microsegundos"
                        value="Microsegundos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"}
                    />
                    <Picker.Item 
                        label="Milisegundos"
                        value="Milisegundos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Segundos"
                        value="Segundos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Minutos"
                        value="Minutos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Horas"
                        value="Horas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Dias"
                        value="Dias"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Semanas"
                        value="Semanas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Años"
                        value="Años"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Siglos"
                        value="Siglos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Decadas"
                        value="Decadas"
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
                        label="Microsegundos"
                        value="Microsegundos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"}
                    />
                    <Picker.Item 
                        label="Milisegundos"
                        value="Milisegundos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Segundos"
                        value="Segundos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Minutos"
                        value="Minutos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Horas"
                        value="Horas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Dias"
                        value="Dias"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Semanas"
                        value="Semanas"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Años"
                        value="Años"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Siglos"
                        value="Siglos"
                        color={darkMode ? "#b5b7bb" : "#7c7c7c"} 
                    />
                    <Picker.Item 
                        label="Decadas"
                        value="Decadas"
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

export default Tiempo

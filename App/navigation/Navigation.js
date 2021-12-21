import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { DrawerContent } from "./DrawerContent";
import { AuthContext } from "./context";
import HomeScreen from "../screens/HomeScreen";
import Cientifica from "../screens/Cientifica";
import Grafica from "../screens/Grafica";
import CalculoFecha from "../screens/CalculoFecha";
import Divisas from "../screens/Divisas";
import Volumen from "../screens/Volumen";
import Longitud from "../screens/Longitud";
import PesoMasa from "../screens/PesoMasa";
import Temperatura from "../screens/Temperatura";
import Energia from "../screens/Energia";
import Area from "../screens/Area";
import Velocidad from "../screens/Velocidad";
import Tiempo from "../screens/Tiempo";
import Potencia from "../screens/Potencia";
import Datos from "../screens/Datos";
import Presion from "../screens/Presion";
import Angulo from "../screens/Angulo";

export default function Navigation() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const authContext = React.useMemo(() => ({
    toggleTheme: () => {
      setIsDarkTheme((isDarkTheme) => !isDarkTheme);
    },
  }));

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#fff",
      text: "#333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333",
      text: "#fff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    // <PaperProvider theme={PaperProvider}>
    //   <NavigationContainer theme={DarkTheme}>
    //     <Drawer.Navigator initialRouteName="Home">
    //       <Drawer.Screen name="Basica" component={HomeScreen} />
    //       <Drawer.Screen name="Cientifica" component={Cientifica} />
    //     </Drawer.Navigator>
    //   </NavigationContainer>
    // </PaperProvider>

    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            {/* <Drawer.Screen name="Cientifica" component={Cientifica} /> */}
            {/* <Drawer.Screen name="Grafica" component={Grafica} /> */}
            {/* <Drawer.Screen name="Fechas" component={CalculoFecha} /> */}
            <Drawer.Screen name="Divisas" component={Divisas} />
            <Drawer.Screen name="Volumen" component={Volumen} />
            <Drawer.Screen name="Longitud" component={Longitud} />
            <Drawer.Screen name="Peso" component={PesoMasa} />
            <Drawer.Screen name="Temperatura" component={Temperatura} />
            <Drawer.Screen name="Energia" component={Energia} />
            <Drawer.Screen name="Area" component={Area} />
            <Drawer.Screen name="Velocidad" component={Velocidad} />
            <Drawer.Screen name="Tiempo" component={Tiempo} />
            <Drawer.Screen name="Potencia" component={Potencia} />
            <Drawer.Screen name="Datos" component={Datos} />
            <Drawer.Screen name="Presion" component={Presion} />
            <Drawer.Screen name="Angulo" component={Angulo} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

const Drawer = createDrawerNavigator();

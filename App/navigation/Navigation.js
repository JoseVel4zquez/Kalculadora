import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import pepe from "../../assets/pepe.jpg";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import Cientifica from "../screens/Cientifica";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Basica" component={HomeScreen} />
        <Drawer.Screen name="Cientifica" component={Cientifica} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";
import { StyleSheet, Text, View, Dimensions, AppRegistry, Platform } from "react-native";
import Navigation from "./App/navigation/Navigation";
LogBox.ignoreLogs(["Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function."]);
AppRegistry.registerComponent("X", () => App);

if (Platform.OS === "web") {
  const rootTag = document.getElementById("root") || document.getElementById("X");
  AppRegistry.runApplication("X", { rootTag });
}

export default function App() {
  return <Navigation />;
}

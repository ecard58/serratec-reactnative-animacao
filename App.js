import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const coresTamanho = {
    bg: "green",
    color: "white",
    tm: 50,
  };

  return (
    <ThemeProvider theme={coresTamanho}>
      <Home />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});

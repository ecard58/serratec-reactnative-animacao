import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Message from "./components/message";
import Animated, { BounceIn, FadeIn, FadeOut } from "react-native-reanimated";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <Animated.View
      style={styles.container}
      entering={FadeIn.duration(5000)}
      exiting={FadeOut.duration(5000)}
    >
      {/* <Animated.View style={styles.container} entering={BounceIn.delay(5000)}> */}
      {show && <Message />}
      <Button
        title={show ? "Fechar mensagem" : "Abrir mensagem"}
        onPress={() => setShow((prevState) => !prevState)}
      ></Button>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
});

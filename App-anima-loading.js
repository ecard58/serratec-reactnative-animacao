import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function App() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(150)).current;
  const opacidadeAnimada = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animated.sequence([
    //   Animated.timing(opacidadeAnimada, {
    //     toValue: 0.3,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),
    //   Animated.parallel([
    //     Animated.timing(larAnimada, {
    //       toValue: 300,
    //       duration: 3000,
    //       useNativeDriver: false,
    //     }),
    //     Animated.timing(altAnimada, {
    //       toValue: 300,
    //       duration: 3000,
    //       useNativeDriver: false,
    //     }),
    //   ]),
    // ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(larAnimada, {
          toValue: 150,
          duration: 1500,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: larAnimada,
          height: altAnimada,
          backgroundColor: "blue",
          justifyContent: "center",
          borderRadius: 50,
          opacity: opacidadeAnimada,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          LOADING....
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

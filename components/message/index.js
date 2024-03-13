import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function Message() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="notifications" color="red" size={40} />
      <Text style={styles.title}>Teste de mensagem</Text>
    </View>
  );
}

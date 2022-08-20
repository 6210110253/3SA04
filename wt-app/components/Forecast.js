import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Forecast(props) {
  return (
    <View>
      <Text style={styles.innerText2}>{props.main}</Text>
      <Text style={styles.innerText}>{props.description}</Text>
      <Text style={styles.innerText}>{props.temp} °C</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  innerText: {
    color: "white",
    textAlign: "center",
    fontSize: 23,
    paddingBottom: 15,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: "black",
  },
  innerText2: {
    color: "white",
    textAlign: "center",
    fontSize: 35,
    paddingBottom: 15,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: "black",
  },
});

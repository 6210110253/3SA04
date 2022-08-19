import React from "react";

export default function WeatherScreen({ route }) {
  return (
    <View>
      <Weather zipCode={route.params.zipCode} />
      <StatusBar style="auto" />
    </View>
  );
}

import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  async function loadFont() {
    await Font.loadAsync({
      DymaxionScript: require("./assets/fonts/DymaxionScript.ttf"),
    });

    setFontLoaded(false);
  }

  React.useEffect(() => {
    loadFont();
  }, []);

  return fontLoaded ? (
    <View style={styles.container}>
      <Text>Breath.</Text>
      <Text>Breath.</Text>
      <Text>Breath.</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
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

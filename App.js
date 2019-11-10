import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

import Welcome from "./components/Welcome";

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  async function loadFont() {
    await Font.loadAsync({
      DymaxionScript: require("./assets/fonts/DymaxionScript.ttf"),
    });

    setFontLoaded(true);
  }

  React.useEffect(() => {
    loadFont();
  }, []);

  return fontLoaded ? (
    <Welcome />
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

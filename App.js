import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(async () => {
    await Font.loadAsync({
      DymaxionScript: require("./assets/fonts/DymaxionScript.TTF"),
    });
    setFontLoaded(true);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Breath.</Text>
      <Text>Breath.</Text>
      <Text>Breath.</Text>
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

import React from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";

function Welcome(props) {
  return (
    <ImageBackground
      source={require("../assets/images/feelBetter.jpg")}
      style={styles.container}
    >
      <Text style={styles.title}>Feel Better</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },

  title: {
    position: "absolute",
    color: "black",
    fontSize: 100,
    textTransform: "uppercase",
    textShadowColor: "white",
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 3,
  },
});

export default Welcome;

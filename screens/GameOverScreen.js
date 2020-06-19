import React from "react";
import { View, Image, StyleSheet, Text, Button } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Images/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
        guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
      <Button title="NEW GAME" onPress={() => props.onRestart()} />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 10,
  },
  highlight: {
    color: Colors.primary,
  },
});

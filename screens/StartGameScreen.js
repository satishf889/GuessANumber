import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

export default function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const enteredNumberHandler = (inputNumber) => {
    setEnteredNumber(inputNumber.replace(/[^0-9]/, ""));
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
    setHasConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setHasConfirmed(true);
    setEnteredNumber("");
    setSelectedNumber(parseInt(enteredNumber));
  };
  let confirmedOutput;
  if (hasConfirmed) {
    confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>The Game Screen</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            value={enteredNumber}
            onChangeText={enteredNumberHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={() => resetInputHandler()}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={() => confirmInputHandler()}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: 30,
    textAlign: "center",
  },
  button: {
    width: "40%",
  },
});

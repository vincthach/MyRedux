/**
 * Sample React Native App
 *
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
type Props = {};

const styles = StyleSheet.create({
  button: {
    width: 100,
    padding: 10,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    margin: 3
  },
  text: {
    fontSize: 30
  }
});
export default class AppComponent extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      counterInfo: { counter }
    } = this.props;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.text}>{counter}</Text>
        <TouchableOpacity
          onPress={() => this.props.increment()}
          style={styles.button}
        >
          <Text style={styles.text}>up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.decrement()}
          style={styles.button}
        >
          <Text style={styles.text}>down</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

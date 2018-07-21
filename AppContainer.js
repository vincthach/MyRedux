/**
 * Sample React Native App
 *
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import AppComponent from "./AppComponent";
const doDecrement = () => ({ type: "DECREMENT" });
const doIncrement = () => ({ type: "INCREMENT" });
class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <AppComponent {...this.props} />;
  }
}

export default connect(
  state => ({ counterInfo: state.hotboy }),
  dispatch => ({
    increment: () => dispatch(doIncrement()),
    decrement: () => dispatch(doDecrement())
  })
)(AppContainer);

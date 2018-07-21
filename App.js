/**
 * Sample React Native App
 *
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import AppContainer from "./AppContainer";

const DECREMENT = "DECREMENT";
const INCREMENT = "INCREMENT";

const doDecrement = () => ({ type: DECREMENT });
const doIncrement = () => ({ type: INCREMENT });
const firstState = {
  counter: 123
};
const counterReducer = (state = firstState, action) => {
  console.log(state, action);
  switch (action.type) {
    case DECREMENT: {
      const { counter } = state;
      const newValue = counter - 1;
      return {
        counter: newValue
      };
    }
    case INCREMENT: {
      const { counter } = state;
      const newValue = counter + 1;
      return {
        counter: newValue
      };
    }
  }
  return state;
};
const reducers = combineReducers({
  hotboy: counterReducer,
  hotgirl: abd,
});
const store = createStore(reducers);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

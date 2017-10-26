/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, Button, ListView, TouchableOpacity, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListScreen from './listScreen.js';

class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View><Text>Chat with {params.user}</Text></View>
      
    );
  }
}
const MovieApp = StackNavigator({
  ListScreen: { screen: ListScreen },
  Detail: {screen: DetailScreen},
});

export default class App extends Component<{}> {
  render() {
    return <MovieApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: 10,
    height: 50,
  }
});

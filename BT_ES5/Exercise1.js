/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {weight: '0', height: '0', bmi: 0, level: ''};
    this.compute = this.compute.bind(this);
  }

  compute(){
    console.log('On pressed!');
    let weight = parseFloat(this.state.weight);
    let height = parseFloat(this.state.height);
    let bmi = weight/Math.pow(height/100, 2);
    this.setState({level: bmi>32?'Obese':(bmi>25?'Overweight':(bmi>18.5?'Normal Weight':'Under Weight'))});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.title}>Weight (KG)</Text>
          <TextInput style={styles.input}
            keyboardType='numeric'
            value={this.state.weight}
            onChangeText={(weight) => this.setState({weight})}/>
        </View>
        <View style={styles.group}>
          <Text style={styles.title}>Height (CM)</Text>
          <TextInput style={styles.input}
            keyboardType='numeric'
            value={this.state.height}
            onChangeText={(height) => this.setState({height})}
            />
        </View>
        <View style={styles.center}>
          <View style={styles.group}>
            <Text style={styles.title}>Obesity level: {this.state.level}</Text>
          </View>
          <View style={styles.group}>
            <TouchableOpacity style={styles.button}
              onPress={this.compute}>
              <Text style={styles.buttonText}>Compute</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20
  },
  group: {
    marginTop: 20
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 30
  },
  input: {
   
    height: 50,
    
  },
  title: {
    fontSize: 20
  },
  center: {
    alignItems: 'center'
  }
});

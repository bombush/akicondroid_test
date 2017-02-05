/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Hello from './Hello.js';

export default class ReactNativeTest extends Component {

  constructor(props) {
    super(props);

    this.state = {
        text: true,
    }
  }

  onTextClick() {
    this.setState({text: !this.state.text});
  }

  getCustomTextStyle() {
    var style = {
                    color: '#ff0000',
                    fontSize: 30,
                  };

    if(this.state.text)
        style.color = '#00ff00';

    return style;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Hello myName="Tonda" />
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text onPress={this.onTextClick.bind(this)} style={this.getCustomTextStyle()}>
            Hey guys
        </Text>
        <ScrollView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  customText: {
    color: '#ff0000',
    fontSize: 30,
  }
});

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);

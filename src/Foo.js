/**
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ViewStyle } from 'react-native';

type State = {
  foo: string
};
type Props = {
  foo: string
};
export class Foo extends Component<Props, State> {
  state = {
    foo: "bar"
  }

  foo = () => { }

  render() {
    const foo = { bar: "" }
    // const { bar } = ...foo
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>{this.props.foo}</Text>
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
});
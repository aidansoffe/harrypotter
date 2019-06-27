import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Harry Potter And The Sorceres Stone
export default class Watch extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <Text>Hola</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
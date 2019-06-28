import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Saved extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'blue', fontSize: 20, fontWeight: 700}}>Saved movies</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  }
})
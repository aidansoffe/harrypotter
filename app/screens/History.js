import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Harry Potter And The Sorceres Stone
export default class History extends Component {
  render() {

    return (
      <View style={styles.container}>
        <LinearGradient style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }} colors={['#61045f', '#20011f']}>
        <Text style={{ color:'yellow', fontSize: 20, fontWeight: 700}}> Hola </Text>
      </LinearGradient> 
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
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Harry Potter And The Sorceres Stone
export default class History extends Component {
  render() {

    return (
      <View style={styles.container}>
        <LinearGradient style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }} colors={['#000000', '#006400']}>
        <Text style={{ color:'#ffffff', fontSize: 30, fontWeight: 700}}> History </Text>
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
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Movie extends Component {
  render() {
    return (
      <View style={{ display: 'flex', backgroundColor: 'yellow', }}>
        <Text style={{backgroundColor: 'red'}}>{this.props.img}</Text>
        <Text style={{backgroundColor: 'blue'}}>{this.props.name}</Text>
      </View>
    );
  }
}
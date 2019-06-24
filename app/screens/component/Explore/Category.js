import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Category extends Component {
  render() {
    return (
      <View style={styles.outer}>
        <View style={{ flex: 2 }}>
          <Image 
            source={this.props.imageUri}
            style={styles.img}
          />
        </View>
        <View style={styles.text}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, outer: {
    height: 130, width: 150,
    marginLeft: 20, borderColor: '#dddddd',
    borderWidth: 0.5
  },
  img: {
    flex: 1, width: null, height: null,
    resizeMode: 'cover'
  },
  text: { flex: 1, paddingLeft: 10, paddingTop: 10 }
})
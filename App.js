import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Explore from './app/screens/Explore';
import Saved from './app/screens/Saved';
import History from './app/screens/History';
import Icon from 'react-native-vector-icons/Ionicons'


class App extends Component {
  render() {
     return (
       <View style={styles.container}>
         <Text></Text>
       </View>
    );
  }
}

export default createBottomTabNavigator({
  Explore:{
  screen: Explore,
  navigationOptions:{
    tabBarLabel: 'Explore',
    tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search-outline" color={tintColor} size={24} />
    )
  }
  },
  Saved:{
    screen:Saved
  },
  History: {
    screen:History
  }
}) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    justifyContent: 'center',
    alignSelf: 'center'
  },
})

AppRegistry.registerComponent('App', () => App);
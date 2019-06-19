import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Explore from './app/screens/Explore';
import Saved from './app/screens/Saved';
import History from './app/screens/History';
// import Category from './component/Explore/Category';
// import Icon from 'react-native-vector-icons/Ionicons'




export default createBottomTabNavigator({
  Explore:{
  screen: Explore,
  navigationOptions: {
    tabBarLabel: 'EXPLORE',
    tabBarIcon: ({tintColor}) => {
      return (<Image source={require('./app/img/logo.png')} style={
        { height: 20, width: 20, tintColor: tintColor }} />);
    }
  }
  },

  Saved:{
    screen:Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({tintColor}) => {
        return (<Image source={require('./app/img/logo.png')} style={
          { height: 20, width: 20, tintColor: tintColor }} />);
      }
    }
  },
  History: {
    screen:History,
    navigationOptions: {
      tabBarLabel: 'HISTORY',
      tabBarIcon: ({tintColor}) => {
        return (<Image source={require('./app/img/logo.png')} style={
          { height: 20, width: 20, tintColor: tintColor }} />);
      }
    }
  },
  // }, {
  //   tabBarOptions: {
  //     activTintColor: 'red',
  //     inactiveTintColor: 'grey',
  //     style: {
  //       backgroundColor: 'white',
  //       borderTopWidth: 0,
  //       shadowOffset: { width: 5, height: 3},
  //       shadowColor: 'black',
  //       shadowOpacity: 0.5,
  //       elevation: 5
  //     }
  //   }
  // }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignSelf: 'center',
  },
})

AppRegistry.registerComponent('App', () => App);
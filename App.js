import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Image } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Explore from './app/screens/Explore';
import Saved from './app/screens/Saved';
import History from './app/screens/History';
import Watch from './app/screens/component/Explore/Watch';


// import Category from './component/Explore/Category';
// import Icon from 'react-native-vector-icons/Ionicons'


{/* <AppNavigator /> */ }

const ExploreIt = createStackNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => {
        return (<Image source={require('./app/img/logo.png')} style={
          { height: 20, width: 20, tintColor: tintColor }} />
        );
      }
    }
  },
  Watch: {
    screen: Watch,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => {
        return (<Image source={require('./app/img/logo.png')} style={
          { height: 20, width: 20, tintColor: tintColor }} />
        );
      }
    }
  }
}
);


const SavedTab = createStackNavigator({
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => {
        return (<Image source={require('./app/img/logo.png')} style={
          { height: 20, width: 20, tintColor: tintColor }} />);
      }
    }
  },
}, {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

const HistoryTab = createStackNavigator({
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: 'HISTORY',
      tabBarIcon: ({ tintColor }) => {
        return (<Image source={require('./app/img/logo.png')} style={
          { height: 20, width: 20, tintColor: tintColor }} />);
      }
    }
  }
}
);

// export default createBottomTabNavigator({
// })


export default RootStack = createBottomTabNavigator({
  ExploreIt: ExploreIt,
  SavedTab: SavedTab,
  HistoryTab: HistoryTab
});


AppRegistry.registerComponent('App', () => RootStack);
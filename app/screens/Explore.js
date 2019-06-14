import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, View, Text, SafeAreaView, Platform, StatusBar, TextInput } from 'react-native';
import Category from './component/Explore/Category';


export default class Explore extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{
          height: this.startHeaderHeight, backgroundColor: 'white',
          borderBottomWidth: 1, borderBottomColor: '#dddddd'
        }}>
          <View style={{
            flexDirection: 'row', padding: 10,
            backgroundColor: 'white', marginHorizontal: 20,
            shadowOffset: { width: 0, height: 0 },
            shadowColor: 'black',
            shadowOpacity: 0.2,
            elevation: 1,
            marginTop: Platform.OS == 'android' ? 30 : null

          }}>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder="Search for movies"
              placeholderTextColor='grey'
              style={{
                flex: 1, fontWeight: '700',
                backgroundColor: 'white'
              }} />
          </View>
        </View>
        <ScrollView
          scrollEventThrottle={16}
        >
          <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <Text style={{
              fontSize: 24, fontWeight: '700',
              paddingHorizontal: 20
            }}>
              Hello Wizards!
            </Text>
            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView>
                <Category
                  imageUri={require('../img/hp1.jpg')}
                  name="Harry Potter And The Chamber Of Secret" />
              </ScrollView>

            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
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
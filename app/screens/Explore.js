import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, Dimensions, View, Text, SafeAreaView, Platform, StatusBar, TextInput } from 'react-native';
import Category from './component/Explore/Category';



export default class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }
  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  // onChange = e => {
  //   console.log('e: ', e.target)
  //   this.setState({
  //     name: e
  //   })
  // }

  render() {
    const movies = [
      { img: require('../img/hp1.jpg'), name: 'Harry Potter And The Sorceres Stone' },
      { img: require('../img/hp2.jpg'), name: "Harry Potter And The Chamber Of Secret" },
      { img: require('../img/hp3.jpg'), name: "Harry Potter And The Prisoners of Azkaban" },
      { img: require('../img/hp4.jpg'), name: "Harry Potter And The Goblet Of Fire" },
      { img: require('../img/hp5.jpg'), name: "Harry Potter And The Order Of Phoenix" },
      { img: require('../img/hp6.jpg'), name: "Harry Potter And The Half-Blood Prince" },
      { img: require('../img/hp7.jpg'), name: "Harry Potter And The Deathly Hallows, Part 1" },
      { img: require('../img/hp8.jpg'), name: "Harry Potter And The Deathly Hallows, Part 2" }]
      console.log('state: ', this.state.name);
      const filtered = movies.filter(movie => console.log('> ', movie) || movie.name === this.state.name);
      console.log('F', filtered)
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
              style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }} 
              onChangeText={(name) => this.setState({name})} 
            />
          </View>
        </View>
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 20 }}>Explore all movies</Text>
            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {this.state.name === '' ?
                  movies.map(movie => {
                  return (
                    <Category imageUri={movie.img} name={movie.name} />
                  )
                }) : <Category name={filtered[0].name} imageUri={filtered[0].img} />}
              </ScrollView>
            </View>
          </View>
          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Welcome Wizards!</Text>
            <Text style={{ fontWeight: 100, marginTop: 10, color: '#b63838' }}>Popular movies</Text>
            <View style={{ width: '100%', height: '100%', marginTop: 20 }}>
              <Image style={{ width: 335, height: 300, borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }} source={require('../img/hp1.jpg')} />
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
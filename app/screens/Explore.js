import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, Dimensions, View, Text, SafeAreaView, Platform, StatusBar, TextInput } from 'react-native';
import Category from './component/Explore/Category';

const {height, width} = Dimensions.get('window')

export default class Explore extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }
//   constructor(){
//     super();
//     this.state = {
//       search: ''
//     };

// updateSearch(event) {
//   this.setState({search: event.target.value.substr(0, 20)});
// }

//   }
  render() {
    // let filteredCategory = this.props.Category;
    // return (
    //   <View>
    //       <ul>
    //         {filteredCategory.map((category)=>{
    //           return <Category category={category}
    //           key={category.name} />
    //         })}
    //       </ul>
     
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
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 20 }}>Explore all movies</Text>
            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                <Category
                  imageUri={require('../img/hp1.jpg')}
                  name="Harry Potter And The Sorcere's Stone"
                />
                <Category imageUri={require('../img/hp2.jpg')}
                  name="Harry Potter And The Chamber Of Secret"
                />
                <Category imageUri={require('../img/hp3.jpg')}
                  name="Harry Potter And The Prisoners of Azkaban"
                />
                 <Category imageUri={require('../img/hp4.jpg')}
                  name="Harry Potter And The Goblet Of Fire"
                />
                 <Category imageUri={require('../img/hp5.jpg')}
                  name="Harry Potter And The Order Of Phoenix"
                />
                 <Category imageUri={require('../img/hp6.jpg')}
                  name="Harry Potter And The Half-Blood Prince"
                />
                 <Category imageUri={require('../img/hp7.jpg')}
                  name="Harry Potter And The Deathly Hallows, Part 1"
                />
                <Category imageUri={require('../img/hp8.jpg')}
                  name="Harry Potter And The Deathly Hallows, Part 2"
                />
              </ScrollView>
            </View>
          </View>
          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Welcome Wizards!</Text>
            <Text style={{ fontWeight: 300, fontSize: 15, marginTop: 10, color: '#b63838' }}>Popular movies</Text>
            <View style={{width: '100%', height: '100%', marginTop: 20}}>
              <Image style={{width: 335, height: 300, borderRadius: 5, borderWidth: 1, borderColor: '#dddddd'}} source={require('../img/hp1.jpg')} />
            </View>
            
          </View>
          
        </ScrollView>
      </SafeAreaView>
      {/* // </View> */}
    {/* // ); */}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
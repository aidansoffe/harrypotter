import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, View, Text, SafeAreaView, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Category from './component/Explore/Category';
import Movie from './component/Explore/Movie';


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

  renderMovies(movies) {
    if (movies !== '') {
      return movies.map((movie) => {
        return < Movie movie={movie.img}
          key={movie.name} />
      })
    }
  }

  render() {
    const movies = [
      { img: require('../img/hp1.jpg'), name: 'Harry Potter And The Sorceres Stone', id: 1 },
      { img: require('../img/hp2.jpg'), name: "Harry Potter And The Chamber Of Secret", id: 2 },
      { img: require('../img/hp3.jpg'), name: "Harry Potter And The Prisoners of Azkaban", id: 3},
      { img: require('../img/hp4.jpg'), name: "Harry Potter And The Goblet Of Fire", id:4 },
      { img: require('../img/hp5.jpg'), name: "Harry Potter And The Order Of Phoenix" , id: 5},
      { img: require('../img/hp6.jpg'), name: "Harry Potter And The Half-Blood Prince", id: 6},
      { img: require('../img/hp7.jpg'), name: "Harry Potter And The Deathly Hallows, Part 1" , id: 7},
      { img: require('../img/hp8.jpg'), name: "Harry Potter And The Deathly Hallows, Part 2", id: 8 }]
    console.log('state: ', this.state.name);

    const filtered = movies.filter((movie) => {
      return movie.name.indexOf(this.state.name) !== -1;
    }
    );
    console.log('F', filtered)
    return (

      <SafeAreaView style={{ flex: 1 }}>
        <View style={{
          height: this.startHeaderHeight, backgroundColor: '#3b4241',
          borderBottomWidth: 1, borderBottomColor: '#dddddd'
        }}>

          <View style={{
            flexDirection: 'row', padding: 10,
            backgroundColor: '#ffffff', marginHorizontal: 20,
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
              onChangeText={(name) => this.setState({ name })}
            />
          </View>
        </View>
        <ScrollView scrollEventThrottle={15}>
          <View style={{ flex: 1, backgroundColor: '#3b4241', paddingTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 20, color: '#ffffff' }}>Explore all movies</Text>
            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {this.state.name === '' ?
                  movies.map(movie => {
                    return (
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Watch', { id: movie.id})} >
                        <Category imageUri={movie.img} name={movie.name} />
                        </TouchableOpacity>
                    )

                  }) : <Category name={filtered.name || filtered.name} imageUri={filtered.img} />}


                {this.renderMovies(movies)}
              </ScrollView>
            </View>

          </View>
          <View style={{ flex: 1, backgroundColor: '#3b4241', marginTop: 40, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: '#ffffff' }}>Welcome Wizards!</Text>
            <Text style={{ fontWeight: 500, marginTop: 10, color: '#ffffff', fontSize: 17 }}>Popular movies</Text>
            <View style={{ width: '100%', height: '100%', marginTop: 20 }}>
              <Image style={{ width: 335, height: 300, borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }} source={require('../img/hp7.jpg')} />
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
    justifyContent: 'center',
  }
})
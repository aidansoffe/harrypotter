import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';
import ImageElement from './app/component/ImageElement';


export default class App extends Component {
  state = {
    images: [
      { title: 'Harry Potter and the Philosophers Stone', img: require('./app/img/hp1.jpg') },
      { title: 'Harry Potter and the Chamber Of Secret', img: require('./app/img/hp2.jpg') },
      { title: 'Harry Potter and the Prisoner Of Azkaban', img: require('./app/img/hp3.jpg') },
      { title: 'Harry Potter and the Goblet Of Fire', img: require('./app/img/hp4.jpg') },
      { title: 'Harry Potter and the Order Of The Phoenix', img: require('./app/img/hp5.jpg') },
      { title: 'Harry Potter and the Half Blood Prince', img: require('./app/img/hp6.jpg') },
      { title: 'Harry Potter and the Deathly Hallows, Part 1', img: require('./app/img/hp7.jpg') },
      { title: 'Harry Potter and the Deathly Hallows, Part 2', img: require('./app/img/hp8.jpg') },
      { title: 'Fantastic Beasts And Where To Find Them', img: require('./app/img/hp9.jpg') },
      { title: 'Fantastic Beasts: The Crimes of Grindelwald ', img: require('./app/img/hp10.jpg') },
    ],
    imagesReference: [],
    text: '',
  }
  componentDidMount() {
    this.setState({ imagesReference: this.state.images });
  }
  search(text) {
    this.setState({ text: text });
    let imgArr = this.state.images

    for (var i = 0; i < imgArr.length; i++) {
      if (this.state.text === imgArr[i].title) {
        this.setState({ images: [imgArr[i]] })
      }
    }
    if (!text) {
      this.setState({ images: this.state.imagesReference })
    }
  }

  render() {
    let images = this.state.images.map((val, key) => {
      return <View key={key} style={styles.imagewrap}>
        <ImageElement imgsource={val.img} />
      </View>
    });

    return (
      <View style={styles.container}>
        <TextInput style={styles.textinput}
          underlineColor='transparent' placeholder='search movie'
          onChangeText={(text) => this.search(text)} value={this.state.text} />
        <View style={styles.photogrid}>
          {images}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525'
  },
  textinput: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#fff',
  },

  photogrid: {
    flex: 1,
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imagewrap: {
    padding: 3,
    height: 120,
    width: (Dimensions.get('window').width / 2) - 2,
  }
});

AppRegistry.registerComponent('App', () => App);

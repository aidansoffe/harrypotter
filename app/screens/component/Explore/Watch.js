import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Harry Potter And The Sorceres Stone
export default class Watch extends Component {
  constructor(props) {
    super(props);

    this.show = this.show.bind(this);
  }
  

 show(id) {
   console.log('??? ', "", typeof id)
  if(id== 1) {
    return 'https://rezka.ag/films/fantasy/1043-garri-potter-i-filosofskiy-kamen-2001.html'
  } else if(id == 2){
    return 'https://rezka.ag/films/fantasy/1044-garri-potter-i-taynaya-komnata-2002.html'
  } else if(id == 3){
    return 'https://rezka.ag/films/fantasy/1045-garri-potter-i-uznik-azkabana-2004.html'
  } else if(id==4){
    return 'https://rezka.ag/films/fantasy/1046-garri-potter-i-kubok-ognya-2005.html'
  } else if(id==5){
    return 'https://rezka.ag/films/family/1047-garri-potter-i-orden-feniksa.html'
  } else if(id==6){
    return 'https://rezka.ag/films/family/1048-garri-potter-i-princ-polukrovka.html'
  } else if(id==7){
    return 'https://rezka.ag/films/action/239-garri-potter-i-dary-smerti-chast-i-2010.html'
  } else if(id==8){
    return 'https://rezka.ag/films/adventures/240-garri-potter-i-dary-smerti-chast-ii-2011.html'
  }
}

  render() {

    console.log('params: ', this.props.navigation.state.params)
    return (
      <View style={styles.container}>
        <LinearGradient style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }} colors={['#61045f', '#F81CC6']}>
        <Button 
           style={styles.buttonConfig}
          title="Click to watch"
          onPress={() => Linking.openURL(this.show(this.props.navigation.state.params.id))}
            />
       </LinearGradient> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    
  },
  buttonConfig: {
    color: 'green'
  }
})
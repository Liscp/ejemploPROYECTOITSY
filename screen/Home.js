import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, ListView, FlatList, ListRenderItem } from 'react-native';
import Card from '../components/card/Card';
import colors from '../src/style/index'

export default class Home extends Component {
  render(){
    return(
      <View style = { styles.container }>
      <ImageBackground style={[{opacity: 0.6}, styles.wrapper]} source={require('../img/foto1.jpg')} behavior="padding">
        <View style={[styles.box]}>
          <Text style={ styles.loginHeader }>HERVEST OF THE FUTURE</Text>
        </View>
        </ImageBackground>
        <Card />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column'
  },
    box: {
    height: 80
  },
  wrapper: {
    display: "flex",
    height: 230
  },
  loginHeader: {
    fontSize: 25,
    color: colors.white,
    marginTop: 190,
    marginLeft: 18,
    fontWeight: "300",
    marginBottom: 40
  },
})
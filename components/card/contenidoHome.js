import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { View, StyleSheet, ImageBackground, ListView, FlatList, ListRenderItem } from 'react-native';
import colors from '../../src/style/index';
import Card from '../../components/card/Card';
export default class ContenidoHome extends Component {
  render() {
    return (
      <View style={styles.avoidView}>
        <ImageBackground style={[{opacity: 0.6}, styles.wrapper ]} source={require('../../img/foto1.jpg')} behavior="padding">
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
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex:1
  },
  wrapper1: {
    display: "flex",
    flex: 1,
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
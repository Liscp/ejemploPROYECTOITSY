import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { StyleSheet, ImageBackground, Button, Alert, View, Image, TouchableHighlight, Text } from 'react-native';
import colors from '../src/style/index';


export default class Inicio extends Component{

    render(){
      return(
        <ImageBackground source={require('../img/fondo.jpg')} style={styles.container}>
          <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/arbol.png')}/>
            <View style={styles.buttonWrapper}>
              <TouchableHighlight onPress={(this.onLogin.bind(this))} style={[{ opacity: 0.6 }, styles.button]}>
                <Text >Iniciar Sesion</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={(this.onRegister.bind(this))} style={[{ opacity: 0.6 }, styles.button]}>
                <Text >Registrate</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      );
    }
  onLogin(){
    console.log('Aplaste el login')
    return this.props.navigation.push('Login');
  }
  onRegister(){
    console.log('Aplaste el login')
    return this.props.navigation.push('Registro');
  }
}
Inicio.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
};
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 70
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: colors.green02,
    borderRadius: 15
  },
  buttonWrapper: {
    alignItems: "center",
    top: 20,
    right: -2,
    bottom: 100,
    paddingTop: 0 
  },

})
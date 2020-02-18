import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import InputField from '../components/InputFiled';
import { PropTypes } from "prop-types";
import colors from '../src/style/index';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
export default class Publicacion extends Component {
  render(){
    let { container, cardText, card } = styles;
    return (
      <Container>
        <Content>
        <View style={styles.scrollViewWrapper, styles.avoidView}>
          <ScrollView style={styles.scrollView}>
          <Text style={styles.loginHeader}>Registrate</Text>
          <InputField 
              labelText="Correo Institucional" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="email"  
              customStyle={{marginBottom:30}}
            />
            <InputField 
              labelText="Correo Institucional" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="email"  
              customStyle={{marginBottom:30}}
            />
            <InputField 
              labelText="Correo Institucional" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="email"  
              customStyle={{marginBottom:30}}
            />
            <InputField 
              labelText="Correo Institucional" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="email"  
              customStyle={{marginBottom:30}}
            />
            <InputField 
              labelText="Correo Institucional" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="email"  
              customStyle={{marginBottom:30}}
            />
            </ScrollView>
            </View>
        </Content>
      </Container>
    );
  }
}

Publicacion.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardText: {
        fontSize: 30,
        padding: 10
    }, 
    card: {
        backgroundColor: colors.green02,
        marginBottom: 10,
        marginLeft: '1%',
        width: '1000%',
        height: '90%',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 2,
            height: 2
        }
    },
    scrollViewWrapper: {
      marginTop: 70,
      flex: 1
    },
    avoidView: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 20,
      flex:1
    },
})
import React, {Component} from 'react';
import { View, StyleSheet, ImageBackground, ListView, FlatList, ListRenderItem } from 'react-native';
import Publicacion from '../screen/Publicar';
import colors from '../src/style/index';
import ContenidoHome from '../components/card/contenidoHome';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, Tab, TabHeading, Tabs } from "native-base";
export default class Home extends Component {
  render(){
    return(
      <Container transparent>
        <ImageBackground source={require('../img/fondo2.jpg')} style={styles.wrapper1} behavior="padding">
        <Header transparent>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header No Shadow</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="home" /><Text>Inicio</Text></TabHeading>}>
            <ContenidoHome />
          </Tab>
          <Tab heading={ <TabHeading><Text>Publicar</Text></TabHeading>}>
            <Publicacion />
          </Tab>
        </Tabs>
      
      </ImageBackground>
      </Container>
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
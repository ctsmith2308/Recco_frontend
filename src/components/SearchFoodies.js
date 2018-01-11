import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { View, Text, FlatList, Image } from 'react-native'
import { Card, CardSection, Input, Button, Toolbar } from './common'


export default class ListFoodies extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) =>
          <CardSection>
          <View style ={styles.thumbnailContainerStyle}>
            <Image source={require('../../avatar.png')}  style={styles.thumbnailStyle}/>
          </View>
            <Text style={styles.headerTextStyle}>{item.key}</Text>
          </CardSection>
          }
        />
        <Toolbar/>
      </View>
    );
  }
}

const styles ={
  headerContentStyle: {
    flexDirection:'column',
    justifyContent:'space-around'
  },
  headerTextStyle:{
    fontSize:18,
    marginTop: 3
  },
  thumbnailStyle:{
    height: 50,
    width:50,
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft:15,
    marginRight:15,
    marginBottom:3

  },
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
  },
  imageStyling:{
    height:300,
    flex:1,
    width:null
  },
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
}

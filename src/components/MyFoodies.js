import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { View, Text, FlatList, Image } from 'react-native'
import { Card, CardSection, Input, Button, Toolbar } from './common'


export default class MyFoodies extends Component{

  componentWillMount=()=>{
    
    // console.log('i was mounted');
  }
  render(){
    return(
      <View>
        <Text style={{marginBottom:531}}>Im the foodies page</Text>
        <Toolbar/>
      </View>
    )
  }
}

import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { View, Text, FlatList, Image } from 'react-native'
import { Card, CardSection, Input, Button, Toolbar } from './common'


export default class Favorites extends Component{
  render(){
    return(
      <View>
        <Text>Im the favorites page</Text>
        <Toolbar/>
      </View>
    )
  }
}

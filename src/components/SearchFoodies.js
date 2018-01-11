import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { View, Text } from 'react-native'
import { Card, CardSection, Input, Button, Toolbar } from './common'


export default class SearchFoodies extends Component{
  render(){
    return(
      <View>
        <Text>Im the foodie page</Text>
        <Toolbar/>
      </View>
    )
  }
}

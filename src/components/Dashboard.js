import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Card, CardSection, Input } from './common'

export default class Dashboard extends Component{
  render(){
    return (
      <Card>
        <CardSection style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: 'https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.ngsversion.1422285553360.adapt.1900.1.jpg'}}
          />
        </CardSection>
        <CardSection>
          <Input
          label='username'
          placeholder='grumpyCat2018'
          />
        </CardSection>
        <CardSection>
          <Input
          label='bio'
          placeholder='I hate life'
          />
        </CardSection>
      </Card>
    )
  }
}
const styles = {
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    padding: 15,
  },
  thumbnailStyle:{
    height:200,
    width:200,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 4
  }
}

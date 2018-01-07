import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input } from './common'
import { createUsername, createBio } from '../actions'

class Dashboard extends Component{

handleUsername(text){
  console.log('this is the text from dashboard.js', text)
  this.props.createUsername(text)
}

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
          onChangeText={this.handleUsername.bind(this)}
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

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps, {createUsername})(Dashboard)

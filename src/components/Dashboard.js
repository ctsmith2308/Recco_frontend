import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import { createUsername, createBio, submitUserInfo } from '../actions'

class Dashboard extends Component{

handleUsername(text){
  this.props.createUsername(text)
}

handleBio(text){
  this.props.createBio(text)
}

handleUserInfo(){
  // checks out
  let { id, token } = this.props.auth
  let { username, bio } = this.props.dashboard
  submitUserInfo({id, token, username, bio})
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
          value = {this.props.username}
          />
        </CardSection>
        <CardSection>
          <Input
          label='bio'
          placeholder='I hate life'
          onChangeText={this.handleBio.bind(this)}
          value = {this.props.bio}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.handleUserInfo.bind(this)}>
            Looks Good!
          </Button>
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
  //checks out
  let { auth, dashboard } = state
  return { auth, dashboard }
}

export default connect(mapStateToProps, {createUsername, createBio, submitUserInfo})(Dashboard)

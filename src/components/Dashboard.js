import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import { createUsername, createBio, submitUserInfo, getUserInfo } from '../actions'

class Dashboard extends Component{

componentDidMount(){
  //checks out
  let { id } = this.props
  this.props.getUserInfo({ id })
}

handleUsername(text){
  this.props.createUsername(text)
}

handleBio(text){
  this.props.createBio(text)
}

handleUserInfo(){
  let { token, id, username, bio } = this.props
  this.props.submitUserInfo({ token, id, username, bio })
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
          placeholder={this.props.placeholderUsername}
          onChangeText= {this.handleUsername.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
          label='bio'
          placeholder={this.props.placeholderBio}
          onChangeText={this.handleBio.bind(this)}
          
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

const mapStateToProps = ({ auth, dashboard }) => {
  let { username, bio, placeholderBio, placeholderUsername, updating } = dashboard
  let { token, id } = auth
  return { token, id, username, bio, placeholderUsername, placeholderBio, updating }
}

export default connect(mapStateToProps, {createUsername, createBio, submitUserInfo, getUserInfo})(Dashboard)

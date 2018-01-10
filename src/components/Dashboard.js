import React, { Component } from 'react'
import { View, Text, Image, CameraRoll } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import ViewPhotos from './common/ViewPhotos'
import {
  createUsername,
  createBio,
  submitUserInfo,
  getUserInfo,
  changeEditable,
  buttonToggler,
  accessPhotos } from '../actions'

class Dashboard extends Component{

componentDidMount(){
  let { id } = this.props
  this.props.getUserInfo({ id })
}

handleUsername(text){
  this.props.createUsername(text)
}

handleBio(text){
  this.props.createBio(text)
}

handleUserInfo=()=>{
  let { token, id, username, bio } = this.props
  this.props.submitUserInfo({ token, id, username, bio })
}

toggleButton=()=>{
  this.props.buttonToggler()
}

usernameValue=()=>{
  if(this.props.editable) return this.props.username
}

bioValue=()=>{
  if(this.props.editable) return this.props.bio
}

renderIf(condition){
  console.log('this is the condition', condition);
  if(condition){
    return (
      <Button onPress={()=>{this.toggleButton()}}>
        Edit
      </Button>
    )
  }else{
    return (
    <Button onPress={()=>this.handleUserInfo()}>
      Looks Good!
    </Button>
    )
  }
}

getPhotosFromGallery=()=> {
   CameraRoll.getPhotos({ first: 1000000 })
     .then(res => {
       let photoArray = res.edges;
       this.props.accessPhotos({ photoArray })
     })
 }

  render(){
    if (this.props.showPhotoGallery) {
      return (
        <ViewPhotos
          photoArray={this.props.photoArray} />
      )
    } else {
      return (
        <Card>
          <CardSection style={styles.thumbnailContainerStyle} onPress={this.getPhotosFromGallery()}>
            <Image
              style={styles.thumbnailStyle}
              source={require('../../avatar.png')}
            />
          </CardSection>
          <CardSection>
            <Input
            label='username'
            placeholder={this.props.placeholderUsername || 'username' }
            onChangeText= {this.handleUsername.bind(this)}
            editable={this.props.editable}
            value={this.usernameValue()}
            />
          </CardSection>
          <CardSection>
            <Input
            label='bio'
            placeholder={this.props.placeholderBio || 'I love tacos and long walks on the beach' }
            onChangeText={this.handleBio.bind(this)}
            editable={this.props.editable}
            value={this.bioValue()}
            />
          </CardSection>
          <CardSection>
            {this.renderIf(this.props.previousLogIn)}
          </CardSection>
        </Card>
      )
    }
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
  let { username, bio, placeholderUsername, placeholderBio, previousLogIn, editable, photoArray, showPhotoGallery, updating } = dashboard
  let { token, id } = auth
  return { token, id, username, bio, placeholderUsername, placeholderBio, previousLogIn, editable, photoArray, showPhotoGallery, updating }
}

export default connect(mapStateToProps, { createUsername, createBio, submitUserInfo, getUserInfo, changeEditable, buttonToggler, accessPhotos })(Dashboard)

import React, { Component } from 'react'
import { View, Image, TouchableOpacity, CameraRoll, Alert } from 'react-native'
import { Container } from 'native-base';

import { Actions } from 'react-native-router-flux'

import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar, TextArea } from './common'
import { logout } from '../actions'
import ViewPhotos from './common/ViewPhotos'

import {
  createName,
  createUsername,
  createBio,
  submitUserInfo,
  getUserInfo,
  changeEditable,
  buttonToggler,
  accessPhotos,
  toggleUserName
} from '../actions'

class Dashboard extends Component{

componentDidMount(){
  let { userID, token } = this.props
  this.props.getUserInfo({ userID, token })
}

handleName(text){
  this.props.createName(text)
}

handleUsername(text){
  this.props.createUsername(text)
}

handleBio(text){
  this.props.createBio(text)
}

handleUserInfo=()=>{
  let { token, userID, username, bio, name } = this.props
  this.props.submitUserInfo({ token, userID, username, bio, name })
}

toggleButton=()=>{
  this.props.buttonToggler()
}

nameValue=()=>{
  if(this.props.editable) return this.props.name
}

usernameValue=()=>{
  if(this.props.editable) return this.props.username
}

emailValue=()=>{
  if(this.props.editable) return this.props.email
}
bioValue=()=>{
  if(this.props.editable) return this.props.bio
}

logOUT=()=>{
  this.props.logout()
}
toggleAlert=()=>{
  // console.log('i was clicked');
  this.props.toggleUserName()
}

  usernameExists(condition){
    if(condition)
    return(
      Alert.alert(
        '',
        'Username already exists',
        // [
         { text:'OK',
           onPress: this.toggleAlert() },
        // ],
        // { cancelable: false }
      )
    )
  }

renderIf(condition){
  if(condition){
    return (
      <Button style={{backgroundColor:'red'}} onPress={()=>{this.toggleButton()}}>
        Edit
      </Button>
    )
  }else{
    return (
    <Button style={{backgroundColor:'red'}} onPress={()=>this.handleUserInfo()}>
      Looks Good!
    </Button>
    )
  }
}

getPhotosFromGallery=()=>{
   this.props.accessPhotos()
 }

  render(){
    if (this.props.showPhotoGallery) {
      return (
        <ViewPhotos
          photoArray={this.props.photoArray}
        />
      )
    } else {
      return (
        <View style={{backgroundColor:'#B7F5DE'}}>
          <Card style={{backgroundColor:'white'}}>
            <CardSection style={styles.thumbnailContainerStyle}>
              <TouchableOpacity onPress={()=>{this.getPhotosFromGallery()}}>
                <Image
                  style={styles.thumbnailStyle}
                  source={{uri:this.props.imageURI}}
                />
              </TouchableOpacity>
            </CardSection>
            <CardSection style={{backgroundColor:'rgba(0,0,0, 0.15)', margin:10}}>
              <Input
              label='name'
              placeholder={this.props.name||'name'}
              onChangeText={this.handleName.bind(this)}
              editable={this.props.editable}
              value={this.nameValue()}
              />
            </CardSection>
            <CardSection style={{backgroundColor:'rgba(0,0,0, 0.15)', margin:10}}>
              <Input
              label='username'
              placeholder={this.props.username || 'username' }
              onChangeText= {this.handleUsername.bind(this)}
              editable={this.props.editable}
              value={this.usernameValue()}
              />
            </CardSection>
            <CardSection style={{backgroundColor:'rgba(0,0,0, 0.15)', margin:10}}>
              <Input
              label='email'
              placeholder={this.props.email || 'email'}
              onChangeText={this.handleBio.bind(this)}
              editable={this.props.editable}
              value={this.emailValue()}
              />
            </CardSection>
            <CardSection style={{backgroundColor:'rgba(0,0,0, 0.15)', margin:10}}>
              <Input
              multiline={false}
              label='phone'
              placeholder={'000-000-0000'}
              onChangeText={()=>{console.log('i was clicked')}}
              editable={this.props.editable}
              />
            </CardSection>
            <CardSection style={{backgroundColor:'rgba(0,0,0, 0.15)', margin:10}}>
            <TextArea
            multiline={true}
            numberOfLines={4}
            label='bio'
            placeholder={this.props.bio || 'I love tacos and long walks on the beach' }
            onChangeText={this.handleBio.bind(this)}
            editable={this.props.editable}
            />
            </CardSection>
            <CardSection style={{marginBottom:150, backgroundColor:'#B7F5DE'}}>
              {this.renderIf(this.props.previousLogIn)}
              {this.usernameExists(this.props.existingUsername)}
              <Button style={{backgroundColor:'red'}} onPress={()=>{ this.logOUT() }}>
                Logout
              </Button>
            </CardSection>
          </Card>
        </View>
      )
    }
  }
}

const styles = {
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    padding: 15,
    backgroundColor:'white'
  },
  thumbnailStyle:{
    height:100,
    width:100,
    borderRadius: 50,
    borderColor: '#DD2131',
    borderWidth: 4
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
}

const mapStateToProps = ({ auth, dashboard }) => {

  let { imageURI, username, bio, name,  placeholderUsername, placeholderBio, previousLogIn, editable, photoArray, showPhotoGallery, updating, existingUsername } = dashboard

  let { token, userID, email } = auth

  return { token, userID, email, imageURI, username, bio, name, placeholderUsername, placeholderBio, previousLogIn, editable, photoArray, showPhotoGallery, updating, existingUsername }
}

export default connect(mapStateToProps, { getUserInfo, createName, createUsername, createBio, submitUserInfo, changeEditable, buttonToggler, accessPhotos, toggleUserName, logout, })(Dashboard)

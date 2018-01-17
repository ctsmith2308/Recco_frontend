import React, { Component } from 'react'
import { View, Image, TouchableOpacity, CameraRoll } from 'react-native'
// import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon} from 'native-base';
import { Container } from 'native-base';

import { Actions } from 'react-native-router-flux'

import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar } from './common'
import { logout } from '../actions'
import ViewPhotos from './common/ViewPhotos'

import {
  createUsername,
  createBio,
  submitUserInfo,
  getUserInfo,
  changeEditable,
  buttonToggler,
  accessPhotos
} from '../actions'

class Dashboard extends Component{

componentDidMount(){
  let { userID } = this.props
  this.props.getUserInfo({ userID })
}

handleUsername(text){
  this.props.createUsername(text)
}

handleBio(text){
  this.props.createBio(text)
}

handleUserInfo=()=>{
  let { token, userID, username, bio } = this.props
  this.props.submitUserInfo({ token, userID, username, bio })
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

logOUT=()=>{
  this.props.logout()
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
        <View style={{backgroundColor:'#B7F5DE'}} >
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
              label='username'
              placeholder={this.props.placeholderUsername || 'username' }
              onChangeText= {this.handleUsername.bind(this)}
              editable={this.props.editable}
              value={this.usernameValue()}
              />
            </CardSection>
            <CardSection style={{backgroundColor:'rgba(0,0,0, 0.15)', margin:10}}>
              <Input
              label='bio'
              placeholder={this.props.placeholderBio || 'I love tacos and long walks on the beach' }
              onChangeText={this.handleBio.bind(this)}
              editable={this.props.editable}
              value={this.bioValue()}
              />
            </CardSection>
            <CardSection style={{marginBottom:150, backgroundColor:'#B7F5DE'}}>
              {this.renderIf(this.props.previousLogIn)}
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
    height:200,
    width:200,
    borderRadius: 100,
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
  let { imageURI, username, bio, placeholderUsername, placeholderBio, previousLogIn, editable, photoArray, showPhotoGallery, updating } = dashboard
  let { token, userID } = auth
  return { token, userID,imageURI, username, bio, placeholderUsername, placeholderBio, previousLogIn, editable, photoArray, showPhotoGallery, updating }
}

export default connect(mapStateToProps, { createUsername, createBio, submitUserInfo, getUserInfo, changeEditable, buttonToggler, accessPhotos, logout })(Dashboard)

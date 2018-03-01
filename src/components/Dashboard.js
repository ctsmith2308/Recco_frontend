import React, { Component } from 'react'
import { View, Image, TouchableOpacity, CameraRoll, Alert, Text } from 'react-native'
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
  this.props.toggleUserName()
}

  usernameExists(condition){
    if(condition)
    return(
      Alert.alert(
        '',
        'Username already exists',
         { text:'OK',
           onPress: this.toggleAlert() },
      )
    )
  }

renderIf(condition){
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
        <View style ={styles.container}>
        <View style={styles.headerContentStyle}>
          <Text style={{fontSize:18}}>Dashboard</Text>
        </View>
        <View style={styles.thumbnailContainerStyle}>
                <Image
                  style={styles.thumbnailStyle}
                  source={{uri:this.props.imageURI}}
                />
                </View>
              <TouchableOpacity onPress={()=>{this.getPhotosFromGallery()}}>
              <Text style={{alignSelf:'center', marginBottom:10, color:'#36454f'}}>Select photo</Text>
              </TouchableOpacity>
            <Card>
            <CardSection style={styles.inputStyle}>
              <Input
                multiline={false}
                label='Name'
                placeholder={this.props.name||'name'}
                onChangeText={this.handleName.bind(this)}
                editable={this.props.editable}
                value={this.nameValue()}
              />
            </CardSection>
            <CardSection style={styles.inputStyle}>
              <Input
                multiline={false}
                label='Username'
                placeholder={this.props.username || 'username' }
                onChangeText= {this.handleUsername.bind(this)}
                editable={this.props.editable}
                value={this.usernameValue()}
              />
            </CardSection>
            <CardSection style={styles.inputStyle}>
              <Input
                multiline={false}
                label='Email'
                placeholder={this.props.email || 'email'}
                onChangeText={this.handleBio.bind(this)}
                editable={this.props.editable}
                value={this.emailValue()}
              />
            </CardSection>
            <CardSection style={styles.bioStyle}>
              <Input
                multiline={true}
                numberOfLines={4}
                label='Bio'
                placeholder={ this.props.bio || 'I love tacos and long walks on the beach' }
                onChangeText={ this.handleBio.bind(this) }
                editable={ this.props.editable }
                value={this.bioValue()}
              />
            </CardSection>
            <CardSection style={styles.buttonStyle}>
            {this.renderIf(this.props.previousLogIn)}
            {this.usernameExists(this.props.existingUsername)}
            </CardSection>
            <CardSection style={styles.buttonStyle}>
              <Button onPress={()=>{ this.logOUT() }}>
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
  container: {
    marginTop:30,
    flex: 1,
    height:'100%',
    backgroundColor:'white'
  },
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    padding: 15,
    backgroundColor:'white',
    marginTop:5,
    marginBottom:5,
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle:{
    height:100,
    width:100,
    borderRadius: 50,
    borderWidth:2,
    borderColor:'#36454f'
  },
  headerContentStyle: {
    backgroundColor:'white',
    alignItems:'center',
    paddingBottom:10,
    borderBottomWidth: 0.5,
    borderColor:'grey'
  },
  inputStyle:{
    marginBottom:5,
    marginLeft: 5,
    marginRight: 5
  },
  bioStyle:{
    marginBottom:25,
    marginLeft: 5,
    marginRight: 5
  },
  buttonStyle:{
    backgroundColor:'transparent',
    marginBottom:10,
    alignItems:'center'

  }
}

const mapStateToProps = ({ auth, dashboard }) => {

  let { imageURI, username, bio, name,  placeholderUsername, placeholderBio, previousLogIn, editable, photoArray, showPhotoGallery, updating, existingUsername } = dashboard

  let { token, userID, email } = auth

  return { token, userID, email, imageURI, username, bio, name, placeholderUsername, placeholderBio, previousLogIn, editable, photoArray, showPhotoGallery, updating, existingUsername }
}

export default connect(mapStateToProps, { getUserInfo, createName, createUsername, createBio, submitUserInfo, changeEditable, buttonToggler, accessPhotos, toggleUserName, logout, })(Dashboard)

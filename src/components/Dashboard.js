import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import { createUsername, createBio, submitUserInfo, getUserInfo, changeEditable, buttonToggler } from '../actions'

class Dashboard extends Component{

componentWillMount(){
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

renderIf(condition){
  console.log('this is the condition', condition);
  // set the condition on line 30 to condition,
  // set !this.props.previousLogIn on line 72
  // set state to false
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
          placeholder={this.props.placeholderUsername || 'username' }
          onChangeText= {this.handleUsername.bind(this)}
          editable={this.props.editable}
          />
        </CardSection>
        <CardSection>
          <Input
          label='bio'
          placeholder={this.props.placeholderBio || 'I love tacos and long walks on the beach' }
          onChangeText={this.handleBio.bind(this)}
          editable={this.props.editable}
          />
        </CardSection>
        <CardSection>
          {this.renderIf(this.props.previousLogIn)}
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
  let { username, bio, placeholderUsername, placeholderBio, previousLogIn, editable, updating } = dashboard
  let { token, id } = auth
  return { token, id, username, bio, placeholderUsername, placeholderBio, previousLogIn, editable, updating }
}

export default connect(mapStateToProps, {createUsername, createBio, submitUserInfo, getUserInfo, changeEditable, buttonToggler })(Dashboard)

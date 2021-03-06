
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';
import { Card, CardSection, Input, Button, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser, loginUserFail } from '../actions'

class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text)
  }
  onPasswordChange(text){
    this.props.passwordChanged(text)
  }
  onButtonPress(){
    const { email, password } = this.props
    this.props.loginUser({email, password})
  }
  renderError(){
    if(this.props.error){
      return(
        <View style={{backgroundColor: 'transparent', marginBottom:10}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }
  renderButton(){
    if(this.props.loading){
      return <Spinner size="large"/>
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }
  render(){
    return(
      <View style={{backgroundColor:'white'}}>
        <Text style={styles.titleStyle}>Recco</Text>
        <Image
        style={{height:150, width:150, alignSelf:'center', marginBottom:25}}
          source={require('../../megaphone.png')}
        />
        <Text style={{alignSelf:'center', fontSize:20, color:'#C73415', fontWeight:'bold' }}>Find your friends</Text>
        <Text style={{alignSelf:'center', fontSize:20, marginBottom: 20, color: '#C73415', fontWeight:'bold'}}>Discover new places</Text>
            {this.renderError()}
        <CardSection style={styles.inputStyle}>
          <Input
            label="Email"
            placeholder="email@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection style={styles.inputStyle}>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
        </CardSection>
        <CardSection style={{backgroundColor:'transparent', marginTop: 10, marginBottom:200}}>
          {this.renderButton()}
        </CardSection>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  }
}

const styles = {
  titleStyle:{
    fontFamily:'Avenir-Heavy',
    marginTop:45,
    fontWeight:'bold',
    color:'#36454f',
    alignSelf:'center',
    fontSize:115,
  },
  inputStyle:{
    marginBottom:10,
    marginLeft:10,
    marginRight:10
  },
  errorTextStyle:{
    fontSize:20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser, loginUserFail})(LoginForm)

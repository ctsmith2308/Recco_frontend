
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
        <View style={{backgroundColor: 'transparent'}}>
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
      <Button style={{color:'red'}} onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }

  render(){
    return(
      <View>
        <Text style={styles.titleStyle}>Recco</Text>

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
        <CardSection style={{backgroundColor:'transparent', marginTop: 10}}>
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
    marginTop:100,
    fontWeight:'bold',
    color:'#36454f',
    // textShadowColor: 'grey',
    // textShadowOffset: {width: -5, height: 5},
    // textShadowRadius: 10,
    alignSelf:'center',
    fontSize:125,
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

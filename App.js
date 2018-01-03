import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './src/reducers'
import { componentWillMount } from './componentWillMountFirebase'
import LoginForm from './src/components/LoginForm'
import { Header } from './src/components/common'

export default class App extends Component{

componentWillMount

  render(){
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Login"/>
          <LoginForm/>
        </View>
      </Provider>
    )
  }
}

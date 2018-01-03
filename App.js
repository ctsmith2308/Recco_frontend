import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './src/reducers'
import { config } from './config'
import LoginForm from './src/components/LoginForm'
import { Header } from './src/components/common'

export default class App extends Component{

  componentWillMount(){
    config
    firebase.initializeApp(config)
  }
  // componentWillMount(){
  //   const config = {
  //    apiKey: "AIzaSyAQmERObw1Eaq__fMdynQMSNCOPTs1tGnI",
  //    authDomain: "recco-f3b3a.firebaseapp.com",
  //    databaseURL: "https://recco-f3b3a.firebaseio.com",
  //    projectId: "recco-f3b3a",
  //    storageBucket: "recco-f3b3a.appspot.com",
  //    messagingSenderId: "470399913883"
  //   };
  //   firebase.initializeApp(config)
  // }


  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return(
      <Provider store={store}>
        <View>
          <Header headerText="Login"/>
          <LoginForm/>
        </View>
      </Provider>
    )
  }
}

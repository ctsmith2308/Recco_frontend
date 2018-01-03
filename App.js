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

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux' // you need applyMiddleware to use ReduxThunk
import logger from 'redux-logger' // allows you to see current state of state --> apply to middlewar line 21 after ReduxThunk
import ReduxThunk from 'redux-thunk' // ReduxThunk allows you to call an action creator within another action creator
import firebase from 'firebase'
import reducers from './src/reducers'
import { config } from './config'
import { Header } from './src/components/common'
import Router from './src/Router'

export default class App extends Component{

  componentWillMount(){
    config
    firebase.initializeApp(config)
  }
// second parameter in createStore is an option to use a preloaded state, but is set to an empty {} for now
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger))
    console.disableYellowBox = true
    return(
      <Provider store={store}>
          <Router/>
      </Provider>
    )
  }
}

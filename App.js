import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './src/reducers'
import { componentWillMount } from './componentWillMountFirebase'

export default class App extends Component{

componentWillMount

  render(){
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    )
  }
}

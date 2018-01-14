import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar } from './common'

import { grabFoodies } from '../actions'

class MyFoodies extends Component{

  componentWillMount=()=>{
    let userID = this.props.userID
    this.props.grabFoodies({userID})
    // console.log('i was mounted');
  }
  render(){
    return(
      <View>
        <Text style={{marginBottom:531}}>Im the foodies page</Text>
        <Toolbar/>
      </View>
    )
  }
}


const mapStateToProps = ({ auth }) => {
  let { userID } = auth

  return { userID }
}

export default connect(mapStateToProps, { grabFoodies })(MyFoodies)

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar } from './common'

export default class MapView extends Component{
  render(){
    return (
      <View>
        <Text>Im the foodie page</Text>
        <Toolbar/>
      </View>
    )
  }
}

// const styles = {
//   pickerStyle:{
//     fontSize: 18,
//     alignSelf:'center'
//   }
// }
// const mapStateToProps = (state) => {
//   const { name, phone, shift } = state.employeeForm
//   return { name, phone, shift }
// }

// export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate)

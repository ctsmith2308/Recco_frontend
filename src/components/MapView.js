import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'


export default class EmployeeCreate extends Component{
  render(){
    return (
      <Card>
        <CardSection>
          <Text>Im the map</Text>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  pickerStyle:{
    fontSize: 18,
    alignSelf:'center'
  }
}
// const mapStateToProps = (state) => {
//   const { name, phone, shift } = state.employeeForm
//   return { name, phone, shift }
// }

// export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate)

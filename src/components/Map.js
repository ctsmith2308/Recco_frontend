import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux'
import { Container } from 'native-base';

import { Card, CardSection, Input, Button, Toolbar } from './common'

export default class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
      <MapView
      style={ styles.map }
       initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
       }}
       />
       <Toolbar/>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});


// const mapStateToProps = (state) => {
//   const { name, phone, shift } = state.employeeForm
//   return { name, phone, shift }
// }
//
// export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate)

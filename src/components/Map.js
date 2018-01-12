import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import { connect } from 'react-redux'
import { Container, Icon } from 'native-base';

import { Card, CardSection, Input, Button, Toolbar, GPlacesInput } from './common'


/// add AirMaps into xcode project refer to this link https://github.com/react-community/react-native-maps/blob/1e71a21f39e7b88554852951f773c731c94680c9/docs/installation.md#ios



export default class Map extends Component {


state = {
  toggleModal:false,
  toggleSearch:false
}

// toggleSubmitter()=>{
//   this.setState(previousState => {
//       return { toggleModal: !previousState.toggleModal };
//     });
// }

toggleState=()=>{
  this.setState(previousState => {
      return { toggleModal: !previousState.toggleModal };
    });
    this.reviewModal()
  }

reviewModal(){
  if(this.state.toggleModal){
    console.log('state changed', this.state.toggleModal);
    return (
      <CardSection style={{width:320, height:140, flexDirection:'column'}}>
        <CardSection style={{flexDirection:'row', borderColor:'transparent'}}>
          <TextInput
            style={{height:18, width:290, fontSize:18, marginBottom:25, marginTop:15}}
            placeholder="Leave a review"
          />
        </CardSection>
        <CardSection style={{borderColor:'transparent'}}>
          <Button onPress={()=> this.toggleState()}>Submit</Button>
        </CardSection>
      </CardSection>
    )
  }
}

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
        >

          <MapView.Marker
            coordinate={{latitude: 37.78825,
            longitude: -122.4324,}}
          >
            <MapView.Callout>
            <View style={styles.popUp}>
              <CardSection style={{borderColor:'transparent',flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginRight:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</Text>
                <Icon name="md-star-outline" />
              </CardSection>
              <CardSection style={{borderColor:'transparent', paddingBottom:10, alignItems:'flex-end'}}>
                <Button onPress={()=>this.toggleState()}>Leave a Recco</Button>
              </CardSection>
            </View>
            </MapView.Callout>
          </MapView.Marker>
        </MapView>

        <Card>
          {this.reviewModal()}
        </Card>

        <CardSection style={{width:300, height:50,marginTop:100, marginBottom:10}}>
          <GPlacesInput/>
        </CardSection>


       <Toolbar/>

      </View>
    )
  }
}

// <TextInput
//   style={{width: 290,fontSize:18}}
//   placeholder='Search'/>


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
  popUp:{
    alignItems:'center',
    width:300,
    height:85
  },
  popUpText:{
    marginBottom:5
  }
});


// const mapStateToProps = (state) => {
//   const { name, phone, shift } = state.employeeForm
//   return { name, phone, shift }
// }
//
// export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate)

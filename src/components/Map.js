import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux'
import { Container, Icon } from 'native-base';
import RNGooglePlaces from 'react-native-google-places';

import { Card, CardSection, Input, Button, Toolbar } from './common'

import GPlacesInput from './GPlacesInput'

import { setLocatioinDetails, addTextToReview, postReview } from '../actions'

/// add AirMaps into xcode project refer to this link https://github.com/react-community/react-native-maps/blob/1e71a21f39e7b88554852951f773c731c94680c9/docs/installation.md#ios


class Map extends Component {

state = {
  toggleModal:false,
}

toggleState=()=>{
  this.setState(previousState => {
      return { toggleModal: !previousState.toggleModal };
    });
    this.reviewModal()
  }

handleReviewText(text){
  this.props.addTextToReview(text)
}

submitReview=()=>{
  let { userID, userReview, lat, long, name, address, phoneNumber  } = this.props
  this.props.postReview({ userID, userReview, lat, long, name, address })
  this.toggleState()
}

reviewModal(){
  if(this.state.toggleModal){
    return (
      <CardSection style={{width:320, height:100, flexDirection:'column'}}>
        <CardSection style={{flexDirection:'row', borderColor:'transparent'}}>
          <TextInput
            style={{height:18, width:290, fontSize:18, marginBottom:25, marginTop:15}}
            placeholder="Leave a review"
            onChangeText={this.handleReviewText.bind(this)}
          />
        </CardSection>
        <CardSection style={{borderColor:'transparent'}}>
          <Button onPress={()=> this.submitReview()}><Icon style={{color:'#FC4442'}} name="ios-megaphone-outline"></Icon></Button>
          <Button onPress={()=> this.toggleState()}><Icon style={{color:'#FC4442'}} name="ios-close"></Icon></Button>
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
          region={{
           latitude: Number(this.props.lat) || 40.0150,
           longitude: Number(this.props.long) || -105.2705,
           latitudeDelta: 0.0122,
           longitudeDelta: 0.0414,
          }}
        >
          <MapView.Marker
            coordinate={{latitude: Number(this.props.lat), longitude: Number(this.props.long)}}
          >
            <MapView.Callout>
            <View style={styles.popUp}>
              <CardSection style={{borderColor:'transparent',flexDirection:'column'}}>
                <Text style={{marginRight:5,marginBottom:8,marginTop:8, fontSize:25,fontWeight:'bold'}}>{this.props.name}</Text>
                <Text style={styles.addressDetails}>{this.props.address}</Text>
                <Text style={styles.addressDetails}>{this.props.website}</Text>
                <Text style={styles.addressDetails}>{this.props.phoneNumber}</Text>
              </CardSection>
              <CardSection style={{borderColor:'transparent', paddingTop:25, marginBottom:5, alignItems:'flex-end'}}>
                <Button onPress={()=>this.toggleState()}>Leave a Recco</Button>
              </CardSection>
            </View>
            </MapView.Callout>
          </MapView.Marker>
        </MapView>

        <Card>
          {this.reviewModal()}
        </Card>
        <CardSection style={{width:200, height:52, marginTop:100, marginBottom:10, borderColor:'#B7F5DE', borderWidth:1, borderRadius:10}}>
          <GPlacesInput/>
        </CardSection>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop:30,
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
    width:300,
    height:145
  },
  popUpText:{
    marginBottom:5
  },
  addressDetails:{
    fontSize:15,
    color: '#989898',
  }
});


const mapStateToProps = ({ auth, locationInfo, reviews}) => {
  const { userID } = auth
  const { name, address, lat, long, website, phoneNumber } = locationInfo
  const { userReview } = reviews
  return { name, address, lat, long, website, userReview, userID, phoneNumber }
}

export default connect(mapStateToProps, { setLocatioinDetails, addTextToReview, postReview })(Map)

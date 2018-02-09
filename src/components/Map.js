import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking
} from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux'
import { Container, Icon } from 'native-base';
import RNGooglePlaces from 'react-native-google-places';

import { Card, CardSection, Input, Button, Toolbar } from './common'

import GPlacesInput from './GPlacesInput'

import { setLocatioinDetails, addTextToReview, postReview, addToFavorites} from '../actions'

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
  let { userID, userReview, lat, long, name, address, website, phoneNumber, token } = this.props
  this.props.postReview({ userID, userReview, lat, long, name, address, website, phoneNumber, token })
  this.toggleState()
}

addFavorite=()=>{
  let { userID, locationInfo, token } = this.props
  this.props.addToFavorites({userID, locationInfo, token})
}

reviewModal(){
  if(this.state.toggleModal){
    return (
      <Card>
      <CardSection>
          <TextInput
            style={{width:300, fontSize:18}}
            multiline={true}
            maxLength = {126}
            placeholder='Leave a review'
            onChangeText= {this.handleReviewText.bind(this)}
          />
      </CardSection>
      <CardSection>
          <Button onPress={()=> this.submitReview()}>Submit</Button>
          <Button onPress={()=> this.toggleState()}>Cancel</Button>
      </CardSection>
      </Card>
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
            <TouchableOpacity onPress={()=>this.addFavorite()}>
              <Icon style={{color:'#404242'}} name="md-star-outline"></Icon>
             </TouchableOpacity>
              <Text style={styles.linkStyling} onPress={() => Linking.openURL(this.props.website)}>
              {this.props.name}
              </Text>
              <Text style={styles.addressDetails}>{this.props.address}</Text>
                <Button style={{flex:1, marginTop:20, fontSize:15, borderColor:'red', borderWidth:2}} onPress={()=>this.toggleState()}>Leave a Recco</Button>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        </MapView>

        <Card>
          {this.reviewModal()}
        </Card>
        <CardSection style={{backgroundColor:'transparent'}}>
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
    alignItems: 'center',
    flex:2,
  },
  popUpText:{
    marginBottom:5
  },
  addressDetails:{
    fontSize:15,
    color: '#989898',
    marginBottom:10
  },
  linkStyling:{
    color:'#0000EE',
    fontSize:18,
    flex:1,
    fontWeight:'bold',
    marginBottom:5
  }
});


const mapStateToProps = ({ auth, locationInfo, reviews}) => {
  const { userID, token } = auth
  const { name, address, lat, long, website, phoneNumber } = locationInfo
  const { userReview } = reviews
  return { name, address, lat, long, website, userReview, userID, phoneNumber, locationInfo, token }
}

export default connect(mapStateToProps, { setLocatioinDetails, addTextToReview, postReview, addToFavorites })(Map)

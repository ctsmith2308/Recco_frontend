
// AIzaSyCX47ovc9WkJUsdTXsSIn1k5q8Xz6d3jjk

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
import RNGooglePlaces from 'react-native-google-places';
import { connect } from 'react-redux'

import { setLocatioinDetails } from '../actions'

class GPlacesInput extends Component {
  openSearchModal() {
    console.log('i was clicked');
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
      console.log(place);
      let { name, address,locationAddress, latitude, longitude, website, placeID } = place
      this.props.setLocatioinDetails({name, address, locationAddress, latitude, longitude, website, placeID})
    })
    .catch(error => console.log(error.message));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.openSearchModal()}
        >
          <Text>Pick a Place</Text>
        </TouchableOpacity>
      </View>
    );
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
  popUp:{
    alignItems:'center',
    width:300,
    height:85
  },
  popUpText:{
    marginBottom:5
  }
});

const mapStateToProps=({ locationInfo })=>{
  let { name, address, latitude, longitude, website, placeID } = locationInfo
  return { name, address, latitude, longitude, website, placeID }
}

export default connect( mapStateToProps, {setLocatioinDetails})(GPlacesInput)
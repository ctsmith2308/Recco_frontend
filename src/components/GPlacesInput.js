
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

import { setLocationDetails } from '../actions'

class GPlacesInput extends Component {
  openSearchModal() {
    console.log('i was clicked');
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
      console.log('here is the place info', place );
      let { name, address, locationAddress, latitude, longitude } = place
      console.log(name);
      this.props.setLocationDetails({ name, address, locationAddress, latitude, longitude })

      RNGooglePlaces.getCurrentPlace()
      .then((results) => console.log('this is where Im at', results))
      .catch((error) => console.log(error.message));

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
  let { name, address, latitude, longitude, website } = locationInfo
  return { name, address, latitude, longitude, website }
}

export default connect( mapStateToProps, {setLocationDetails})(GPlacesInput)

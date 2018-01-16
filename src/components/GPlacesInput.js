
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';
import { connect } from 'react-redux'

import { setLocationDetails } from '../actions'

class GPlacesInput extends Component {
  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
      let { name, address, locationAddress, latitude, longitude } = place
      this.props.setLocationDetails({ name, address, locationAddress, latitude, longitude })
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
        <Text style={{marginLeft:40}}>Place a Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // marginTop:1,
    marginLeft:8,
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    justifyContent:'center',
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

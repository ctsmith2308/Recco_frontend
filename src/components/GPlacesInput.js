
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
      let { name, address, phoneNumber, website, latitude, longitude } = place
      this.props.setLocationDetails({ name, address, phoneNumber, website, latitude, longitude })
    })
    .catch(error => console.log(error.message));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.openSearchModal()}
        >
        <Text style={{color:'white', fontWeight:'bold'}}>Place a Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:45,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#C73415',
    borderRadius:100,
    width:200,
    height:52
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

const mapStateToProps=({ locationInfo })=>{
  let { name, address, latitude, longitude, website } = locationInfo
  return { name, address, latitude, longitude, website }
}

export default connect( mapStateToProps, {setLocationDetails})(GPlacesInput)

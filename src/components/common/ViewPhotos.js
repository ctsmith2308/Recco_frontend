import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import RNFetchBlob from 'react-native-fetch-blob'

import {
  Image,
  View,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux'
import { setImage } from '../../actions'
import { SelectedPhoto } from '../common';

class ViewPhotos extends Component {

passPhotoToPlaceholder=({ uri })=>{
let userID = this.props.userID
this.props.setImage({ userID, uri })
}
  state = {
    ds: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }),
  }


  renderRow(rowData) {
    const { uri } = rowData.node.image;
    return (
      <TouchableHighlight
        onPress={()=>{this.passPhotoToPlaceholder( { uri } )}}>
        <Image
          source={{ uri: rowData.node.image.uri }}
          style={styles.image} />
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>Pick A Photo </Text>
        </View>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.ds.cloneWithRows(this.props.photoArray)}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  image: {
    width: 110,
    height: 120,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#979797'
  }
})
const mapStateToProps = ({ dashboard, auth }) => {
  let { userID } = auth
  return { dashboard, userID }
}

export default connect(mapStateToProps, { setImage })(ViewPhotos);

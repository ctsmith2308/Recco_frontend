import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar } from './common'

import { listUsers } from '../actions'

class ListFoodies extends Component {

  componentWillMount=()=>{
     console.log('hey here is the array', this.props.users);
    this.props.listUsers()
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.users}
          renderItem={({item}) =>
          <CardSection>
          <View style ={styles.thumbnailContainerStyle}>
            <Image source={require('../../avatar.png')}  style={styles.thumbnailStyle}/>
          </View>
            <Text style={styles.headerTextStyle}>{item.username}</Text>
            <Button onPress={() => console.log('i was clicked')}>Follow</Button>
          </CardSection>
          }
          keyExtractor={(item, index) => index}
        />
        <Toolbar/>
      </View>
    );
  }
}

const styles ={
  headerContentStyle: {
    flexDirection:'column',
    justifyContent:'space-around'
  },
  headerTextStyle:{
    fontSize:18,
    marginTop: 3
  },
  thumbnailStyle:{
    height: 50,
    width:50,
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft:15,
    marginRight:15,
    marginBottom:3
  },
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
  },
  imageStyling:{
    height:300,
    flex:1,
    width:null
  },
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
}

const mapStateToProps = ({ getUserlist }) => {
  console.log('im state in mapStateToProps ', getUserlist);
  // let {
  //   imageURI, username, bio,
  //   placeholderUsername, placeholderBio,
  //   previousLogIn, editable, photoArray,
  //   showPhotoGallery, updating
  //   } = dashboard
  //
  // let { token, id } = auth
  //
  let { users } = getUserlist
  console.log('here is the list after youve defined it', users);

  // return { token, id,imageURI, username, bio, placeholderUsername, placeholderBio, previousLogIn, editable, photoArray, showPhotoGallery, updating }
  return { users }
}

export default connect(mapStateToProps, { listUsers })(ListFoodies)

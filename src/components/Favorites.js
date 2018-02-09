import React, { Component } from 'react'
import { Container, Header, Content, Footer, FooterTab, Icon} from 'native-base';
import { SearchBar } from 'react-native-elements'
import { View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import  axios  from 'axios'
import { Card, CardSection, Input, Button, Toolbar, RenderUserRow } from './common'
import { listUsers, addFoodie, searchBarInput, grabFoodies, toggleFriends, listFavorites } from '../actions'

class ListFoodies extends React.PureComponent {

  render() {
    return (
      <View style={styles.container}>
      <Card>
        <CardSection style={styles.headerContentStyle}>
          <View style ={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{uri:this.props.photo}}/>
          </View>
          <View style={{width:165}}>
            <Text style={styles.usernameTextStyle}>{this.props.username}</Text>
            <Text style={styles.nameTextStyle}>{this.props.profileInfo.usersName}</Text>
          </View>
        </CardSection>
        <CardSection>
        <Text style={{fontSize:18, marginLeft:10, marginTop:10}}>{this.props.bio}</Text>
        </CardSection>
        <CardSection style={{marginTop:10}}>
          <View>
            <Text style={{fontSize:25, marginLeft:100, alignItems:'center'}}>Favorite Places</Text>
          </View>
        </CardSection>
        </Card>
      <FlatList
          data={this.props.profileInfo.info}
          renderItem={ ({item}) =>
          <Card>
            <CardSection style={styles.headerContentStyle}>
              <View>
                <Text style={{fontSize:18,marginLeft:10,marginTop:10}}>{item.name}</Text>
                <Text style={styles.nameTextStyle}>{item.address}</Text>
              </View>
            </CardSection>
            </Card>
          }
          keyExtractor={(item, index) => index}
        />
        </View>
    )
  }
}

const styles ={
  headerContentStyle: {
    flexDirection:'column',
    flex:1,
    borderColor:'#F5F5F5',
    marginTop:10
  },
  usernameTextStyle:{
    fontSize:18,
    marginTop: 3
  },
  nameTextStyle:{
    marginLeft:10,
    color: '#989898',
    fontSize:15,
    marginTop: 5,
    marginBottom:10,
  },
  thumbnailStyle:{
    height: 75,
    width:75,
    borderRadius: 38,
    marginTop:10,
    marginLeft:15,
    marginRight:15,
    marginBottom:3
  },
  thumbnailContainerStyle:{
    marginTop:3,
    justifyContent:'center',
    alignItems:'center',
  },
  imageStyling:{
    height:300,
    flex:1,
    width:null
  },
  container: {
   marginTop:65,
   flex: 1,
   height:'100%',
   backgroundColor:'white'
  }
}

const mapStateToProps = ({ getUserlist, auth, userProfileInfo }) => {
  let { userID, token } = auth
  let { users, filteredUsers, myFoodies } = getUserlist
  let { profileInfo } = userProfileInfo
  let bio = profileInfo.info[0].bio
  let username =  profileInfo.info[0].username
  let photo =  profileInfo.info[0].image_url
  return { users, userID, token, filteredUsers, myFoodies, profileInfo, bio, username, photo }
}

export default connect(mapStateToProps, { listUsers, addFoodie, searchBarInput, grabFoodies, toggleFriends, listFavorites })(ListFoodies)

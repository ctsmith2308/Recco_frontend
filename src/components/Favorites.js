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
        <CardSection style={{flexDirection:'row'}}>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{uri:this.props.photo}}/>
            </View>
            <View style={{flexDirection:'column', width:200}}>
              <Text style={styles.usernameTextStyle}>{this.props.username}</Text>
              <Text style={styles.nameTextStyle}>{this.props.profileInfo.usersName}</Text>
            </View>
        </CardSection>
        <CardSection style={{marginTop:0,  shadowOffset: {width: -1, height:2},
          shadowColor: '#36454f',
          shadowOpacity: 0.4,
          shadowRadius: 1}}>
          <View>
            <Text style={{marginLeft:5, marginBottom:5}}>{this.props.bio}</Text>
          </View>
        </CardSection>
        <CardSection style={{marginTop:10, flexDirection:'row'}}>
            <View>
              <Text style={{fontSize:15, fontWeight:'bold', color:'#C73415', width:310, marginTop:8, marginLeft:5}}>Favorite Places</Text>
            </View>
            <View>
            <Icon style={{color:'#FFCB28'}} name="md-star-outline"></Icon>
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
    flexDirection:'row',
    flex:1,
    alignItems:'center',
    marginTop:10,
  },
  usernameTextStyle:{
    fontSize:25,
    marginLeft:10,
    marginTop: 20
  },
  nameTextStyle:{
    marginLeft:10,
    color: '#989898',
    fontSize:15,
    marginTop: 3,
    marginBottom:8
  },
  thumbnailStyle:{
    height: 75,
    width:75,
    borderRadius: 38,
    marginTop:5,
    marginLeft:15,
    marginRight:15,
    marginBottom:3
  },
  thumbnailContainerStyle:{
    marginTop:1,
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

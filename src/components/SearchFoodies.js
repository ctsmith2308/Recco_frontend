import React, { Component } from 'react'
import { Container, Header, Content, Footer, FooterTab, Icon} from 'native-base';
import { SearchBar } from 'react-native-elements'
import { View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import  axios  from 'axios'
import { Card, CardSection, Input, Button, Toolbar, RenderUserRow } from './common'
import { listUsers, addFoodie, searchBarInput, grabFoodies, toggleFriends } from '../actions'

class ListFoodies extends React.PureComponent {

  componentWillMount=()=>{
     this.props.listUsers( this.props.token, this.props.userID )
     this.props.grabFoodies( this.props.token, this.props.userID )
  }

  handleSearchInput=(text)=>{
    this.props.searchBarInput(text, this.props.users)
  }

  addDeleteFriend=(itemUser_id)=>{
    this.props.toggleFriends(itemUser_id, this.props.userID, this.props.token)
  }

  render() {
    return (
      <View style={styles.container}>
      <SearchBar
        placeholder="Search"
        onChangeText={this.handleSearchInput}
        lightTheme/>
        <FlatList
          data={this.props.filteredUsers}
          renderItem={ ({item}) =>
          <Card>
            <CardSection style={styles.headerContentStyle}>
              <View style ={styles.thumbnailContainerStyle}>
                <Image
                  style={styles.thumbnailStyle}
                  source={{uri:item.image_url}}/>
              </View>
              <View style={{width:165}}>
                <Text style={styles.usernameTextStyle}>{item.username}</Text>
                <Text style={styles.nameTextStyle}>{item.name}</Text>
              </View>
              <View style={{width:100, alignItems:'center'}}>
                <Button
                style={{borderWidth:2, alignItems:'center', paddingTop:25}}
                onPress={() => { this.addDeleteFriend( item.user_id )} }>
                { item.friend_id ? 'unfollow' : 'follow' }
               </Button>
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
    borderColor:'#F5F5F5',
    borderWidth:0.5
  },
  usernameTextStyle:{
    fontSize:18,
    marginTop: 3
  },
  nameTextStyle:{
    color: '#989898',
    fontSize:15,
    marginTop: 3
  },
  thumbnailStyle:{
    height: 50,
    width:50,
    borderRadius: 25,
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
   marginTop:30,
   // paddingTop: 1,
   flex: 1,
   height:'100%',
   backgroundColor:'#B7F5DE'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
}

const mapStateToProps = ({ getUserlist, auth }) => {
  let { userID, token } = auth
  let { users, filteredUsers, myFoodies } = getUserlist

  return { users, userID, token, filteredUsers, myFoodies }
}

export default connect(mapStateToProps, { listUsers, addFoodie, searchBarInput, grabFoodies, toggleFriends })(ListFoodies)

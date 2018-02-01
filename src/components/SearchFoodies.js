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
     this.props.listUsers(this.props.token)
     this.props.grabFoodies( this.props.userID, this.props.token )
  }

  handleSearchInput=(text)=>{
    this.props.searchBarInput(text, this.props.users)
  }

  toggleAddDeleteFriend=(itemUser_id)=>{
    this.props.toggleFriends(itemUser_id, this.props.userID, this.props.token)
  }

  toggleFollowButton(itemUser_id){
    let text;
    let filterFriends = this.props.myFoodies.filter( x => {
      return x.user_id === itemUser_id
    })
    filterFriends.length > 0 ? text = 'unfollow': text = 'follow'
    return (
          <Button
          style={{borderColor:'red', borderWidth:2, alignItems:'center', paddingTop:25}}
          onPress={()=>this.toggleAddDeleteFriend( itemUser_id )}>
          {text}
         </Button>
      )
  }

  render() {
    return (
      <View style={{height:'100%'}}>
      <SearchBar
        placeholder="Search"
        onChangeText={this.handleSearchInput}
        lightTheme/>
        <FlatList
          data={this.props.filteredUsers}
          renderItem={ ({item}) =>
            <CardSection style={styles.headerContentStyle}>
              <View style ={styles.thumbnailContainerStyle}>
                <Image
                  style={styles.thumbnailStyle}
                  source={{uri:item.image_url}}/>
              </View>
              <View style={{width:165}}>
                <Text style={styles.headerTextStyle}>{item.username}</Text>
                <Text style={styles.headerTextStyle}>{item.name}</Text>
              </View>
              <View style={{width:100, alignItems:'center'}}>
                {this.toggleFollowButton(item.user_id)}
              </View>
            </CardSection>
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
    borderColor:'#B7F5DE',
    borderWidth:0.5
  },
  headerTextStyle:{
    fontSize:18,
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
   flex: 1,
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

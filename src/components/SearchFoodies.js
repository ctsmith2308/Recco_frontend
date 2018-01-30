import React, { Component } from 'react'
import { Container, Header, Content, Footer, FooterTab, Icon} from 'native-base';
import { SearchBar } from 'react-native-elements'
import { View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar, RenderUserRow } from './common'

import { listUsers, addFoodie, searchBarInput } from '../actions'


class ListFoodies extends React.PureComponent {

  componentWillMount=()=>{
     let token = this.props.token
     this.props.listUsers({token})
  }

  handleFollow = (username, bio, friend_id, name ) => {
    this.props.addFoodie(username, bio, friend_id, this.props.userID, this.props.token, name)
  }

  handleSearchInput=(text)=>{
    this.props.searchBarInput(text, this.props.users)
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
                <Button
                  style={{borderColor:'red', borderWidth:2, alignItems:'center', paddingTop:25}}
                  onPress={()=>this.handleFollow(item.username, item.bio, item.user_id, item.name)}>
                  Follow
                 </Button>
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
    // borderColor: '#8DD9D8',
    // borderWidth: 2,
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
  let { users, filteredUsers } = getUserlist

  return { users, userID, token, filteredUsers }
}

export default connect(mapStateToProps, { listUsers, addFoodie, searchBarInput })(ListFoodies)

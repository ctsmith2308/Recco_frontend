import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { SearchBar } from 'react-native-elements'

import { Card, CardSection, Input, Button, Toolbar } from './common'

import { grabFoodies, setSelectedReviewsOnMap, grabFoodiesReviews, searchFriendsInput } from '../actions'

class MyFoodies extends Component{

  componentWillMount=()=>{
  this.props.grabFoodies( this.props.token, this.props.userID )
  }

  foodieReviewListHelperFn=(id)=>{
    this.props.grabFoodiesReviews(id, this.props.token)
  }

  handleSearchInput=(text)=>{
    this.props.searchFriendsInput(text, this.props.myFoodies)
  }

  render() {
    if(this.props.filteredFoodies.length === 0){
      return (
        <View style={styles.container}>
        <Image
          style={{
            marginTop:150,
            alignSelf: 'center',
            height: 150,
            width: 150,
            
          }}
          source={require('../../x.png')}/>
          <Text style={{alignSelf:'center', fontSize:30, marginTop:15}}>No friends</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
        <View style={styles.headerContentStyle}>
          <Text style={{fontSize:18}}>Following</Text>
        </View>
        <SearchBar
          placeholder="Search"
          onChangeText={this.handleSearchInput}
          lightTheme/>
          <FlatList
            data={this.props.filteredFoodies}
            renderItem={ ({item}) =>
            <Card>
              <CardSection style={styles.header1ContentStyle}>
                <View style ={styles.thumbnailContainerStyle}>
                  <Image style={styles.thumbnailStyle}
                  source={{uri:item.image_url}}/>
                </View>
                <View style={{width:190}}>
                  <Text style={styles.usernameTextStyle}>{item.username}</Text>
                  <Text style={styles.nameTextStyle}>{item.name}</Text>
                </View>
                <View style={{width:70}}>
                <TouchableOpacity onPress={()=>this.foodieReviewListHelperFn(item.user_id)}>
                    <Icon style={{marginLeft:25, color:'#36454f'}} name="ios-list-outline"></Icon>
                </TouchableOpacity>
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
}


const styles ={
  outerBorder:{
    padding:1,
    borderRadius:200,
    borderColor:'#F5F5F5',
    borderWidth:0.5
  },
  header1ContentStyle: {
    backgroundColor:'white',
    alignItems:'center',
    padding: 1,
    paddingTop:7,
    paddingBottom:7,
    borderColor:'grey'
  },
  headerContentStyle: {
    backgroundColor:'white',
    alignItems:'center',
    padding: 1,
    paddingBottom:10,
    borderBottomWidth: 0.5,
    borderColor:'grey'
  },
  usernameTextStyle:{
    fontSize:18,
    marginTop: 1
  },
  nameTextStyle:{
    color: '#989898',
    fontSize:15,
    marginTop: 1
  },
  thumbnailStyle:{
    height: 50,
    width:50,
    borderRadius: 25,
    marginLeft:15,
    marginRight:15,
    marginBottom:1,
  },
  thumbnailContainerStyle:{
    marginTop:2,
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
   flex: 1,
   height:'100%',
   backgroundColor:'#white'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
}

const mapStateToProps = ({ auth, getUserlist }) => {
  let { userID, token } = auth
  let { myFoodies, filteredFoodies } = getUserlist
  return { userID, myFoodies, token, filteredFoodies }
}

export default connect(mapStateToProps, { grabFoodies, setSelectedReviewsOnMap, grabFoodiesReviews, searchFriendsInput })(MyFoodies)

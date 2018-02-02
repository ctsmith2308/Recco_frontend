import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar } from './common'

import { grabFoodies, setSelectedReviewsOnMap, grabFoodiesReviews } from '../actions'

class MyFoodies extends Component{

  componentWillMount=()=>{
  this.props.grabFoodies( this.props.token, this.props.userID )
  }

  foodieReviewListHelperFn=(id)=>{
    this.props.grabFoodiesReviews(id)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.myFoodies}
          renderItem={ ({item}) =>
            <CardSection style={{flexDirection:'row', flex:1,borderColor:'#F5F5F5', borderWidth:0.5}}>
              <View style ={styles.thumbnailContainerStyle}>
                <Image style={styles.thumbnailStyle}
                source={{uri:item.image_url}}/>
              </View>
              <View style={{width:195,marginTop:3}}>
                <Text style={styles.usernameTextStyle}>{item.username}</Text>
                <Text style={styles.nameTextStyle}>{item.name}</Text>
              </View>
              <View style={{width:70}}>
                <Button
                 onPress={()=>this.foodieReviewListHelperFn(item.user_id)}>
                  <Icon
                  style={{color:'#FC4442'}} name="ios-list-outline"></Icon>
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
  outerBorder:{
    padding:1,
    borderRadius:200,
    borderColor:'#F5F5F5',
    borderWidth:0.5
  },
  headerContentStyle: {
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around'
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
   flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
}

const mapStateToProps = ({ auth, getUserlist }) => {
  let { userID, token } = auth
  let { myFoodies } = getUserlist
  return { userID, myFoodies, token }
}

export default connect(mapStateToProps, { grabFoodies, setSelectedReviewsOnMap, grabFoodiesReviews })(MyFoodies)

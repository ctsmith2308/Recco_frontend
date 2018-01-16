import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar } from './common'
import { Actions } from 'react-native-router-flux'
import { setLocationDetails } from '../actions'

class ReviewsList extends Component{

foodieReviewListHelperFn=( name, address, lat, long)=>{
  let latitude = Number(lat)
  let longitude = Number(long)
  this.props.setLocationDetails({ name, address, latitude, longitude})
  Actions.map()
}

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.reviewList}
          renderItem={ ({item}) =>

              <CardSection style={styles.headerContentStyle}>
                <View style={{width:300}}>
                  <Text style={styles.headerTextStyle}>{item.name}</Text>
                  <Text style={styles.locationStyle}>{item.address}</Text>
                  <Text style={{fontSize:18, fontWeight:'bold', padding:5}}>My Recco:</Text>
                  <Text style={styles.reviewStyle}>"{item.user_review}"</Text>
                </View>
                <View style={{width:65, height:65}}>
                  <Button
                    onPress={()=>this.foodieReviewListHelperFn(item.name, item.address, item.lat, item.long)}>
                    <Icon style={{color:'#DD2131'}}name="ios-pin"></Icon>
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
      margin:5,
      alignItems:'center',
      borderColor:'#B7F5DE',
      borderWidth:0.5
  },
  headerTextStyle:{
    fontSize:25,
    marginTop: 3,
    fontWeight:'bold',
    marginLeft:5
  },
  locationStyle:{
    fontSize:12,
    marginLeft:5
  },
  reviewStyle:{
    fontSize:18,
    marginLeft:5
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
   paddingTop:60
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
}

const mapStateToProps = ({ getUserlist })=>{
  let { reviewList } = getUserlist

  return { reviewList }
}

export default connect(mapStateToProps, { setLocationDetails })(ReviewsList)

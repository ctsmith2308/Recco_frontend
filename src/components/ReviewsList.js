import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar } from './common'
import { Actions } from 'react-native-router-flux'
import { setLocationDetails } from '../actions'

class ReviewsList extends Component{

helperFunction=( name, address, lat, long)=>{
  // console.log('this is the type', typeof(lat))
  let latitude = Number(lat)
  let longitude = Number(long)
  // console.log(typeof(toNumLat));
    this.props.setLocationDetails({ name, address, latitude, longitude})
  Actions.map()
}

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.reviewList}
          renderItem={ ({item}) =>
            <TouchableOpacity onPress = {()=>this.helperFunction(item.name, item.address, item.lat, item.long)}>
              <CardSection style={{flexDirection:'row', flex:1}}>
                <View style={{width:200}}>
                  <Text style={styles.headerTextStyle}>{item.name}</Text>
                  <Text style={styles.locationStyle}>{item.address}</Text>
                  <Text style={styles.reviewStyle}>{item.user_review}</Text>
                </View>
              </CardSection>
            </TouchableOpacity>
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
    justifyContent:'space-around'
  },
  headerTextStyle:{
    fontSize:25,
    marginTop: 3,
    fontWeight:'bold'
  },
  locationStyle:{
    fontSize:12
  },
  reviewStyle:{
    fontSize:18,
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

import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar } from './common'

// import { actioncreators go here } from '../actions'

class ReviewsList extends Component{

helperFunction=()=>{
  console.log('i was pressed');
}
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.reviewList}
          renderItem={ ({item}) =>
            <TouchableOpacity onPress = {()=>this.helperFunction()}>
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

export default connect(mapStateToProps)(ReviewsList)

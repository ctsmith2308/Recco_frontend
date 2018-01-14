import React, { Component } from 'react'
import { Container, Header, Content, Footer, FooterTab, Icon} from 'native-base';

import { View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar, RenderUserRow } from './common'

import { listUsers, addFoodie } from '../actions'


class ListFoodies extends React.PureComponent {

  componentWillMount=()=>{
     this.props.listUsers()
  }

  helperFunction = (friend_id ) => {
    this.props.addFoodie(friend_id, this.props.userID)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.users}
          renderItem={ ({item}) =>
            <CardSection style={{flexDirection:'row', flex:1}}>
              <View style ={styles.thumbnailContainerStyle}>
                <Image style={styles.thumbnailStyle}/>
              </View>
              <View style={{width:200}}>
                <Text style={styles.headerTextStyle}>{item.username}</Text>
              </View>
              <View style={{width:65}}>
                <Button
                 onPress={()=>this.helperFunction(item.user_id)}>
                  <Icon name="ios-person-add-outline"></Icon>
                 </Button>
              </View>
            </CardSection>
          }
          keyExtractor={(item, index) => index}
        />
        <Toolbar/>
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
    fontSize:18,
    marginTop: 3
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

const mapStateToProps = ({ getUserlist, auth }) => {
  let { userID } = auth
  let { users } = getUserlist
  // console.log('here is the userlist', users);
  // console.log('current userID', userID);

  return { users, userID }
}

export default connect(mapStateToProps, { listUsers, addFoodie })(ListFoodies)

///////////////////////////////////////////////////////////////////////////////

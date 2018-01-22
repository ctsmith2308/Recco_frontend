import React, { Component } from 'react'
import { Container, Header, Content, Footer, FooterTab, Icon} from 'native-base';

import { View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar, RenderUserRow } from './common'

import { listUsers, addFoodie } from '../actions'


class ListFoodies extends React.PureComponent {

  componentWillMount=()=>{
     let token = this.props.token
     this.props.listUsers({token})
  }

  helperFunction = (username, bio, friend_id ) => {
    this.props.addFoodie(username, bio ,friend_id, this.props.userID, this.props.token)
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.users}
          renderItem={ ({item}) =>
            <CardSection style={styles.headerContentStyle}>
              <View style ={styles.thumbnailContainerStyle}>
                <Image
                  style={styles.thumbnailStyle}
                  source={{uri:item.image_url}}/>
              </View>
              <View style={{width:165}}>
                <Text style={styles.headerTextStyle}>{item.username}</Text>
              </View>
              <View style={{width:100, alignItems:'center'}}>
                <Button
                  style={{borderColor:'red', borderWidth:2, alignItems:'center', paddingTop:25}}
                  onPress={()=>this.helperFunction(item.username,item.bio, item.user_id)}>
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
  let { users } = getUserlist


  return { users, userID, token }
}

export default connect(mapStateToProps, { listUsers, addFoodie })(ListFoodies)

///////////////////////////////////////////////////////////////////////////////

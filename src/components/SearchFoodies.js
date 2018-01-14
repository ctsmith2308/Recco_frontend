import React, { Component } from 'react'
// import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';
import { Container, Header, Content, Footer, FooterTab, Icon} from 'native-base';

import { View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Toolbar, RenderUserRow } from './common'

import { listUsers } from '../actions'

class ListFoodies extends Component {

  componentDidMount=()=>{
     this.props.listUsers()
  }



  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.users}
          renderItem={ ({item}) =>
            <RenderUserRow
              user_id={item.user_id}
              username={item.username}
            />
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

const mapStateToProps = ({ getUserlist }) => {

  let { users } = getUserlist
  console.log('here is the userlist', users);

  return { users }
}

export default connect(mapStateToProps, { listUsers })(ListFoodies)

///////////////////////////////////////////////////////////////////////////////

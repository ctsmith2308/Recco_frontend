import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Icon} from 'native-base';

import { Card, CardSection, Input, Button, Toolbar } from '../common'

class RenderUserRow extends Component {

  helperFunction = () => {
    console.log('here is the username', this.props.user_id);
    this.props.addFoodie(this.props.user_id)
  }

  render(){
    return(
      <CardSection style={{flexDirection:'row', flex:1}}>
        <View style ={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle}/>
        </View>
        <View style={{width:200}}>
          <Text style={styles.headerTextStyle}>{this.props.username}</Text>
        </View>
        <View style={{width:65}}>
          <Button
           onPress={()=>this.helperFunction()}><Icon name="ios-person-add-outline"></Icon></Button>
        </View>
      </CardSection>
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


export { RenderUserRow }

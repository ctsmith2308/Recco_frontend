

import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Map from './Map';
import Dashboard from './Dashboard';
import ListFoodies from './SearchFoodies'
import MyFoodies from './MyFoodies'

class TabNavigator extends Component{

  render(){
    return(
      <Container>
      <Header hasTabs />
             <Tabs
             tabBarUnderlineStyle={{backgroundColor:'transparent'}}
             initialPage={1}
             tabBarPosition='bottom'
             >
               <Tab heading="Search"
               >
                 <ListFoodies />
               </Tab>
               <Tab heading="Favs">
                 <MyFoodies />
               </Tab>
               <Tab heading="Map">
               <Map />
               </Tab>
               <Tab heading="Dash">
               <Dashboard />
               </Tab>
             </Tabs>
           </Container>
    )
  }
}
export default TabNavigator

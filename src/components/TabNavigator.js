

import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { Container, Header, Content, Tab, Tabs, TabHeading, Icon} from 'native-base';
import Map from './Map';
import Dashboard from './Dashboard';
import ListFoodies from './SearchFoodies'
import MyFoodies from './MyFoodies'

class TabNavigator extends Component{

  render(){
    return(
      <Container>
             <Tabs
             tabBarUnderlineStyle={{backgroundColor:'transparent'}}
             initialPage={2}
             tabBarPosition='bottom'
             >
               <Tab heading={<TabHeading><Icon style={styles.iconStyle} name="ios-search" /></TabHeading>}>
                 <ListFoodies/>
               </Tab>
               <Tab heading={<TabHeading><Icon style={styles.iconStyle} name="ios-people" /></TabHeading>}>
                 <MyFoodies />
               </Tab>
               <Tab heading={<TabHeading><Icon style={styles.iconStyle} name="ios-map-outline" /></TabHeading>}>
               <Map />
               </Tab>
               <Tab heading={<TabHeading><Icon style={styles.iconStyle} name="ios-settings" /></TabHeading>}>
               <Dashboard />
               </Tab>
             </Tabs>
           </Container>
    )
  }
}


const styles ={
  iconStyle:{
    color:'black'
  }
}
export default TabNavigator

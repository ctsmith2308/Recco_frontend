

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
      <Header hasTabs />
             <Tabs

             tabBarUnderlineStyle={{backgroundColor:'transparent'}}
             initialPage={1}
             tabBarPosition='bottom'
             >
               <Tab heading={<TabHeading><Icon style={styles.iconStyle} name="ios-person-add-outline" /></TabHeading>}>
                 <ListFoodies/>
               </Tab>
               <Tab heading={<TabHeading><Icon style={styles.iconStyle} name="ios-people" /></TabHeading>}>
                 <MyFoodies />
               </Tab>
               <Tab heading={<TabHeading><Icon style={styles.iconStyle} name="ios-compass-outline" /></TabHeading>}>
               <Map />
               </Tab>
               <Tab heading={<TabHeading><Icon style={styles.iconStyle} name="ios-person" /></TabHeading>}>
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
// <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>

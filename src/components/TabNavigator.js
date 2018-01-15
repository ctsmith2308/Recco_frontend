// import React, { Component } from 'react';
// import { Container, Header, Content, Tab, Tabs } from 'native-base';
// import Map from './Map';
// import Dashboard from './Dashboard';
// import ListFoodies from './SearchFoodies'
// import MyFoodies from './MyFoodies'
//
// ​class TabNavigator extends Component {
//
//   componentDidMount(){}
//
//   render() {
//     return (
//       <Container>
//         <Header hasTabs />
//         <Tabs initialPage={1}>
//           <Tab heading="Tab1">
//             <Dashboard />
//           </Tab>
//           <Tab heading="Tab2">
//             <ListFoodies />
//           </Tab>
//           <Tab heading="Tab3">
//             <MyFoodies />
//           </Tab>
//           <Tab heading="Tab3">
//             <MyFoodies />
//           </Tab>
//         </Tabs>
//       </Container>
//     );
//   }
// }
//
// export default TabNavigator

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
             <Tabs
             tabBarPosition='bottom'
             initialPage={0}>

               <Tab heading="Tab1">
                 <Dashboard />
               </Tab>
               <Tab heading="Tab2">
                 <ListFoodies />
               </Tab>
               <Tab heading="Tab3">
                 <Map />
               </Tab>
               <Tab heading="Tab3">
                 <MyFoodies />
               </Tab>
             </Tabs>
           </Container>
    )
  }
}
export default TabNavigator

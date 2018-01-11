import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux'

 const Toolbar = () => {
    return (
      <Footer style={{marginTop:150}}>
      <FooterTab>
        <Button vertical onPress={() => Actions.foodieSearch()}>
          <Icon name="ios-people" />
          <Text>Foodies</Text>
        </Button>
        <Button vertical onPress={() => Actions.myFavorites()}>
          <Icon name="md-star-outline" />
          <Text>Favorites</Text>
        </Button>
        <Button vertical onPress={() => Actions.map()}>
          <Icon active name="navigate" />
          <Text>Map</Text>
        </Button>
        <Button vertical onPress={() => Actions.userDash()}>
          <Icon name="person" />
          <Text>Profile</Text>
        </Button>
      </FooterTab>
      </Footer>
    )
}

export {Toolbar}


// <Footer style={{marginTop:150}}>
// <FooterTab>
//   <Button vertical>
//     <Icon name="ios-people" />
//     <Text>Foodies</Text>
//   </Button>
//   <Button vertical>
//     <Icon name="md-star-outline" />
//     <Text>Favorites</Text>
//   </Button>
//   <Button vertical>
//     <Icon active name="navigate" />
//     <Text>Map</Text>
//   </Button>
//   <Button vertical onPress={() => Actions.map()}>
//     <Icon name="person" />
//     <Text>Profile</Text>
//   </Button>
// </FooterTab>
// </Footer>

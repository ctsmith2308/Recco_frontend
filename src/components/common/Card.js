import React from 'react'
import {View, Text} from 'react-native'


const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle:{
    // shadowOffset: {width: 0, height:3},
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    elevation: 1,
    marginTop:5,
    marginBottom:1,
    marginLeft:5,
    marginRight:5,
  }
}

export { Card }

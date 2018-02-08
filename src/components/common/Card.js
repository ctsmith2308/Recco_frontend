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
    elevation: 1,
    marginTop:5,
    marginBottom:1,
    marginLeft:5,
    marginRight:5,
  }
}

export { Card }

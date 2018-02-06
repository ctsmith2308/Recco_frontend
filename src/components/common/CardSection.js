import React from 'react'
import { View, Text } from 'react-native'

const CardSection = (props)=>{
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle : {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    shadowOffset: {width: -5, height:3},
    shadowColor: '#36454f',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  }
}
export { CardSection }

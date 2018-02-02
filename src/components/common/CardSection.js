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
    shadowOffset: {width: 0, height:3},
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  }
}
export { CardSection }

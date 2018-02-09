import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button =({onPress, children })=>{
  const { buttonStyle, textStyle }= styles
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle:{
    color:'white',
    fontSize:16,
    fontWeight:'600',
    paddingTop:18,
    paddingBottom:12,
  },
  buttonStyle:{
    alignItems:'center',
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'#36454f',
    borderRadius: 5,
    marginLeft:5,
    marginRight:5,
    borderRadius:50
  }
}

export { Button }

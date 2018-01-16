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
    color:'#DD2131',
    fontSize:16,
    fontWeight:'600',
    paddingTop:18,
    paddingBottom:12
  },
  buttonStyle:{
    alignItems:'center',
    flex:1,
    // borderColor:'#3E333F',
    alignSelf:'stretch',
    backgroundColor:'#fff',
    borderRadius: 5,
    // borderWidth: 1,
    marginLeft:5,
    marginRight:5
  }
}

export { Button }

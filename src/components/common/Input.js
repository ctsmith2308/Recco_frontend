import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'

const Input = ({label, value, onChangeText, placeholder, secureTextEntry, editable, multiline}) => {
  const { inputStyle, labelStyle, containerStyle } = styles
  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={4}
        autoCapitalize='none'
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText= {onChangeText}
        editable={editable}
      />
    </View>
  )
}
const styles = {
  inputStyle:{
    color:'black',
    paddingRight:5,
    paddingLeft:5,
    fontSize:18,
    lineHeight:50,
    flex:2,
  },
  labelStyle:{
    color:'black',
    fontSize:18,
    paddingLeft:20,
    flex:1
  },
  containerStyle:{
    height:40,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:50
  }
}
export {Input}

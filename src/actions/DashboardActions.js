import { CameraRoll } from 'react-native'
import { Actions } from 'react-native-router-flux'
import NativeModules from 'NativeModules';
import axios from 'axios'

import {
  ACCESS_PHOTOS,
  ADD_NAME,
  ADD_USERNAME,
  ADD_BIO,
  SEND_USER_INFO,
  SET_USER_INFO,
  INVERT_PREV_LOGIN,
  NO_PREV_LOGIN,
  SET_IMAGE,
  USERNAME_ALREADY_EXISTS
} from './types'

export const getUserInfo=({ userID, token }) => {
  return (dispatch) => {
    let url = 'http://localhost:3000/dashboard/'
    axios.get(url + userID, { headers:{'x-access-token': token }})
    .then((res)=>{
      console.log('im the name ==> ',res.data.name);
      let { username, bio, name, image_url } = res.data
      if(!username){
        dispatch({
          type: NO_PREV_LOGIN
        })
      } else {
        dispatch({
          type: SET_USER_INFO,
          payload: { username, bio, name, image_url }
        })
      }
    })
    .catch((error) => {
    })
  }
}

export const accessPhotos = () => {
  return (dispatch) => {
    CameraRoll.getPhotos({ first: 1000000 })
    .then(res => {
      let photoArray = res.edges;
      dispatch({
        type: ACCESS_PHOTOS,
        payload: photoArray
      })
    })
  }
}
export const setImage = ({ userID, token, uri }) => {
  return(dispatch)=>{

    NativeModules.RNImageToBase64.getBase64String(uri, (err, base64) => {
      let imgurUrl = "https://api.imgur.com/3/image"
      let body = JSON.stringify({
        image: base64,
        type: 'base64'
      })
      let clientId = 'a0d07d8b8078282'
      axios.post(imgurUrl, body , {
          headers: {
              'Authorization': `Client-ID ${clientId}`,
              'content-type': 'application/json'
          }
      })
      .then((response) => {
        let myAPIUrl = 'http://localhost:3000/photos'
        let link = response.data.data.link
        let postBody = {
          userID,
          url: link,
        }
        axios.post(myAPIUrl, postBody, { headers: {'x-access-token': token}})
          .then((response)=>{
              dispatch({
              type: SET_IMAGE,
              payload: uri
            })
          })
      })
    })
  }
}

export const createName = (text)=>{
  return {
    type: ADD_NAME,
    payload: text
  }
}
export const createUsername = (text) => {
  return {
    type: ADD_USERNAME,
    payload: text
  }
}

export const createBio = (text) => {
  return {
    type: ADD_BIO,
    payload: text
  }
}

export const submitUserInfo = ({ token, userID, username, bio, name }) => {
  return (dispatch) => {
    let url = 'http://localhost:3000/users/username'
    let reqBody = { token, userID, username, bio, name }
    axios.post(url, reqBody)
      .then((res) => {
        dispatch({
          type: INVERT_PREV_LOGIN,
        })
      })
      .catch((error)=>{
        dispatch({
          type: USERNAME_ALREADY_EXISTS
        })
      })
  }
}

export const buttonToggler = () => {
  return {
    type: INVERT_PREV_LOGIN,
  }
}

export const toggleUserName = () =>{
  return {
      type: USERNAME_ALREADY_EXISTS
  }
}

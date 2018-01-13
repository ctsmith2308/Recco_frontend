import { CameraRoll } from 'react-native'
import { Actions } from 'react-native-router-flux'
import {
  SET_IMAGE,
  ACCESS_PHOTOS,
  ADD_USERNAME,
  ADD_BIO,
  SEND_USER_INFO,
  SET_USER_INFO,
  INVERT_PREV_LOGIN,
  NO_PREV_LOGIN,
  DUMMY_ACTION
} from './types'
import NativeModules from 'NativeModules';
// let NativeModules =require('NativeModules');
// import NativeModules from 'react-native-image-to-base64'
import axios from 'axios'

export const getUserInfo=({ userID }) => {
  return (dispatch) => {
    let url = 'http://localhost:3000/dashboard/'
    axios.get(url + userID)
    .then((res)=>{
      let { username, bio } = res.data
      console.log('here is the username', username);
      if(!username){
        console.log('im dispatching invert login');
        dispatch({
          type: NO_PREV_LOGIN
        })
      } else {
        console.log('im dispatching set user info');
        dispatch({
          type: SET_USER_INFO,
          payload: { username, bio }
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

export const setImage = ({ uri }) => {
  //YPU STILL NEED TO SEND THE RESPONSE ID TO YOUR BACKEND!!!!
  return(dispatch)=>{
    NativeModules.RNImageToBase64.getBase64String(uri, (err, base64) => {

      let url = "https://api.imgur.com/3/image"
      let body = JSON.stringify({
        image: base64,
        type: 'base64'
      })
      let clientId = 'a0d07d8b8078282'
      axios.post(url, body , {
          headers: {
              'Authorization': `Client-ID ${clientId}`,
              'content-type': 'application/json'
          }
      })
      .then((res) => {
        //SEND RESPONSE TO YOUR BACKEND HERE!!!
        console.log('here is the res', res);
        dispatch({
          type:DUMMY_ACTION
        })
      })
    })
  }
}

//   return (dispatch) => {
//     dispatch({
//       type: SET_IMAGE,
//       payload: uri
//     })
//     Actions.userDash()
//   }
// }

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

export const submitUserInfo = ({ token, userID, username, bio }) => {
  return (dispatch) => {
    let url = 'http://localhost:3000/users/username'
    let reqBody = { token, userID, username, bio }
    axios.post(url, reqBody)
      .then((res) => {
        dispatch({
          type: INVERT_PREV_LOGIN,
      })
    })
  }
}

export const buttonToggler = () => {
  console.log('im in the buttonToggler action');
  return {
    type: INVERT_PREV_LOGIN,
  }
}

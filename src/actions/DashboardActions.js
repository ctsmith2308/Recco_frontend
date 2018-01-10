import { ADD_PHOTO, ADD_USERNAME, ADD_BIO, SEND_USER_INFO, SET_USER_INFO, INVERT_PREV_LOGIN } from './types'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'

export const getUserInfo=({ id }) => {
  return (dispatch) => {
    let url = 'http://localhost:3000/dashboard/'
    axios.get(url + id)
    .then((res)=>{
      let { username, bio } = res.data
      console.log('here is the username', username);
      if(!username){
        console.log('im dispatching invert login');
        dispatch({
          type: INVERT_PREV_LOGIN
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

export const addUserPhoto = (image) => {
 return {
   type: ADD_PHOTO,
   payload: image
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

export const submitUserInfo = ({ token, id, username, bio }) => {
  return (dispatch) => {
    let url = 'http://localhost:3000/users/username'
    let reqBody = { token, id, username, bio }
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

// export const changeEditable=()=>{
//   return {
//     type: CHANGE_EDITABLE,
//   }
// }

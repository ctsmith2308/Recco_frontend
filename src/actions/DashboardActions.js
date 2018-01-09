import { ADD_PHOTO, ADD_USERNAME, ADD_BIO, SEND_USER_INFO, BIO_INFO } from './types'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'

export const getUserInfo=({ id }) => {
  return (dispatch) => {
    let url = 'http://localhost:3000/dashboard/'
    console.log('here is the complete url', url + id);
    axios.get(url + id)
      .then((res)=>{
        console.log('this is the response from getUserInfo', res);
        let { username, bio} = res.data
        dispatch({
          type: BIO_INFO,
          payload: { username, bio }
        })
      })
      .catch((error)=>{
        console.log('no user id found');
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
    console.log('here are the props passed from helper function', token, id, username, bio);
    let url = 'http://localhost:3000/users/username'
    let reqBody = { token, id, username, bio }
    console.log('here is the reqBody to be passed into Axios', reqBody);
    axios.post(url, reqBody)
      .then((res) => {
        console.log('here is the response just before dispatch', res);
        dispatch({
          type: SEND_USER_INFO,
      })
    })
  }
}

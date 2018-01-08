import { ADD_PHOTO, ADD_USERNAME, ADD_BIO, SEND_USER_INFO } from './types'
import axios from 'axios'

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

export const submitUserInfo = ({ id, token, username, bio }) => {
  // return (dispatch) => {
    console.log('this is the dispatch in action creator', dispatch);
    // dispatch({type: SEND_USER_INFO})
    // let url = 'http://localhost:3000/dashboard'
    // let reqBody = { id, idToken, username, bio }
    // axios.post(url, reqBody)
    //   .then((res)=>{
    //     console.log(res);
    //   })
  // }
}

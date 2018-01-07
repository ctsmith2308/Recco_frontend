import { ADD_PHOTO, ADD_USERNAME, ADD_BIO } from './types'

export const addUserPhoto = (image) => {
 return {
   type: ADD_PHOTO,
   payload: image
 }
}

export const createUsername = (text) => {
  console.log('text on the action creator side for users', text);
  return {
    type: ADD_USERNAME,
    payload: text
  }
}

export const createBio = (text) => {
  console.log('you typed this in action creator for bio', text);
  return {
    type: ADD_BIO,
    payload: text
  }
}

import {
  SET_IMAGE,
  ADD_NAME,
  ADD_USERNAME,
  ADD_BIO,
  SET_USER_INFO,
  CHANGE_EDITABLE,
  INVERT_PREV_LOGIN,
  NO_PREV_LOGIN,
  ACCESS_PHOTOS,
  DUMMY_ACTION,
  LOGOUT,
  USERNAME_ALREADY_EXISTS
 } from '../actions/types'

const INITIAL_STATE = {
  imageURI:'',
  username:null,
  bio:null,
  name:null,
  previousLogIn: false,
  editable: false,
  photoArray:null,
  showPhotoGallery: false,
  existingUsername: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ACCESS_PHOTOS:
    return { ...state, photoArray: action.payload, showPhotoGallery: !state.showPhotoGallery }
    case SET_IMAGE:
      return { ...state, imageURI: action.payload, showPhotoGallery:!state.showPhotoGallery }
    case ADD_NAME:
      return { ...state, name:action.payload }
    case ADD_USERNAME:
      return { ...state, username: action.payload }
    case ADD_BIO:
      return { ...state, bio: action.payload }
    case SET_USER_INFO:
      return { ...state, bio:action.payload.bio, username: action.payload.username, name: action.payload.name, imageURI:action.payload.image_url, previousLogIn: !state.previousLogIn }
    case INVERT_PREV_LOGIN:
      return { ...state, previousLogIn: !state.previousLogIn, editable: !state.editable }
    case NO_PREV_LOGIN:
      return { ...state, editable: true }
    case LOGOUT:
      return {  ...state, ...INITIAL_STATE  }
    case USERNAME_ALREADY_EXISTS:
      return { ...state, existingUsername: !state.existingUsername }
    default:
      return state
  }
}

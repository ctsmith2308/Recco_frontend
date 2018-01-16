import {
  SET_IMAGE,
  ADD_USERNAME,
  ADD_BIO,
  SET_USER_INFO,
  CHANGE_EDITABLE,
  INVERT_PREV_LOGIN,
  NO_PREV_LOGIN,
  ACCESS_PHOTOS,
  DUMMY_ACTION
 } from '../actions/types'

const INITIAL_STATE = {
  imageURI: '../avatar.png',
  username: '',
  bio: '',
  placeholderUsername: '',
  placeholderBio: '',
  previousLogIn: false,
  editable: false,
  photoArray:null,
  showPhotoGallery: false,
}

export default (state = INITIAL_STATE, action) => {
  console.log('this is the action', action);
  switch(action.type){
    case ACCESS_PHOTOS:
    return { ...state, photoArray: action.payload, showPhotoGallery: !state.showPhotoGallery }
    case SET_IMAGE:
      return { ...state, imageURI: action.payload, showPhotoGallery:!state.showPhotoGallery }
    case ADD_USERNAME:
      return { ...state, username: action.payload }
    case ADD_BIO:
      return { ...state, bio: action.payload }
    case SET_USER_INFO:
    console.log(action.payload.image_url);
      return { ...state, bio:action.payload.bio, username: action.payload.username,
        placeholderUsername: action.payload.username, placeholderBio: action.payload.bio,
        imageURI:action.payload.image_url,
        previousLogIn: !state.previousLogIn
      }
    case INVERT_PREV_LOGIN:
      return { ...state, previousLogIn: !state.previousLogIn, editable: !state.editable }
    case NO_PREV_LOGIN:
      return { ...state , editable: true }
    // case SET_IMAGE:
    //   return { ...state, imageURI: action.payload, showPhotoGallery:!state.showPhotoGallery }
    default:
      return state
  }
}

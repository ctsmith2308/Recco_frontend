import { ADD_USERNAME, ADD_BIO, SET_USER_INFO, CHANGE_EDITABLE, INVERT_PREV_LOGIN, NO_PREV_LOGIN
 } from '../actions/types'

const INITIAL_STATE = {
  photo:null,
  username:'',
  bio:'',
  placeholderUsername: '',
  placeholderBio: '',
  previousLogIn: false,
  editable: false
}

export default (state = INITIAL_STATE, action) => {
  console.log('this is the action', action);
  switch(action.type){
    case ADD_USERNAME:
      return { ...state, username: action.payload }
    case ADD_BIO:
      return { ...state, bio: action.payload }
    case SET_USER_INFO:
      return { ...state, bio:action.payload.bio, username: action.payload.username,
        placeholderUsername: action.payload.username, placeholderBio: action.payload.bio,
        previousLogIn: !state.previousLogIn
      }
    case INVERT_PREV_LOGIN:
      return { ...state, previousLogIn: !state.previousLogIn, editable: !state.editable }
    case NO_PREV_LOGIN:
      return { ...state , editable: true}
    default:
      return state
  }
}

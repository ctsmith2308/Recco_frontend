import { ADD_USERNAME, ADD_BIO, SEND_USER_INFO } from '../actions/types'

const INITIAL_STATE = {
  photo:null,
  username:'',
  bio:'',
}

export default (state = INITIAL_STATE, action) => {
  console.log('this is the action', action);
  switch(action.type){
    case ADD_USERNAME:
      return { ...state, username: action.payload }
    case ADD_BIO:
        return { ...state, bio: action.payload }
    case SEND_USER_INFO:
        return { ...state }
    default:
      return state
  }
}

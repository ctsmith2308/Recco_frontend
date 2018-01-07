import { ADD_PHOTO, ADD_USERNAME, ADD_BIO } from '../actions/types'

const INITIAL_STATE = {
  photo:null,
  username:'',
  bio:''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type){
    case ADD_USERNAME:
      return { ...state, username: action.payload }
      case ADD_BIO:
        return { ...state, bio: action.payload }
    default:
      return state
  }
}

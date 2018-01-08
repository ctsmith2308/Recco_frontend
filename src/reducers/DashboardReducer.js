import { ADD_PHOTO, ADD_USERNAME, ADD_BIO, SEND_USER_INFO} from '../actions/types'

const INITIAL_STATE = {
  photo:null,
  username:'',
  bio:'',
  updating:false
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type){
    case ADD_USERNAME:
      return { ...state, username: action.payload }
    case ADD_BIO:
        return { ...state, bio: action.payload }
    case SEND_USER_INFO:
        return { ...state, updating:true  }
    default:
      return state
  }
}

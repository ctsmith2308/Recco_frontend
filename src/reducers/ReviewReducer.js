import { SEND_REVIEW  } from '../actions/types'

const INITIAL_STATE = {
  userReview: null
}

export default (state = INITIAL_STATE, action)=>{
  console.log(action);
  switch (action.type) {
    case SEND_REVIEW:
      return {
        ...state,
        userReview: action.payload
     }
    default:
      return state
  }
}

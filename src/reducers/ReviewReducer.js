import { ADD_REVIEW_TEXT, DUMMY_ACTION } from '../actions/types'

const INITIAL_STATE = {
  userReview: null
}

export default (state = INITIAL_STATE, action)=>{
  console.log(action);
  switch (action.type) {
    case ADD_REVIEW_TEXT:
      return {
        ...state,
        userReview: action.payload
     }
    case DUMMY_ACTION:
      return {
        ...state
      }
    default:
      return state
  }
}

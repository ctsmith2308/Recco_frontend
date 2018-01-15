import {
  GRAB_FOODIES,
  LIST_USERS,
  SET_FOODIE_ID,
  REVIEWS_LIST,
 } from '../actions/types'

const INITIAL_STATE = {
  users:null,
  currentFoodieId: null,
  myFoodies:null,
  foodieReviewList:null,
  reviewList:null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LIST_USERS:
      return { ...state, users:action.payload }
    case SET_FOODIE_ID:
      return { ...state, currentFoodieId:action.payload }
    case GRAB_FOODIES:
      return { ...state, myFoodies: action.payload }
    case REVIEWS_LIST:
      return { ...state , reviewList: action.payload }
    default:
      return state
  }
}

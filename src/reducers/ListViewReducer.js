import {
  GRAB_FOODIES,
  LIST_USERS,
  ADD_FOODIE_TO_STATE,
  REVIEWS_LIST,
 } from '../actions/types'

const INITIAL_STATE = {
  users:null,
  currentFoodieId: null,
  myFoodies:[],
  foodieReviewList:null,
  reviewList:null
}

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch(action.type){
    case LIST_USERS:
      return { ...state, users:action.payload }
    case ADD_FOODIE_TO_STATE:
      return { ...state, myFoodies: [...state.myFoodies, action.payload ] }
    case GRAB_FOODIES:
      return { ...state, myFoodies: action.payload }
    case REVIEWS_LIST:
      return { ...state , reviewList: action.payload }
    default:
      return state
  }
}

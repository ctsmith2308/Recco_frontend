import {
  GRAB_FOODIES,
  LIST_USERS,
  ADD_FOODIE_TO_STATE,
  REVIEWS_LIST,
  LOGOUT
 } from '../actions/types'

const INITIAL_STATE = {
  users:null,
  currentFoodieId: null,
  myFoodies:[],
  foodieReviewList:null,
  reviewList:null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LIST_USERS:
      return { ...state, users:action.payload }
    case ADD_FOODIE_TO_STATE:
      return { ...state, myFoodies: [...state.myFoodies, action.payload ] }
    case GRAB_FOODIES:
      return { ...state, myFoodies: action.payload }
    case REVIEWS_LIST:
      return { ...state , reviewList: action.payload }
    case LOGOUT:
      return {...state, ...INITIAL_STATE}
    default:
      return state
  }
}

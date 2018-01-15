import {
  GRAB_FOODIES,
  DUMMY_ACTION,
  SET_FOODIE_ID,
  FOODIES_REVIEWS_LIST,
 } from '../actions/types'

const INITIAL_STATE = {
  users:[],
  currentFoodieId: null,
  myFoodies:null,
  foodieReviewList:null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case DUMMY_ACTION:
      return { ...state, users:action.payload }
    case SET_FOODIE_ID:
      return { ...state, currentFoodieId:action.payload }
    case GRAB_FOODIES:
      return { ...state, myFoodies: action.payload }
    case FOODIES_REVIEWS_LIST:
      return { ...state, foodieReviewList: action.payload }
    default:
      return state
  }
}

import {
  GRAB_FOODIES,
  LIST_USERS,
  ADD_FOODIE_TO_STATE,
  REVIEWS_LIST,
  LOGOUT,
  SEARCH_USERS,
  DUMMY
 } from '../actions/types'

const INITIAL_STATE = {
  users: null,
  filteredUsers: null,
  currentFoodieId: null,
  myFoodies: [],
  foodieReviewList: null,
  reviewList: null,
}

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch(action.type){
    case LIST_USERS:
      return { ...state, users:action.payload, filteredUsers: action.payload}
    case ADD_FOODIE_TO_STATE:
      return { ...state, myFoodies: [...state.myFoodies, action.payload ] }
    case GRAB_FOODIES:
      return { ...state, myFoodies: action.payload }
    case REVIEWS_LIST:
      return { ...state, reviewList: action.payload }
    case LOGOUT:
      return { ...state, ...INITIAL_STATE }
    case SEARCH_USERS:
      return { ...state, filteredUsers: action.payload }
    case DUMMY:
      return { ...state }
    default:
      return state
  }
}

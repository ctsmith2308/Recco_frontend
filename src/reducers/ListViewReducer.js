import {
  GRAB_FOODIES,
  LIST_USERS,
  ADD_FOODIE_TO_STATE,
  REVIEWS_LIST,
  LOGOUT,
  SEARCH_USERS,
  SEARCH_FRIENDS,
  DUMMY
 } from '../actions/types'

const INITIAL_STATE = {
  users: [],
  filteredUsers: [],
  currentFoodieId: null,
  myFoodies: [],
  filteredFoodies: [],
  reviewList: null,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LIST_USERS:
      return { ...state, users:action.payload, filteredUsers: action.payload }
    case ADD_FOODIE_TO_STATE:
      return { ...state, myFoodies: [...state.myFoodies, action.payload ] }
    case GRAB_FOODIES:
      return { ...state, myFoodies: action.payload, filteredFoodies: action.payload }
    case REVIEWS_LIST:
      return { ...state, reviewList: action.payload }
    case SEARCH_USERS:
      return { ...state, filteredUsers: action.payload }
    case SEARCH_FRIENDS:
      return { ...state, filteredFoodies: action.payload }
    case DUMMY:
      return { ...state }
    case LOGOUT:
    return { ...state, ...INITIAL_STATE }
    default:
      return state
  }
}

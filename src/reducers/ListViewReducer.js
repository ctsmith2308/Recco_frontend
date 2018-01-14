import {
  GRAB_FOODIES,
  DUMMY_ACTION,
  SET_FOODIE_ID
 } from '../actions/types'

const INITIAL_STATE = {
  users:[],
  currentFoodieId: null,
  myFoodies:null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case DUMMY_ACTION:
      return { ...state, users:action.payload }
    case SET_FOODIE_ID:
      return { ...state, currentFoodieId:action.payload }
    case GRAB_FOODIES:
      return { ...state, myFoodies: action.payload }
    default:
      return state
  }
}

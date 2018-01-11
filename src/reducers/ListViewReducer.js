import {
  DUMMY_ACTION
 } from '../actions/types'

const INITIAL_STATE = {
  users:[],
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case DUMMY_ACTION:
      return { ...state, users:action.payload}
    default:
      return state
  }
}

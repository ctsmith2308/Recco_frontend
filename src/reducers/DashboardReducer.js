import { ADD_PHOTO } from '../actions/types'

const INITIAL_STATE = {
  photo:null,
  username:null,
  bio:null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_PHOTO:
      return { ...state, [action.payload.prop]: action.payload.value } // ES:6 string interpolation --> if prop = name and value = 'Jane' the output will be ==> name: 'Jane'. Refer to EmployeeActions.js
    default:
      return state
  }
}

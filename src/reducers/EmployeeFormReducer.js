import { EMPLOYEE_UPDATE } from '../actions/types'

const INITIAL_STATE = {
  name:'',
  phone: '',
  shift:''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value } // ES:6 string interpolation --> if prop = name and value = 'Jane' the output will be ==> name: 'Jane'. Refer to EmployeeActions.js
    default:
      return state
  }
}

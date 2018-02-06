import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, TO_DASHBOARD ,TO_MAP, LOGOUT } from '../actions/types'

const INITIAL_STATE = {
  email:'',
  password:'',
  userID: null,
  loggingIn: false,
  error: null,
  token: null,
  previousLogIn: false
}

export default (state = INITIAL_STATE, action)=>{
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      }
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        userID: action.payload.userID,
        email: action.payload.email,
        token: action.payload.idToken
      }
    case TO_MAP:
      return {
        ...state
      }
    case TO_DASHBOARD:
      return {
        ...state
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed.',
        password:'',
        loading: false
      }
    case LOGIN_USER:
      return {
        ...state,
        loggingIn: true,
        error: ''
      }
    case LOGOUT:
      return {
        ...state, ...INITIAL_STATE
      }
    default:
      return state
  }
}

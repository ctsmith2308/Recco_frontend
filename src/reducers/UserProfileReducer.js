import { DUMMY_ACTION, SET_PROFILE_INFO} from '../actions/types'

const INITIAL_STATE = {
  profileInfo: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PROFILE_INFO:
    console.log(action.payload)
      return { ...state, profileInfo:action.payload }
    default:
      return state
  }
}

import { SET_LOCATION_DETAILS, SET_CURRENT_FOODIE_REVIEW_LOCATIONS, LOGOUT } from '../actions/types'

const INITIAL_STATE = {
  coordinates:null,
  placeHolderCoord: null,
  name:'',
  address:'',
  lat: null,
  long: null,
  website:'no website',
}

export default (state = INITIAL_STATE, action)=>{
  console.log(action);
  switch (action.type) {
    case SET_LOCATION_DETAILS:
      return {
        ...state,
        coordinates: action.payload,
        name: action.payload.name,
        address:action.payload.address,
        lat:action.payload.latitude,
        long:action.payload.longitude,
        website:action.payload.website,
     }
    case SET_CURRENT_FOODIE_REVIEW_LOCATIONS:
      return {
        ...state, placeHolderCoord: action.payload
      }
    case LOGOUT:
      return {...state, ...INITIAL_STATE}
    default:
      return state
  }
}

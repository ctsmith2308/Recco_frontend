import { SET_LOCATION_DETAILS } from '../actions/types'

const INITIAL_STATE = {
  name:'',
  address:'',
  lat:null,
  long:null,
  website:'no website',
  placeID: null
}

export default (state = INITIAL_STATE, action)=>{
  console.log(action);
  switch (action.type) {
    case SET_LOCATION_DETAILS:
      return {
        ...state,
        name: action.payload.name,
        address:action.payload.address,
        lat:action.payload.latitude,
        long:action.payload.longitude,
        website:action.payload.website,
        placeID: action.payload.placeID
     }
    default:
      return state
  }
}

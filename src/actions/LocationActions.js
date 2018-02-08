import { Actions } from 'react-native-router-flux'
import {
  SET_LOCATION_DETAILS,
  DUMMY_ACTION
} from './types'


export const setLocationDetails = ({ name, address, phoneNumber, website, latitude, longitude }) => {
  let info = {name, address, phoneNumber, website, latitude, longitude}
  return (dispatch) => {
    dispatch({
      type: SET_LOCATION_DETAILS,
      payload: info
    })
  }
}

export const addToFavorites=(userID, locationInfo)=>{
  return (dispatch)=>{
    dispatch({
      type: DUMMY_ACTION
    })
  }
}

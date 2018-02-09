import { Actions } from 'react-native-router-flux'
import {
  SET_LOCATION_DETAILS,
  DUMMY_ACTION
} from './types'

import axios from 'axios'

export const setLocationDetails = ({ name, address, phoneNumber, website, latitude, longitude }) => {
  let info = {name, address, phoneNumber, website, latitude, longitude}
  return (dispatch) => {
    dispatch({
      type: SET_LOCATION_DETAILS,
      payload: info
    })
  }
}

export const addToFavorites=({userID, locationInfo, token})=>{
  return (dispatch)=>{
    let url = 'http://localhost:3000/favorites'
    let body = {
      userID,
      locationInfo
    }
    axios.post(url, body, { headers: {'x-access-token': token}})
      .then(res => {
        dispatch({
          type: DUMMY_ACTION
        })
      })
    }
}

import {
  SET_LOCATION_DETAILS,
} from './types'

import { Actions } from 'react-native-router-flux'


export const setLocationDetails = ({ name, address, latitude, longitude, website }) => {
  console.log('this is the lat in action creator' , latitude);
  return (dispatch) => {
    dispatch({
      type: SET_LOCATION_DETAILS,
      payload: { name, address, latitude, longitude, website }
    })
  }
}

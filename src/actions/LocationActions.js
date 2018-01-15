import { Actions } from 'react-native-router-flux'
import {
  SET_LOCATION_DETAILS,
} from './types'


export const setLocationDetails = ({ name, address, latitude, longitude, website }) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOCATION_DETAILS,
      payload: { name, address, latitude, longitude, website }
    })
  }
}

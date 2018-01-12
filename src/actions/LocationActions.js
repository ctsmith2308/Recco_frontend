import { SET_LOCATION_DETAILS } from './types'

export const setLocatioinDetails = ({ name, address, latitude, longitude, website, placeID }) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOCATION_DETAILS,
      payload: { name, address, latitude, longitude, website, placeID }
    })
  }
}

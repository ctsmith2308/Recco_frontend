import { SET_LOCATION_DETAILS, SET_CURRENT_FOODIE_REVIEW_LOCATIONS } from './types'

export const setLocationDetails = ({ name, address, latitude, longitude, website, placeID }) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOCATION_DETAILS,
      payload: { name, address, latitude, longitude, website, placeID }
    })
  }
}
export const setSelectedReviewsOnMap = () =>{
  return (dispatch)=>{
    console.log('im the action creator');
    dispatch({
      type: SET_CURRENT_FOODIE_REVIEW_LOCATIONS,
      payload: 'im the new payload'
    })
  }
}

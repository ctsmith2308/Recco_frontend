import { ADD_REVIEW_TEXT, DUMMY_ACTION  } from './types'
import axios from 'axios'

export const addTextToReview=(text)=>{
  return(dispatch)=>{
    dispatch({
      type: ADD_REVIEW_TEXT,
      payload: text
    })
  }
}
// move this action into same component - no need to dispatch an action...DUH!!!!
export const postReview = ({ userID, userReview, lat, long, name, address, website, phoneNumber, token }) => {
  return (dispatch) => {
    let url = 'http://localhost:3000/reviews'
    let body = {
      userID,
      userReview,
      lat,
      long,
      name,
      address,
      website,
      phoneNumber
    }
    axios.post(url, body, { headers: {'x-access-token': token}})
      .then(res => {
        dispatch({
          type: DUMMY_ACTION
        })
      })
      .catch( error => {
        dispatch({
          type: DUMMY_ACTION
        })
      })
  }
}

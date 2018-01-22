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

export const postReview = ({ userID, userReview, lat, long, name, address }) => {
  return (dispatch) => {
    let url = 'http://localhost:3000/reviews'
    let body = {
      userID,
      userReview,
      lat,
      long,
      name,
      address,
    }
    axios.post(url, body)
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

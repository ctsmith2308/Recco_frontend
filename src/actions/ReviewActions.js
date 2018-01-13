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

export const postReview = ({
  userID,
  userReview,
  placeID
}) => {
  return (dispatch) => {
    let url = 'http://localhost:3000/reviews'
    console.log('here is the url', url);
    let body = {
      userReview,
      placeID
    }
    axios.post(url, body)
      .then((res) => {
        dispatch({
          type: DUMMY_ACTION
        })
      })
      .catch((error) => {
        dispatch({
          type: DUMMY_ACTION
        })
      })
  }
}

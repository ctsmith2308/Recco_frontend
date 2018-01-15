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

export const postReview = ({ userID, userReview }) => {
  return (dispatch) => {
    let url = 'http://localhost:3000/reviews'
    let body = {
      userID,
      userReview,
    }
    axios.post(url, body)
      .then(res => {
        console.log('here it is from the backend', res);
        dispatch({
          type: DUMMY_ACTION
        })
      })
      .catch( error => {
        console.log('this is an error', error);
        dispatch({
          type: DUMMY_ACTION
        })
      })
  }
}

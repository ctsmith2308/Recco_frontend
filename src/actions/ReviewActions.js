import { SEND_REVIEW } from './types'

export const postReview=(text)=>{
  return(dispatch)=>{
    dispatch({  
      type: SEND_REVIEW,
      payload: text
    })
  }
}

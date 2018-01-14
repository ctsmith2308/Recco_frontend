import { Actions } from 'react-native-router-flux'
import  axios  from 'axios'

import { DUMMY_ACTION, SET_FOODIE_ID } from './types'

export const listUsers = () => {
  let url = 'http://localhost:3000/dashboard'
  return(dispatch)=>{
    axios.get(url)
    .then((data)=>{
      let userArray = data.data
      console.log('here is the data from listview', userArray);
      dispatch({
        type:DUMMY_ACTION,
        payload:userArray
      })
    })
  }
}

export const addFoodie = ( user_id ) => {
  return(dispatch)=>{
  console.log('here is the id passed from sowhere', user_id)
    dispatch({
      type:SET_FOODIE_ID,
      payload: user_id
    })
  }
}

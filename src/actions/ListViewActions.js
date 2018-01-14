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
        type: DUMMY_ACTION,
        payload:userArray
      })
    })
  }
}

export const addFoodie = ( friend_id, user_id ) => {
  return(dispatch)=>{
    // console.log('friend id passed to action', friend_id);
    // console.log('user id passed to action', user_id);
    let url = 'http://localhost:3000/friends'
    let body = {
      userID: user_id,
      friendID: friend_id
    }
    axios.post(url, body)
    .then((res)=>{
      console.log(res);
      dispatch({
        type: SET_FOODIE_ID,
        payload: friend_id
      })
    })
  }
}

export const grabFoodies = ({ currentUserID }) => {
  return (dispatch)=>{
    console.log(currentUserID);
    dispatch({
      type: GRAB_FOODIES,
      payload: 'here is the payload'
    })
  }
}

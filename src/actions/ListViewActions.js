import { Actions } from 'react-native-router-flux'
import  axios  from 'axios'

import { GRAB_FOODIES, LIST_USERS, SET_FOODIE_ID, REVIEWS_LIST } from './types'

export const listUsers = () => {
  let url = 'http://localhost:3000/dashboard'
  return(dispatch)=>{
    axios.get(url)
    .then((data)=>{
      let userArray = data.data
      console.log('here is the data from listview', userArray);
      dispatch({
        type: LIST_USERS,
        payload: userArray
      })
    })
  }
}

export const addFoodie = ( friend_id, user_id ) => {
  return(dispatch)=>{
    let url = 'http://localhost:3000/friends'
    let body = {
      userID: user_id,
      friendID: friend_id
    }
    axios.post(url, body)
    .then((res)=>{
      console.log('got a response from addFOODIE, dispatching action now', res);
      dispatch({
        type: SET_FOODIE_ID,
        payload: friend_id
      })
    })
  }
}

export const grabFoodies = ( userID ) => {
  return (dispatch)=>{
    let url = `http://localhost:3000/friends/${userID}`
    axios.get(url)
    .then((data)=>{
      console.log('here is the data from backend', data);
      let foodieList = data.data
      dispatch({
        type: GRAB_FOODIES,
        payload: foodieList
      })
    })
  }
}

export const grabFoodiesReviews = (id) =>{
  return (dispatch)=>{
    console.log('im foodie id in action creator', id);
    let url = `http://localhost:3000/reviews/${id}`
    //get id and make ajax call
    axios.get(url)
    .then((response) =>{
      console.log('here is the res', response);
      let reviewsArr = response.data
      dispatch({
        type: REVIEWS_LIST,
        payload: reviewsArr/// get a list here to render
      })
    })
  }
}

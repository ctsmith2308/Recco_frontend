import { Actions } from 'react-native-router-flux'
import  axios  from 'axios'

import { GRAB_FOODIES, LIST_USERS, ADD_FOODIE_TO_STATE, REVIEWS_LIST } from './types'

export const listUsers = () => {
  let url = 'http://localhost:3000/dashboard'
  return(dispatch)=>{
    axios.get(url)
    .then((data)=>{
      console.log('here is the data', data);
      let userArray = data.data
      dispatch({
        type: LIST_USERS,
        payload: userArray
      })
    })
  }
}

export const addFoodie = ( username, bio, friend_id, user_id ) => {
  return(dispatch)=>{
    // console.log('im the bio in the actions', bio);
    //need to pass item.username, item.bio to set state
    let url = 'http://localhost:3000/friends'
    let body = {
      userID: user_id,
      friendID: friend_id
    }
    let add = { user_id: friend_id, bio, username }
    console.log('i will be added to state', add);
    axios.post(url, body)
    .then((res)=>{
      dispatch({
        type: ADD_FOODIE_TO_STATE,
        payload: add
      })
    })
  }
}

export const grabFoodies = ( userID ) => {
  return (dispatch)=>{
    let url = `http://localhost:3000/friends/${userID}`
    axios.get(url)
    .then((data)=>{
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
    axios.get(url)
    .then((response) =>{
      let reviewsArr = response.data
      dispatch({
        type: REVIEWS_LIST,
        payload: reviewsArr
      })
      Actions.dashboard()
    })
  }
}

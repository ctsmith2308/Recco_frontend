import { Actions } from 'react-native-router-flux'
import  axios  from 'axios'

import { GRAB_FOODIES, LIST_USERS, ADD_FOODIE_TO_STATE, REVIEWS_LIST, SEARCH_USERS, DUMMY } from './types'

export const listUsers = (token) => {
  let url = 'http://localhost:3000/dashboard'
  return(dispatch) => {
    axios.get(url, { headers: {'x-access-token': token} })
    .then((data)=>{
      let userArray = data.data
      dispatch({
        type: LIST_USERS,
        payload: userArray
      })
    })
  }
}

export const grabFoodies = ( userID, token ) => {
  return (dispatch) => {
    let url = `http://localhost:3000/friends/${userID}`
    axios.get(url, { headers:{'x-access-token': token}})
    .then((data) => {
      let foodieList = data.data
      dispatch({
        type: GRAB_FOODIES,
        payload: foodieList
      })
    })
  }
}

export const toggleFriends = (itemUser_id, userID, token) => {
  return (dispatch) => {
    let postBody = {
      userID,
      friendID: itemUser_id
    }
    axios.post('http://localhost:3000/friends', postBody, { headers:{'x-access-token': token}})
    .then(()=>{
      updateFriendState(dispatch, userID, token)
      updateUsersState(dispatch, token)
    })
  }
}

export const updateFriendState = (dispatch, userID, token) => {
    let url = `http://localhost:3000/friends/${userID}`
    axios.get(url, { headers:{'x-access-token': token}})
    .then((data)=>{
      let foodieList = data.data
      dispatch({
        type: GRAB_FOODIES,
        payload: foodieList
      })
    })
}

const updateUsersState = (dispatch, token) => {
    let url = 'http://localhost:3000/dashboard'
      axios.get(url, { headers: {'x-access-token': token} })
      .then((data)=>{
        let userArray = data.data
        dispatch({
          type: LIST_USERS,
          payload: userArray
        })
      })
  }

export const grabFoodiesReviews = (id) =>{
  return (dispatch)=>{
    let url = `http://localhost:3000/reviews/${id}`
    axios.get(url)
    .then((response) =>{
      let reviewsArr = response.data
      dispatch({
        type: REVIEWS_LIST,
        payload: reviewsArr
      })
    })
    Actions.listOfReviews()
  }
}

export const searchBarInput = (text, users) => {
  return (dispatch)=>{
    let updateFiltered = users.filter(user => {
      return (user.username.toLowerCase().includes(text.toLowerCase()) || user.name.toLowerCase().includes(text.toLowerCase()))
    })
    dispatch({
      type: SEARCH_USERS,
      payload: updateFiltered
    })
  }
}

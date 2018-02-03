import { Actions } from 'react-native-router-flux'
import  axios  from 'axios'

import { GRAB_FOODIES, LIST_USERS, ADD_FOODIE_TO_STATE, REVIEWS_LIST, SEARCH_USERS, SEARCH_FRIENDS, DUMMY } from './types'

export const listUsers = (token, userID) => {
  let url = 'http://localhost:3000/dashboard'
  return(dispatch) => {
    axios.get(url, { headers: {'x-access-token': token} })
    .then((data)=>{
      let userArray = data.data
      let removeLoggedInUser = userArray.filter( users => {
        return users.user_id !== userID
      })
      dispatch({
        type: LIST_USERS,
        payload: removeLoggedInUser
      })
    })
  }
}

export const grabFoodies = ( token, userID ) => {
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
      updateUsersState(dispatch, userID, token)
    })
  }
}

export const updateFriendState = (dispatch, userID, token) => {
    let url = `http://localhost:3000/friends/${userID}`
    axios.get(url, { headers:{'x-access-token': token}})
    .then((data)=>{
      console.log('this is the logged in userID on press in FriendState', userID);
      let foodieList = data.data
      dispatch({
        type: GRAB_FOODIES,
        payload: foodieList
      })
    })
}

const updateUsersState = (dispatch, userID, token) => {
    let url = 'http://localhost:3000/dashboard'
      axios.get(url, { headers: {'x-access-token': token} })
      .then((data)=>{
        let userArray = data.data
        let removeLoggedInUser = userArray.filter( users => {
          return users.user_id !== userID
        })
        dispatch({
          type: LIST_USERS,
          payload: removeLoggedInUser
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

export const searchFriendsInput = (text, friends) => {
  return (dispatch)=>{
    let myFriends = friends.filter(user => {
    return (user.username.toLowerCase().includes(text.toLowerCase()) || user.name.toLowerCase().includes(text.toLowerCase()))
    })
    dispatch({
      type: SEARCH_FRIENDS,
      payload: myFriends
    })
  }
}

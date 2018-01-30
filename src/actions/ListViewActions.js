import { Actions } from 'react-native-router-flux'
import  axios  from 'axios'

import { GRAB_FOODIES, LIST_USERS, ADD_FOODIE_TO_STATE, REVIEWS_LIST, SEARCH_USERS } from './types'

export const listUsers = ({token}) => {
  let url = 'http://localhost:3000/dashboard'
  return(dispatch)=>{
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

export const addFoodie = ( username, bio, friend_id, user_id, token, name) => {
  return(dispatch)=>{
    let postUrl = 'http://localhost:3000/friends'
    let getUrl = `http://localhost:3000/photos/${friend_id}`
    let body = {
      userID: user_id,
      friendID: friend_id
    }
    let friendInfo = {
      username,
      bio,
      friend_id,
      user_id,
      name
    }

    axios.post(postUrl, body, { headers:{'x-access-token': token} })
    .then(()=>{
      axios.get(getUrl, { headers:{'x-access-token': token}})
      .then((response)=>{
        let image_url = response.data.image_url
        let add = { user_id: friend_id, bio, username, image_url }
        dispatch({
          type: ADD_FOODIE_TO_STATE,
          payload: add
        })
      })
    })
  }
}
// need to pass token to API
export const grabFoodies = ( userID, token ) => {
  return (dispatch)=>{
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

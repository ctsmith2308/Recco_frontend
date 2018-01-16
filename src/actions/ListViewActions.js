import { Actions } from 'react-native-router-flux'
import  axios  from 'axios'

import { GRAB_FOODIES, LIST_USERS, ADD_FOODIE_TO_STATE, REVIEWS_LIST } from './types'

export const listUsers = () => {
  let url = 'http://localhost:3000/dashboard'
  return(dispatch)=>{
    axios.get(url)
    .then((data)=>{
      let userArray = data.data
      dispatch({
        type: LIST_USERS,
        payload: userArray
      })
    })
  }
}

//copied from above
export const addFoodie = ( username, bio, friend_id, user_id ) => {
  return(dispatch)=>{
    let postUrl = 'http://localhost:3000/friends'
    let getUrl = `http://localhost:3000/photos/${friend_id}`
    let body = {
      userID: user_id,
      friendID: friend_id
    }
    axios.post(postUrl, body)
    .then(()=>{
    })
    .then(()=>{
      axios.get(getUrl)
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
    })
    Actions.listOfReviews()
  }
}

import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, TO_DASHBOARD, TO_MAP} from './types'

export const emailChanged=(text)=>{
  return {
    type: EMAIL_CHANGED,
    payload:text
  }
}

export const passwordChanged=(text)=>{
  return {
    type: PASSWORD_CHANGED,
    payload:text
  }
}

export const loginUser = ({ email, password }) => {
  const url = 'http://localhost:3000/users'
  return (dispatch) => {
    dispatch({type: LOGIN_USER});
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => { firebase.auth().currentUser.getIdToken(true)
      .then((idToken) => {
        console.log('here is the idToken', idToken);
        //wrap this in a new function later
        axios.get(url + "/" + idToken)
        .then((response) => {
          let userID = response.data.user_id
          let idToken = response.data.userToken
          let url = 'http://localhost:3000/dashboard/'
          loginUserSuccess(dispatch, userID, idToken)
        })
        .catch(function (error) {
        });
        //close function here
      })
      .catch(function(error) {
      })
    })
    .catch((error) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log('email', email);
          firebase.auth().currentUser.getIdToken(true)
            .then((idToken) => {
              //put this in a new function later
              axios.post(url, {
                email: user.email,
                token: idToken
              })
              .then((response) => {
                let userID = response.data.user_id
                let idToken = response.data.userToken
                loginUserSuccessToDash(dispatch, userID, idToken)
              })
              .catch((error) => {
                console.log('this is the error' , error);
              });
              //close new function here
            })
            .catch((error) => {
              console.log('error from new user creation', error);
            });
        })
      .catch(() => loginUserFail(dispatch))
    })
  }
}

const loginUserSuccess = (dispatch, userID, idToken) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: { userID, idToken }
  })
  // Actions.map()
  // Actions.userDash()
  // Actions.tabBar()
  // Actions.foodieSearch()
  // Actions.myFoodies()
  Actions.navigator()
}

const loginUserSuccessToDash = (dispatch, userID, idToken) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: { userID, idToken }
  })
Actions.navigator()  // Action.tabBar()

}

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  })
}

import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, TO_DASHBOARD, TO_MAP, LOGOUT} from './types'

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

export const logout = () =>{
  return (dispatch)=>{
    dispatch({
      type:LOGOUT
    })
    Actions.auth()
  }
}

export const loginUser = ({ email, password }) => {
  const url = 'http://localhost:3000/users'
  return (dispatch) => {
    dispatch({type: LOGIN_USER})
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => { firebase.auth().currentUser.getIdToken(true)
      .then((idToken) => {
        //wrap this in a new function later
        axios.get(url + "/" + idToken)
        .then((response) => {
          // console.log('im the success case and here is the respons ==>', response);
          let userID = response.data.user_id
          let email = response.data.email
          let idToken = response.data.userToken
          loginUserSuccess(dispatch, userID, email, idToken)
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
          firebase.auth().currentUser.getIdToken(true)
            .then((idToken) => {
              //put this in a new function later
              axios.post(url, {
                email: user.email,
                token: idToken
              })
              .then((response) => {
                let userID = response.data.user_id
                let email = response.data.email
                let idToken = response.data.userToken
                loginUserSuccessToDash(dispatch, userID, email, idToken)
              })
              .catch((error) => {
              });
              //close new function here
            })
            .catch((error) => {
            });
        })
      .catch(() => loginUserFail(dispatch))
    })
  }
}

const loginUserSuccess = (dispatch, userID, email, idToken) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: { userID, email, idToken }
  })
  Actions.navigator()
}

const loginUserSuccessToDash = (dispatch, userID, email, idToken) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: { userID, email, idToken }
  })
Actions.navigator()
}

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  })
}

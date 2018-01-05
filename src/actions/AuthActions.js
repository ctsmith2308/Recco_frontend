import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types'

export const emailChanged=(text)=>{
  return {
    type: EMAIL_CHANGED,
    payload:text
  }
}

export const passwordChanged=(text)=>{
  return {
    type:PASSWORD_CHANGED,
    payload:text
  }
}

export const loginUser = ({email, password})=>{
  const url = 'http://localhost:3000/users'
  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => { firebase.auth().currentUser.getIdToken(true)
      .then((idToken) => {
        axios.get(url + "/" + idToken)
        .then((response)=>{
          let userID = response.data.user_id
          console.log(userID);
        })
        .catch(function (error) {
          console.log('this is the request', error);
        });
      })
      .catch(function(error) {
        console.log(error);
      })
      loginUserSuccess(dispatch, user)
    })
    .catch((error)=>{
      console.log(error);
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          firebase.auth().currentUser.getIdToken(true)
            .then((idToken)=> {
              axios.post(url, {
                email: user.email,
                token: idToken
              })
              console.log('this is the users token', idToken)
              // .then(function (response) {
              //   console.log(response);
              // })
              // .catch(function (error) {
              //   console.log(error);
              // });
            })
            .catch((error)=> {
              console.log('error from new user creation', error);
            });
          loginUserSuccess(dispatch, user)
        })
      .catch(()=> loginUserFail(dispatch))
    })
  }
}

const loginUserFail = (dispatch)=>{
  dispatch({
    type: LOGIN_USER_FAIL
  })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })-

  Actions.main()
}

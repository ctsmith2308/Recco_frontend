import { Actions } from 'react-native-router-flux'
import  axios  from 'axios'

import { DUMMY_ACTION, SET_PROFILE_INFO } from './types'

export const grabProfileInfo =(id,name, token)=>{
  return (dispatch)=>{
    let url = `http://localhost:3000/favorites/${id}`
    axios.get(url, { headers: {'x-access-token': token} })
    .then(res => {
      let usersName= name
      let info = res.data
      console.log('here is the info', info);
      dispatch({
        type:SET_PROFILE_INFO,
        payload: { info, usersName}
      })
      // dispatch({
      //   type:DUMMY_ACTION
      // })
      Actions.favorites()
    })
  }
}

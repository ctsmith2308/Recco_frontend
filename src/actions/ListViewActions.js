import { Actions } from 'react-native-router-flux'
import  axios  from 'axios'

import { DUMMY_ACTION } from './types'

export const listUsers = () => {
  let url = 'http://localhost:3000/dashboard'
  return(dispatch)=>{
    axios.get(url)
    .then((data)=>{
      let userArray = data.data
      console.log('here is the data from listview', userArray);
      dispatch({
        type:DUMMY_ACTION,
        payload:userArray
      })
    })
  }
}

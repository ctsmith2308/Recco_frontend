import { ADD_PHOTO } from './types'

export const employeeUpdate = ({ prop, value }) => {
 return {
   type: ADD_PHOTO,
   payload: { prop, value }
 }
}

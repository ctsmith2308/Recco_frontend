import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import DashboardReducer from './DashboardReducer'
import ListViewReducer from './ListViewReducer'

export default combineReducers({
  auth: AuthReducer,
  dashboard: DashboardReducer,
  getUserlist: ListViewReducer
})

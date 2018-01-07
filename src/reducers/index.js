import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import DashboardReducer from './DashboardReducer'

export default combineReducers({
  auth: AuthReducer,
  dashboard: DashboardReducer
})

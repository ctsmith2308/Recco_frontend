import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import DashboardReducer from './DashboardReducer'
import LocationReducer from './LocationReducer'
import ListViewReducer from './ListViewReducer'
import ReviewReducer from './ReviewReducer'

export default combineReducers({
  auth: AuthReducer,
  dashboard: DashboardReducer,
  locationInfo : LocationReducer,
  reviews: ReviewReducer,
  getUserlist: ListViewReducer
})

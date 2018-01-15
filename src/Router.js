import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import Map from './components/Map'
import SearchFoodies from './components/SearchFoodies'
import MyFoodies from './components/MyFoodies'
import ReviewsList from './components/ReviewsList'

const RouterComponent=()=>{
  return (
    <Router sceneStyle = {{ backgroundColor:'#8DD9D8',paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login"
          hideNavBar
          navBar={null}
          component={LoginForm}
          title="Please Login"
        />
      </Scene>
      <Scene key='map'>
        <Scene
          key="mapView"
          component={ Map }
          title="Map"
        />
      </Scene>
      <Scene key="userDash">
        <Scene
          key="dashboard"
          component={ Dashboard }
          title="Dashboard"
        />
      </Scene>
      <Scene key="foodieSearch">
        <Scene
          key="foodies"
          component={ SearchFoodies }
          title="Search Foodies"
        />
      </Scene>
      <Scene key="myFoodies">
        <Scene
          key="favorites"
          component={ MyFoodies }
          title= "My Foodies"
        />
      </Scene>
      <Scene key="reviewsList">
        <Scene
          key="list"
          component={ ReviewsList }
          title= "Reviews"
        />
      </Scene>
    </Router>
  )
}
export default RouterComponent

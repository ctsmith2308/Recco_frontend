import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import Map from './components/Map'
import SearchFoodies from './components/SearchFoodies'
import Favorites from './components/Favorites'

const RouterComponent=()=>{
  return (
    <Router sceneStyle = {{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login"
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
          title="Seach Foodies"
        />
      </Scene>
      <Scene key="myFavorites">
        <Scene
          key="favorites"
          component={ Favorites }
          title= "My Favorites"
        />
      </Scene>
    </Router>
  )
}
export default RouterComponent

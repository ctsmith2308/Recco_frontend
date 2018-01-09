import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import MapView from './components/MapView'

const RouterComponent=()=>{
  return (
    <Router sceneStyle = {{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login"/>
      </Scene>
      <Scene key='map'>
        <Scene
          key="mapView"
          component={ MapView }
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
    </Router>
  )
}
export default RouterComponent

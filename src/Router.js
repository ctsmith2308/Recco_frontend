import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import Map from './components/Map'
import SearchFoodies from './components/SearchFoodies'
import MyFoodies from './components/MyFoodies'
import ReviewsList from './components/ReviewsList'
import TabNavigator from './components/TabNavigator'

const RouterComponent=()=>{
  return (
    <Router sceneStyle = {{ backgroundColor:'#B7F5DE', paddingTop:0 }}>
      <Scene key="auth">
        <Scene key="login"
          hideNavBar
          navBar={null}
          component={LoginForm}
          title="Please Login"
        />
      </Scene>

      <Scene key="navigator">
        <Scene
          hideNavBar
          navBar={null}
          key="list"
          component={ TabNavigator }
        />
      </Scene>
      <Scene key="listOfReviews"
          component={ ReviewsList }
          title= "Reviews"
        />
      <Scene key='map'
          component={ Map }
          title="Map"
        />
    </Router>
  )
}
export default RouterComponent



//

//
// <Scene key="userDash">
//   <Scene
//     key="dashboard"
//     component={ Dashboard }
//     title="Dashboard"
//   />
// </Scene>
//
// <Scene key="foodieSearch">
//   <Scene
//     key="foodies"
//     component={ SearchFoodies }
//     title="Search Foodies"
//   />
// </Scene>
//
// <Scene key="myFoodies">
//   <Scene
//     key="favorites"
//     component={ MyFoodies }
//     title= "My Foodies"
//   />
// </Scene>
//
// <Scene key="listOfReviews">
//   <Scene
//     key="list"
//     component={ ReviewsList }
//     title= "Reviews"
//   />
// </Scene>

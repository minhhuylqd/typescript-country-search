import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Country from './pages/Country'

const Routes = () => (
  <Switch>
    <Route
      exact
      path='/'
      component={ Home }
    />
    <Route
      exact
      path='/cart'
      component={ Cart }
    />
    <Route
      exact
      path='/country/:countryId'
      component={ Country }
    />
  </Switch>
)

export default Routes



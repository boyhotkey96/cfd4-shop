import React from 'react'
import { Route, Switch } from 'react-router'
import Address from './components/Address'
import PersonalInfo from './components/PersonalInfo'

export default function Account() {


  return (
    <Switch>
      <Route path="/" component={PersonalInfo} />
    </Switch>
    )
}

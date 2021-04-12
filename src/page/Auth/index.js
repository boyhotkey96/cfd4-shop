import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';

export default function Auth() {

  const auth = useSelector(state => state.auth)

  if (auth.login) return <Redirect to="/" />

  return (
    <section className="py-12">
      <div className="container">
        <div className="row">
          <Login />
          <Register />
        </div>
      </div>
    </section>
  )
}

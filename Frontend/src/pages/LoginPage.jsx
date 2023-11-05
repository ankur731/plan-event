import React from 'react'
import Login from '../components/Login/Login'

function LoginPage(props) {
  return (
    <>
      <Login page={props.page} for={props.for}/>
    </>
  )
}

export default LoginPage

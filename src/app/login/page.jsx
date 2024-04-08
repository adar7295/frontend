import React from 'react'
import classes from './login.module.css'

const Login = () => {
  return (
    <div className={classes.backg}>
        <div className={classes.main}>
      <h2 className={classes.login}>Login-Page</h2>
      Name<br/>
      <input type="text" placeholder='Enter your name' /><br/>
      Password<br />
      <input type="password" placeholder='Enter your password' /><br/>
      <button className='btn btn-primary'>Login</button>
     </div>
    </div>
  )
}

export default Login;
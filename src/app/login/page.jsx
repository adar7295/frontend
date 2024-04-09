import React from 'react'
import classes from './login.module.css'

const Login = () => {
  return (
    <div className={classes.backg}>
        <div className={classes.main}>
      <h2 className={classes.login}>Login-Page</h2>
      <label className={classes.mainlabel}>Name</label><br/>
      <input type="text" placeholder='Enter your name' /><br/>
      
      <label className={classes.mainlabel}>Password</label><br />
      <input type="password" placeholder='Enter your password' /><br/>
      <button className={classes.btn}>Login</button><br/>
      <label className={classes.mainlabel}>create new account.Signup</label>
     </div>
    </div>
  )
}

export default Login;
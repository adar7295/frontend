import React from 'react'
import classes from './signup.module.css'

const Signup = () => {
  return (
    <div className={classes.backg}>
      <div className={classes.main}>

      <h2 className={classes.signup}>Signup</h2>
      <label className={classes.mainlabel}>Name</label><br/>
      <input type="text" />
      <label className={classes.mainlabel}>Password</label><br/>
      <input type="password" />
      <label className={classes.mainlabel}>Email</label><br/>
      <input type="Email" />
      <label className={classes.mainlabel}>Contact No.</label><br/>
      <input type="number" />
      <label className={classes.mainlabel}>Address</label><br/>
      <input type="text" />
      <button className={classes.btn}>Signup</button>
      </div>
    </div>
  )
  
}

export default Signup;
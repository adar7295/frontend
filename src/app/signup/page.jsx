'use client'
import React from 'react'
import classes from './signup.module.css'
import { useFormik } from 'formik'


const Signup = () => {

  const signupForm = useFormik({
    initialValues : {
    name : '',
    
    email :'',
    password : '',
    confirmPassword : ''
    
    },
    onSubmit : (values) => {
      console.log(values);//send values to backend
    }

  })
  return (
    <div className={classes.backg}>
      <div className={classes.main}>

      <h2 className={classes.signup}>Signup</h2>
      <form onSubmit={ signupForm.handleSubmit }>

      <label className={classes.mainlabel}>Name</label><br/>
      <input type="text" id='name' onChange={ signupForm.handleChange } value={signupForm.values.name}/>
     
      <label className={classes.mainlabel}>Email</label><br/>
      <input type="Email" id='email' onChange={ signupForm.handleChange } value={signupForm.values.email}/>
      <label className={classes.mainlabel}>Password</label><br/>
      <input type="password" id='password' onChange={ signupForm.handleChange } value={signupForm.values.password}/>
      <label className={classes.mainlabel}>Confirm Password</label><br/>
      <input type="password" id='confirmPassword' onChange={ signupForm.handleChange } value={signupForm.values.confirmPassword}/>
      
      <button className={classes.btn}>Signup</button>
      </form>
      </div>
    </div>
  )

}

export default Signup;
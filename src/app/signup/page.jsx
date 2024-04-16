'use client'
import React from 'react'
import classes from './signup.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name : Yup.string().min(4,'Enter Full Name').required('Name required'),
  email : Yup.string().email('Invalid email').required('Required'),
  password : Yup.string().min(6, 'too short').required('Required'),

});


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
    },
    validationSchema : SignupSchema

  })
  return (
    <div className={classes.backg}>
      <div className={classes.main}>

      <h2 className={classes.signup}>Signup</h2>
      <form onSubmit={ signupForm.handleSubmit }>

      <label className={classes.mainlabel}>Name</label><br/>

      <input type="text" id='name' onChange={ signupForm.handleChange } value={signupForm.values.name}/>
       {signupForm.touched.name && (
        <small className='text-danger'>{signupForm.errors.name}</small>
       )}
      <label className={classes.mainlabel}>Email</label><br/>
      <input type="Email" id='email' onChange={ signupForm.handleChange } value={signupForm.values.email}/>
      {signupForm.touched.email && (
        <small className='text-danger'>{signupForm.errors.email}</small>
       )}
      <label className={classes.mainlabel}>Password</label><br/>
      <input className='form-control' type="password" id='password' onChange={ signupForm.handleChange } value={signupForm.values.password}/>
      {signupForm.touched.password && (
        <small className='text-danger'>{signupForm.errors.password}</small>
       )}
      <label className={classes.mainlabel}>Confirm Password</label><br/>
      <input type="password" id='confirmPassword' onChange={ signupForm.handleChange } value={signupForm.values.confirmPassword}/>
      
      <button type='submit' className={classes.btn}>Signup</button>
      </form>
      </div>
    </div>
  )

}

export default Signup;
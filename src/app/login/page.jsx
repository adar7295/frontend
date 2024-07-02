'use client'
import React from 'react'
import classes from './login.module.css'
import Link from 'next/link';
import { useFormik } from 'formik';
import { IconPassword } from '@tabler/icons-react';
import toast from 'react-hot-toast';


const Login = () => {

  const loginForm = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit :(values) =>{
      console.log(values);
      console.log(200);
    }
  })
  // .then((response) => {
  //   console.log(response.status);
  //   if(response === 200){
  //     toast.success("login success");
  //   }
  //   else{
  //     console.log(response.status)
  //     toast.error('login failed')
  //   }
  // }).catch((err) => {
  //   console.log(err);
  //   toast.error('login failed');
  // });

    return (
    <div className={classes.backg}>
        <form action="">
        <div className={classes.main}>
          
      <h2 className={classes.login}>Login-Page</h2>
      <label className={classes.mainlabel}>Email</label><br/>
      <input id='email' onChange={loginForm.handleChange} value={loginForm.values.email} type="email" placeholder='Enter your email' /><br/>
      
      <label className={classes.mainlabel}>Password</label><br />
      <input id='password' onChange={loginForm.handleChange} value={loginForm.values.password} type="password" placeholder='Enter your password' /><br/>
      <button className={classes.btn} type='submit'>Login</button><br/>
      
      <label className={classes.mainlabel}>create new account.<Link href="/signup">Signup</Link></label>
  
     </div>
     </form>
    </div>
  )
}

export default Login;
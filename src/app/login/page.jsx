'use client'
import React from 'react'
import classes from './login.module.css'
import Link from 'next/link';
import { useFormik } from 'formik';
import { IconPassword } from '@tabler/icons-react';
import toast from 'react-hot-toast';


const Login = () => {

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);

      fetch("http://localhost:5000/user/authenticate/", {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success('Login Successfull')
          } else {

            toast.error('Login Failed')
          }

          return response.json();
        })
        .then((result) => {
          console.log(result);
          localStorage.setItem('token',result.token);
          document.cookie = `token=${result.token}`;
        })
        .catch((err) => {
          console.log(err);
          toast.error('Login Failed');
        });
    }
  })


  return (
    <div className={classes.backg}>
      <form onSubmit={loginForm.handleSubmit}>
        <div className={classes.main}>

          <h2 className={classes.login}>Login-Page</h2>
          <label className={classes.mainlabel}>Email</label><br />
          <input id='email' onChange={loginForm.handleChange} value={loginForm.values.email} type="email" placeholder='Enter your email' /><br />

          <label className={classes.mainlabel}>Password</label><br />
          <input id='password' onChange={loginForm.handleChange} value={loginForm.values.password} type="password" placeholder='Enter your password' /><br />
          <button className={classes.btn} type='submit'>Login</button><br />

          <label className={classes.mainlabel}>create new account.<Link href="/signup">Signup</Link></label>

        </div>
      </form>
    </div>
  )
}

export default Login;
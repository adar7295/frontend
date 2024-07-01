'use client'
import { Formik } from 'formik';
import { useParams } from 'next/navigation';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const UpdateUser = () => {

  const { id } = useParams();

  const [userData, setUserData] =useState(null);

  const fetchUserData = async ()=>{
    const res =await fetch('http://localhost:5000/user/getbyid/'+id);
    console.log(res.status);
  
    const data =await res.json();
    console.log(data);
    setUserData(data);
  }
  useEffect(()=>{
    fetchUserData();
  },[]);

  const submitForm = async (values) => {
    const res = await fetch('http://localhost:5000/user/update/'+id, {
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(values)
    });
    console.log(res.status);
  }

    return (
    <div>
      <div>
      <div className="container mt-5">
      <h2>Update User Information</h2>

      {
      userData !== null ? (
        <Formik initialValues={userData} onSubmit={submitForm}>
               {(userForm) => {return (
                 <form onSubmit={userForm.handleSubmit}>      
                 <div className="form-group">
                   <label htmlFor="name">Name</label>
                   <input
                     type="text"
                     className="form-control"
                     id="name"
                     onChange={userForm.handleChange}
                     value={userForm.values.name}
                     name="name"
                     required
                   />
                 </div>
                 <div className="form-group">
                   <label htmlFor="email">Email</label>
                   <input
                     type="email"
                     className="form-control"
                     id="email"
                     onChange={userForm.handleChange}
                     value={userForm.values.email}
                     name="email"
                    
                     required
                   />
                 </div>
                 <div className="form-group">
                   <label htmlFor="password">Password</label>
                   <input
                     type="password"
                     className="form-control"
                     id="password"
                     onChange={userForm.handleChange}
                     value={userForm.values.password}
                     name="password"
                   
                     required
                   />
                   
                 </div>
                 <button type="submit" className="btn btn-primary mt-4">
                   Update
                 </button>
               </form>
               ) }}
        </Formik>
      ) : (
        <p className='text-muted display-2 text-center'>Loading ....</p>
      )
      }
      
    </div>
    </div>
    </div>
  )
}

export default UpdateUser;
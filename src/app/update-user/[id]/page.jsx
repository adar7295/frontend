'use client'
import { useParams } from 'next/navigation';
import React from 'react'
import { useEffect } from 'react';

const UpdateUser = () => {

  const { id } = useParams();

  const fetchUserData = async ()=>{
    const res =await fetch('http://localhost:5000/user/getbyid/'+id);
    console.log(res.status);
  
    const data =await res.json();
    console.log(data);
  }
  useEffect(()=>{
    fetchUserData();
  },[]);

    return (
    <div>
      <div>
      <div className="container mt-5">
      <h2>Update User Information</h2>
      <form >      
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            
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
            name="password"
          
            required
          />
          
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Update
        </button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default UpdateUser;
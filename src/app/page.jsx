import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
        <h1 style={{ textAlign:'center', fontSize:50 }}>Welcome to Home Page...</h1>

        <img src ="/next.svg" alt="" />
        <hr/><br/><input type="text" />
        <Link href="/login">login</Link>

        <button className='mybtn'>My Button</button>
    </div>
  )
}

export default Home;
'use client'
import React from 'react'

const EventHandling = () => {
  return (
    <div> 
        <h1>EventHandling</h1>
    <hr/>
    <button className='btn btn-primary' onClick={ () => { alert('hurrayyyy...')}}>click-me</button>
    </div>
  )
}

export default EventHandling;
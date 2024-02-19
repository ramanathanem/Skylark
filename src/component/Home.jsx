import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
   
    <div className='image '>
        <div className='image-overlay '>
          <h1 className='text'>Find Your Jobs</h1>
            <h1 className='text mt-5'>The Easiest Way to Get Your New Job</h1>
            <h2 className='text '>We offer 12000 jobs vacation right now</h2>
            <Link to="/form"> <button className='btn btn-danger'>Upload Your CV</button></Link>
            <div className='input-wrrapper container mt-4'>
    <i class="bi bi-search" style={{ color: "royalblue"}} ></i>
    <input className='search' placeholder='search something'></input>
    </div>
    </div>
    </div>
       
  
  )
}

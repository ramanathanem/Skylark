import React from 'react'
import { Link } from 'react-router-dom'
import "./Canditatedetail.css"
import Hr from './Hr'
import { Category } from './Category'
import { Home } from './Home'
import { Jobs } from './Jobs'
import { Resume } from './Resume'
import { Footer } from './Footer'
import { About } from './About'
import { Review } from './Review'
import { Icon } from './Icon'



export const Canditatedetail = () => {
  return (
    <div className='text-center '>
    
     <Home/>
     <Category/>
   
     <Icon/>
    <Jobs/>
    <Resume/>
    
 
    <Review/>
    <Footer/>
</div>
  )
}

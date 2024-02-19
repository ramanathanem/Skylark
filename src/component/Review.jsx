import React from 'react'
import review from "../Images/review.png"
import Carousel from 'react-bootstrap/Carousel';
export const Review = () => {
  return (
    <div className='imagess mt-4'>
        <div className='image-overlayss'>
        <div class="row container me-5">
  <div class="col-12 col-sm-6 col-md-6  ">
  <div class="card mt-4  ">

  <div class="card-body">
    <h5 class="card-title">   <h1 style={{fontFamily:"cursive", color:"orange"}}>Review<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></h1></h5>
    <p class="card-text"> <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
      <div class="col mt-5" style={{fontFamily:"cursive"}}>
   
        I'm very thankful to HR Robinson from Skylark HR Solutions Pvt Ltd. 
        I got selected in one of biggest organisation with really good designation 
        and really good package. He guided me a lot, he was with me from my interview process
         till my joining. I highly recommend Skylark HR Solutions for all your career requirements. Once again thank you Robin.</div>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div class="col mt-5 text-center" style={{fontFamily:"cursive"}}>
      I am very grateful to HR FARZEENa👏 for her support during my interview process. She guided me, updated me, and encouraged on each and every step of the way. Her professionalism and dedication made a huge difference for on me. I am very happy with the opportunity she helped me get.
Skylark HR solutions is a great choice for anyone looking for career guidance and assistance.</div>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel></p>

  </div>
</div>
   </div>
  <div class="col-6 col-md-6 "> <div class="col"><img src={review}/></div>
</div>
        
      
     
      </div></div></div>
    
  )
}

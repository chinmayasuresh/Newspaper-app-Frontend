import React from 'react'
import Nav from './Nav'

const Home = () => {
  return (

    <div>
        <Nav/>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img height="550px" src="https://www.topsubscriptiondeals.com/wp-content/uploads/2021/07/new-with-financial-and-ipad.png" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.prod.website-files.com/6191dc5130687d707cbc32f6/62c6c003e4d2b674f4010c74_toi.webp" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://static.toiimg.com/photo/msid-67487335,imgsize-216942.cms" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



    </div>
  )
}

export default Home
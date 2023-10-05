import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
    <div className='banner-content'>
     <h1 id='banner-title'>We Build Business convert Ideas into softwares</h1>
     <p id='banner-para'>Amet minim mollit non deserunt ullamco est sit dolor do amet sint.Velit officia consequat duis enim velit mollit.</p>
      <img src='man.jpg' id='man-img' alt='man'/>
      <button className='btn btn-outline-secondary banner-bt1'><span><img src='play-button.png' alt='play'/></span>  Demo</button>
      <button className='btn btn-outline-secondary banner-bt2'>Sign up</button>
    </div>
    <img src='zigzag1.png' id='zigzag-img' alt='zigzag'/>
    <img src='analytics.png' id='analytic-img' alt='analytic'/>
    
    <img src='background.png' id='background-img' alt='bg'/>
  

      
    </div>
  )
}

export default Banner

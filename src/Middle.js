import React from 'react'
import Graph from './Graph'
import './Middle.css'

function Middle() {
  return (
    <div className='middle'>
     
     <div className='middleContent'>
        <img src='woman1.jpg' id='woman1' alt='woman'/>
        <div className='graphDiv'>
        <h2 id='graph-title'>Booking history</h2>
        <Graph/>
        </div>
        <button className='btn btn-outline-secondary middle-btn'>Get started</button>
     </div>
     <img src='zigzag4.png' id='zigzag4' alt='zigzag4'/>
     <img src='zigzag2.png' id='zigzag2' alt='zigzag2'/>
    </div>
  )
}

export default Middle

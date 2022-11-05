import React from 'react'
import './feooter.css'
import zuri from "./Image/zuri.png"
import food from "./Image/food.png"


export default function Footer() {
  return (
    <div className='container_footer'>
        <footer>
           <div className='footer_img'> <img src={zuri} /></div>
           <div className='footer_text'>HNG Internship 9 Frontend Task </div>
           <div className='footer_img'> <img src={food} /></div>
           
            
            
            
        </footer>
    </div>
  )
}

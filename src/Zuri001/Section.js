import React from 'react'
import './Section.css'

export default function Section({section_input}) {
  return (
    <div class="container section">
        
       <div >
           <h4 className='section_text'>{section_input}</h4>
           {/* <Icon/> */}
       </div>
    </div>
  )
}

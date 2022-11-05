import React from 'react'
import slack from "./Image/slack.png"
import git from "./Image/git.png"
import "./section_icon.css"


export default function SectionIcon() {
  return (
    <div className='container section_icon '>
        <div>
           <a href="">
             <img className='section_image' src={slack}/>
          </a>
          </div>
        <div>
        <a href="https://github.com/OkeKolawoleSunday009">
           <img className='section_image' src={git}/>
         </a>  
           </div>


    </div>
  )
}

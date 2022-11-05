import React from 'react';
import Section from './Section';
import {Link} from 'react-router-dom';
import Headeer from "./Headeer.js";



export default function Section_comp() {
  return (
    <div>
           <Headeer/>

        <a href="https://twitter.com/OkekolawoleSun3">
         <Section section_input="Twitter Link"/>
         
      </a>
      <a href="http://trainng.zuri.team">
         <Section section_input="Zuri Team"/>
      </a>
      <a href="https://books.zuri.team">

         <Section section_input="Zuri Books"/>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>/">

        <Section section_input="Python Books"/>
      </a>
      <a href="https://background.zuri.team//">

         <Section section_input="Background Check for Coders"/>
       </a>
      <a href="https://training.zuri.team/">

         <Section section_input="Design Books"/>
      </a>
      <Link to ={`/Contact`} >
        
      <Section section_input="Contact Me"/>
       
        </Link>

      

      
    </div>
  )
}

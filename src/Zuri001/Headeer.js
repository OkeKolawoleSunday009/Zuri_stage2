import './Header.css'
import React from 'react'
import forward from "./Image/forward.png"
import mobile from "./Image/mobile.png"
import profile from "./Image/profile.png"


export default function Headeer() {
  return (
    <div class="container">
       <div class="center_item " id='item_forward' >
          <div id="profile_img"> <img src={profile} /></div>
          <div id="profile_forward"> <img src={forward} /></div>
          <div id="profile_dot" ><img src={mobile} /></div>

           
          </div>
       <div class="center_item" id="twitter"><h3>Annette  Black</h3></div>

    </div>
  )
}

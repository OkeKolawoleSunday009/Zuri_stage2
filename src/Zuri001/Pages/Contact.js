import React from 'react'
import './Flask.css'

export default function Contact() {
  return (
    <div className='Flask'>
        <div className='sub__flask'>
           <div className="title"><h1>Contact Me</h1></div>
            <div><p>Hi Dear contact me about anything you have in mind</p></div>

            <form action='post'>

              <div className='fullname'>
                <div className='name'>
                <label for="firstname">
                    First Name
                </label>
                <input type="text" id='firstname' className='inputtext' required/>
                </div>

                <div className='name'>
                    
                <label for="lastname">
                    Last Name
                </label>
                <input type="text" id='lastname' className='inputtext' required/>


                </div>
             

              </div>

                <label for="email">
                    Email
                </label>
                <input type="text" id='email' className='inputtext2' required/>

                <label for="message">
                    Message
                </label>
                <input type="text-area" id='message' className='inputtext3' required/>
                
                <div className='check'>
                    
              
                <input type="radio" id='check' required />
                <p>
                    You agree to your data the name, who may contact you
                </p>
                
                </div>


                <input type="submit"  className='submit'/>

                
            </form>

        </div>


    </div>
  )
}

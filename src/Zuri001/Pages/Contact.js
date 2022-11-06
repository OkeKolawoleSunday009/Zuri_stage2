import React from 'react'
import './Flask.css'

export default function Contact() {
  return (
    <div className='Flask'>
        <div className='sub__flask'>
           <div className="title"><h1>Contact Me</h1></div>
            <div><p>Hi there contact me about anything you have in mind</p></div>

            <form action='post'>

              <div className='fullname'>
                <div className='name'>
                <label for="firstname">
                    First Name
                </label>
                <input type="text" id='firstname' className='inputtext' placeholder='Enter your first name' required/>
                </div>

                <div className='name'>
                    
                <label for="lastname">
                    Last Name
                </label>
                <input type="text" id='lastname' className='inputtext' placeholder='Enter your last name' required/>


                </div>
             

              </div>

                <label for="email">
                    Email
                </label>
                <input type="text" id='email' className='inputtext2' placeholder='yourname@gmail.com' required/>

                <label for="message">
                    Message
                </label>
                <input type="text-area" id='message' className='inputtext3' placeholder="Send me a message and i'll reply you as soon as possible" required/>
                
                <div className='check'>
                    
              
                <input type="checkbox" id='check' required />
                <p className='check_paragraph'>
                    You agree to your data to the name, who may contact you.
                </p>
                
                </div>


                <input type="submit"  className='submit'/>

                
            </form>

        </div>


    </div>
  )
}

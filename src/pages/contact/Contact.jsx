import React from 'react'
import '../contact/contact.scss'

const Contact = () => {
    function handleSubmit(e) {
        e.preventDefault();
        alert("Message Sent")
    }
  return (
    <div className="contact">
        <form onSubmit={handleSubmit}>
            <div className='title'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>

            <div className="names">
                <div className="firstname">
                    <label>First name</label> <br />
                    <input type="text" placeholder='Enter your first name' id='first_name' required/>
                    </div>
                <div className="lastname">
                    <label>Last name</label> <br />
                    <input type="text" placeholder='Enter your last name' id='last_name' required/>
                </div>
            </div>

            <div className="allemail">
                <label>Email</label>
                <input type="email" placeholder='youremail@email.com' id='email' required/>
            </div>

            <div className="allmessage">
                <label>Message</label>
                <textarea name="" id="message" cols="30" rows="10" placeholder='Send me a message and I will reply you as soon as possible...' required></textarea>
            </div>

            <div className="checkbox">
                <input type="checkbox" required/> 
                <p>You agree to providing your data to Adeleke who may contact you</p>
            </div>

            <div className="allbutton">
            <button type='submit' id='btn__submit'>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default Contact
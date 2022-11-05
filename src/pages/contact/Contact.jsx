import React from 'react'
import '../contact/contact.scss'

const Contact = () => {
  return (
    <div className="contact">
        <form>
            <div className='title'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>

            <div className="names">
                <div className="firstname">
                    <label>First name</label> <br />
                    <input type="text" placeholder='Enter your first name' id='first_name'/>
                    </div>
                <div className="lastname">
                    <label>Last name</label> <br />
                    <input type="text" placeholder='Enter your last name' id='last_name'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contact
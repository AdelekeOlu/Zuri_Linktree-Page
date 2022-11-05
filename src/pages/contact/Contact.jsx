import React from 'react'
import { useState } from 'react';
import '../contact/contact.scss'

const Contact = () => {
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [message, setMessage]=useState('');
    const [email, setEmail]=useState('');
    const [error, setError]=useState(false);
    const [change, setChange] = useState(true);
    function buttonHandler(){
        setChange(!change);
    }
    let handleSubmit=(e)=> {
        e.preventDefault();
        // alert("Message Sent");
        if(firstName.length==0||message.length==0){
            setError(true)
        }
    }
  return (
    <div className="contact">
        <form onSubmit={handleSubmit}>
            <div className='title'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>

            <div className="allnames">
                <div className="name">
                    <label>First name</label> <br />
                    <input type="text" name='' placeholder='Enter your first name' id='first_name' onChange={e=>setFirstName(e.target.value)}/>
                    {error&&firstName.length<=0?
                    <p className='error'>Please type in your name</p>:""}
                    </div>
                <div className="name">
                    <label>Last name</label> <br />
                    <input type="text" name='lastname' placeholder='Enter your last name' id='last_name' onChange={e=>setLastName(e.target.value)}/>
                    {error&&lastName.length<=0?
                    <p className='error'>Please type in your surname</p>:""}
                </div>
            </div>

            <div className="allemail">
                <label>Email</label>
                <input type="email" placeholder='youremail@email.com' id='email' 
                onChange={e=>setEmail(e.target.value)}/>
                {error&&email.length<=0?
                <p className='error'>Please type in your email</p>:""}
            </div>

            <div className="allmessage">
                <label>Message</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Send me a message and I will reply you as soon as possible...' onChange={e=>setMessage(e.target.value)}></textarea>
                {error&&message.length<=0?
                <p className='error'>Please enter a message</p>:""}
                    
            </div>

            <div className="checkbox">
                <input type="checkbox" onChange={buttonHandler}/> 
                <p>You agree to providing your data to Adeleke who may contact you</p>
            </div>

            <div className="allbutton">
            <button type='submit' disabled={change} id='btn__submit'>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default Contact
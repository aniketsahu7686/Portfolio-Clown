import React from 'react'
import "./FormStyle.css"
const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text"></input>

            <label>Email</label>
            <input type="email"></input>

            <label>Subject</label>
            <input type="text"></input>

            <label>Message</label>
            <textarea row="6" placeholder="Ttpe your message here" ></textarea>

            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form
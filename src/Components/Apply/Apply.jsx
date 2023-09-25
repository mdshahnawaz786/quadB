import React from 'react'
import './apply.css'
import { useNavigate } from 'react-router-dom'


const Apply = () => {
    const navigate = useNavigate()
  return (
    <div className='apply'>
      
        <div className="formContainer">
        <h2>Job Application Form</h2>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="text" />
        <label>Cover letter Note:</label>
        <textarea name="" id="" cols="10" rows="5"></textarea>
        <label >Resume Link: </label>
        <input type="text" />
        <button onClick={()=>{
            navigate("/success")
        }}>Submit</button>
        </div>
    </div>
  )
}

export default Apply
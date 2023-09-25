import React from 'react'
import './nav.css'
import { useNavigate } from 'react-router-dom'


const Nav = () => {
    const navigate = useNavigate()
  return (
    <div className='nav'>
        <button className='logoutBtn' onClick={()=>{
          // localStorage.clear()
            localStorage.setItem("isLogin" , JSON.stringify(false))
            
            navigate('/login')
            window.location.reload()
        }}>Logout</button>
    </div>
  )
}

export default Nav
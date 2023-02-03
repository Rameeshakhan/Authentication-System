import React from 'react'
import {useNavigate} from "react-router-dom"

const Landing = () => {
    const navigate = useNavigate()

    const handleBtn = () => {
        navigate("/signup");
    }
  return (
    <div className='container'>
        <button className='btn btn-primary mt-7' onClick={handleBtn}>Sign Up here</button>
    </div>
  )
}

export default Landing
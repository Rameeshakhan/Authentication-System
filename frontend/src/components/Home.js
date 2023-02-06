import React from 'react'
import {useNavigate} from "react-router-dom"


const Home = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        navigate("/");

    }
  return (
    <div>
        Welcome to home Page, you are logged in. Wanna Sign out?
        <button className='btn btn-primary' onClick={handleSignOut}>Sign out</button>
    </div>
  )
}

export default Home
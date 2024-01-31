import React, { useState } from 'react'

import { BG_URL } from '../Utils/constants'
import Header from './Header'

function Login() {
  const [isSignIn,setIsSignIn]=useState(true);
  const toggleSignIn = () =>{
    setIsSignIn(!isSignIn)

  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt='bg' />
      </div>
      <form className="absolute w-3/12 p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-xl py-2">{isSignIn?"Sign In":"Sign Up"}</h1>
        {!isSignIn && (<input type='text' placeholder='Full Name' className="p-4 my-3 w-full bg-gray-700" />)}
        <input type='text' placeholder='Email Address' className="p-4 my-3 w-full bg-gray-700" />
        <input type='password' placeholder='Password' className="p-4 my-3 w-full bg-gray-700" />
        <button className="p-2 my-2 bg-red-700 w-full rounded-lg ">{isSignIn?"Sign In" :"Sign Up"}</button>
        <p className="py4  cursor-pointer"onClick={toggleSignIn}>{isSignIn? "New to Netflix ? sign Up Now": "If You Have Account ? Sign In"}</p>
      </form>



    </div>
  )
}

export default Login

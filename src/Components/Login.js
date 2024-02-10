import React, { useState, useRef } from 'react'
import { checkValidDataEmail, checkValidDataPassword } from '../Utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';

import { BG_URL } from '../Utils/constants'
import Header from './Header'

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMessage1, setErrorMessage1] = useState(null);




  const toggleSignIn = () => {
    setIsSignIn(!isSignIn)



  }
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const signInButton = () => {
    const message = checkValidDataEmail(email.current.value);
    const message1 = checkValidDataPassword(password.current.value);
    setErrorMessage(message);
    setErrorMessage1(message1)
    if (message) return;
    if (message1) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value, name.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });


          console.log(user);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage)
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...

          console.log(user)

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    }

  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt='bg' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg">

        <h1 className="font-bold text-xl py-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (<input type='text' placeholder='Full Name' className="p-4 my-3 w-full bg-gray-700" />)}
        <input ref={email} type='text' placeholder='Email Address' className="p-4 my-3 w-full bg-gray-700" />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <input ref={password} type='password' placeholder='Password' className="p-4 my-3 w-full bg-gray-700" />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage1}</p>
        <button className="p-2 my-2 bg-red-700 w-full rounded-lg " onClick={signInButton}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className="py4  cursor-pointer" onClick={toggleSignIn}>{isSignIn ? "New to Netflix ? sign Up Now" : "If You Have Account ? Sign In"}</p>
      </form>



    </div>
  )
}

export default Login

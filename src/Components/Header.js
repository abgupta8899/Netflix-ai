import React, { useEffect } from 'react'
import { LOGO, userIcon } from '../Utils/constants'
import { auth } from '../Utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,

          })
        );
        navigate('/browser');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt='logo' />
      {
        user && (
          <div className="flex p-2">
            <img
              className=" w-12 h-12"
              alt="userIcon"
              src={userIcon}
            />
            <button onClick={handleSignout} className="font-bold text-white ">
              (Sign Out)
            </button>
          </div>
        )
      }


    </div>
  )
};

export default Header

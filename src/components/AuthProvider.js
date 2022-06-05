import React,{useEffect} from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth, userExists } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

export default function AuthProvider({children, onUserLoggedIn, onUserNotLoggedIn,onUserNotRegistered}) {

    const navigate = useNavigate();

    useEffect(()=>{
        onAuthStateChanged(auth,async(user)=>{
        if(user){
            const isRegistered = await userExists(user.uid);
            if(isRegistered){
                onUserLoggedIn(user);
            }else{
                onUserNotRegistered(user);
            }
        }else{
            onUserNotLoggedIn(user);
        }
        });
    },[navigate,onUserLoggedIn,onUserNotRegistered,onUserNotLoggedIn])

  return (
    <div>{children}</div>
  )
}
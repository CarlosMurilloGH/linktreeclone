import React from 'react';
import AuthProvider from '../components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { logout } from '../firebase/firebase';

export default function SignOutView() {

  const navigate = useNavigate();


  async function handleUserLoggedIn(user){
    await logout();
  }
  
  function handleUserNotRegistered(user){
    navigate("/login");
  }
  
  function handleUserNotLoggedIn(){
    navigate("/login");
  }

  return (
    <AuthProvider onUserLoggedIn={handleUserLoggedIn} onUserNotRegistered={handleUserNotRegistered} onUserNotLoggedIn={handleUserNotLoggedIn}>

    </AuthProvider>
  )
}


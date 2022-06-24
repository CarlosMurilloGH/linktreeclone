import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import  AuthProvider from "../components/AuthProvider";

import style from "./LoginView.module.css"

export default function LoginView() {

  const navigate = useNavigate();

  // const [currentUser,setCurrentUser]=useState(null);

  /*state
  0:inicializado
  1:loading
  2:login completo
  3:login pero sin registro
  4:no hay nadie logeado
  5:ya existe el username
  6:nuevo username, click para continuar
  7:user no existe
  */

  const [state,setCurrentState]=useState(0);

  // useEffect(()=>{
  //   setCurrentState(1)
  //   onAuthStateChanged(auth,async(user)=>{
  //     if(user){
  //       const isRegistered = await userExists(user.uid);
  //       if(isRegistered){
  //         //redirigir a dashboard
  //         navigate("/dashboard");
  //         setCurrentState(2);
  //       }else{
  //         //redirigir a choose username
  //         navigate("/choose-username");
  //         setCurrentState(3);
  //       }
  //     }else{
  //       setCurrentState(4);
  //       console.log("no hay nadie autenticado")
  //     }
  //   });
  // },[navigate]);

  async function handleOnClick(){
    const googleProvider= new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    async function signInWithGoogle(googleProvider){
      try {
        const res = await signInWithPopup(auth,googleProvider)
        console.log(res);
      } catch (error) {
        console.error(error)
      }
    }
  }

function handleUserLoggedIn(user){
  navigate("/dashboard")
}

function handleUserNotRegistered(user){
  navigate("/choose-username")
}

function handleUserNotLoggedIn(){
  setCurrentState(4);
}

  // if (state ===2){
  //   return <div>Estas autenticado y registrado</div>
  // }

  // if (state ===3){
  //   return <div>Estas autenticado pero no registrado</div>
  // }
  if (state ===4){
    return <div className={style.logincontainer} >
      <div className={style.LoginView}>
        <h1>Log in with Google</h1>
        <button className={style.provider} onClick={handleOnClick}>Login with Google</button>
      </div>
  </div>
  }

  if (state ===5){
    return <div>
    <button onClick={handleOnClick}>Login with Google</button>
  </div>
  }


  return (
    <AuthProvider onUserLoggedIn={handleUserLoggedIn} onUserNotRegistered={handleUserNotRegistered} onUserNotLoggedIn={handleUserNotLoggedIn}>
      <div className={style.loading}>
        Loading...
      </div>
    </AuthProvider>
  )
}


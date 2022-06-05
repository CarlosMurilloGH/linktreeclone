import React,{useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import AuthProvider from '../components/AuthProvider'
import { existsUsername, updateUser } from '../firebase/firebase';

export default function ChooseUsernameView() {

  const navigate = useNavigate();
  const [state,setState]=useState(0);
  const [currentUser,setCurrentUser]=useState({});
  const [username,setUsername]=useState();

  function handleUserLoggedIn(user){
    navigate("/dashboard");
  }

  function handleUserNotRegistered(user){
    setCurrentUser(user);
    setState(3);
  }

  function handleUserNotLoggedIn(){
    navigate("/login")
  }

  function handleInputUsername(e){
    setUsername(e.target.value);
  }

  async function handleContinue(){
    if(username !== ""){
      const exist = await existsUsername(username);
      if(exist){
        setState(5);
      }else{
        const tmp={...currentUser};
        tmp.username= username;
        tmp.processCompleted = true;
        await updateUser(tmp);
        setState(6);
      }
    }
  }

  if(state=== 3 || state === 5){
    return <div>
      <h1>Bienvenido {currentUser.displayName}</h1>
      <p>Escoge un nombre de usuario</p>
      {state === 5? <p>El nombre de usuario ya existe</p> : ""}
      <input onChange={handleInputUsername}/>
      <button onClick={handleContinue}>Continua</button>
    </div>
  }

  if(state === 6){
    return <div>
      <p>Felicidades,ya puedes ir al dashboard</p>
      <Link to="/dashboard">Continuar</Link>
    </div>
  }

  return (
    <AuthProvider onUserLoggedIn={handleUserLoggedIn} onUserNotRegistered={handleUserNotRegistered} onUserNotLoggedIn={handleUserNotLoggedIn}>

    </AuthProvider>
  )
}


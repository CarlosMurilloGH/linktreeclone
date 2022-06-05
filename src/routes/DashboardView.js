import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import  AuthProvider from "../components/AuthProvider";
import DashboardWrapper from '../components/DashboardWrapper';

export default function DashboardView() {

  const navigate = useNavigate();
  const [currentUser,setCurrentUser]=useState({});
  const [state,setState]=useState(0);

  function handleUserLoggedIn(user){
    setCurrentUser(user);
    setState(2);
  }
  
  function handleUserNotRegistered(user){
    navigate("/login");
  }
  
  function handleUserNotLoggedIn(){
    navigate("/login");
  }

  if(state === 0){
    return (
      <AuthProvider onUserLoggedIn={handleUserLoggedIn} onUserNotRegistered={handleUserNotRegistered} onUserNotLoggedIn={handleUserNotLoggedIn}>
        Loading...
      </AuthProvider>
    )
  }

  return(
    <DashboardWrapper>
      <div>
        <h1>Dashboard</h1>
        <form>
          <label htmlFor='title'>Title</label>
          <input name="title"/>

          <label htmlFor='url'>Url</label>
          <input name="title"/>

          <label htmlFor='title'>Title</label>
          <input name="url"/>

          <input type="submit" value="Create new link" />
        </form>
      </div>
    </DashboardWrapper>
  )


}


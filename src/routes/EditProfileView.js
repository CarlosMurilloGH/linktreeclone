import React,{useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardWrapper from '../components/DashboardWrapper';
import AuthProvider from '../components/AuthProvider';
import { getProfilePhotoUrl, setUserProfilephoto, updateUser } from '../firebase/firebase';
import style from "./EditProfileView.module.css";

export default function EditProfileView() {

  const navigate = useNavigate();
  const [currentUser,setCurrentUser]=useState({});
  const [state,setState]=useState(0);
  const [profileUrl,setProfileUrl]= useState(null);
  
  const fileRef=useRef(null);

  async function handleUserLoggedIn(user){
    setCurrentUser(user);
    const url= await getProfilePhotoUrl(user.profilePicture);
    setProfileUrl(url);
    setState(2);
  }
  
  function handleUserNotRegistered(user){
    navigate("/login");
  }
  
  function handleUserNotLoggedIn(){
    navigate("/login");
  }

  function handleOpenFilePicker(){
    if(fileRef.current){
      fileRef.current.click();
    }
  }

  function handleChangeFile(e){
    const files = e.target.files;
    const fileReader = new FileReader();

    if(fileReader && files && files.length > 0){
      fileReader.readAsArrayBuffer(files[0]);
      fileReader.onload = async function(){
        const imageData = fileReader.result;

        const res = await setUserProfilephoto(currentUser.uid, imageData);
        if(res){
          const tmpUser = {...currentUser};
          tmpUser.profilePicture = res.metadata.fullPath;
          await updateUser(tmpUser);
          setCurrentUser({...tmpUser});
          const url = await getProfilePhotoUrl(currentUser.profilePicture);
          setProfileUrl(url);
        }
      }
    }
  }

  if(state !== 2){
    return(
      <AuthProvider onUserLoggedIn={handleUserLoggedIn} onUserNotRegistered={handleUserNotRegistered} onUserNotLoggedIn={handleUserNotLoggedIn}>
      </AuthProvider>
    )
  }

  return (
      <DashboardWrapper>
        <div className={style.editprofilecontainer}>
          <div className={style.editprofilebox}>
            <h2>Edit profile info</h2>
            <div className={style.profilePictureContainer}>
              <div>
                <img src={profileUrl} alt="" width={100} />
              </div>
              <div>
                <button onClick={handleOpenFilePicker}className="btn" >Choose profile picture</button>
                <input ref={fileRef} type="file" className={style.fileInput}  onChange={handleChangeFile} />
              </div>
            </div>
          </div>
        </div>
      </DashboardWrapper>
  )
}


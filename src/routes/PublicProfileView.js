import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import PublicLink from '../components/PublicLink';
import { existsUsername, getProfilePhotoUrl, getUserPublicProfileInfo } from '../firebase/firebase';

import style from "./PublicProfileView.module.css";
import styleLinks from "../components/PublicLinks.module.css"

export default function PublicProfileView() {

  const params=useParams();
  const [profile,setProfile]=useState(null);
  const [url,setUrl]=useState("");
  const [state,setState]=useState(0);

  useEffect(()=>{

    getProfile();

    async function getProfile(){
      const username = params.username;

    try {
      const userUid = await existsUsername(username);

      if(userUid){
        const userInfo = await getUserPublicProfileInfo(userUid);
        setProfile(userInfo);

        const url = await getProfilePhotoUrl(userInfo.profileInfo.profilePicture);
        setUrl(url);
      }else{
        setState(7);
      }

    } catch (error) {
      
    }
    }
  },[params])

  if(state === 7){
    return <div>
      <h1>Username doesnt exist</h1>
    </div>
  }

  return (
    <div className={style.publicprofilecontainer}>
      <div className={style.profileContainer}>
        <div className={style.profilePicture}>
          <img src={url} alt="profilepicture" />
        </div>
        <div>
          <h1 className={style.profilename}>{profile?.profileInfo.username}</h1>
          <p>{profile?.profileInfo.displayname}</p>
          <div className={styleLinks.PublicLinksContainer}>
            {profile?.linksInfo.map((link)=>(
              <PublicLink key={link.docId} url={link.url} title={link.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


import React from "react";
import style from "./App.module.css";

import customize from "./media/customize-your-bio-link.png";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Navbar>
      <div className={style.herocontainer} >
        <div className={style.heroinfo}>
          <div>
            <h1 className={style.title}>
            <span>Everything you are.</span><br></br>
            <span>In one simple link.</span>
            </h1>

            <div className={style.paragraph}>
              <p>Join 25M+ people and share everything you create, curate and sell online.</p>
              <p>All from the one link in bio.</p>
            </div>
          </div>
          <div>
            <button className={style.mainbutton}>Sign Up</button>
          </div>
        </div>
        
        <div className="righthero">
          <img style={{width:"23vw"}} src={customize} alt="customize your bio" />
        </div>
      </div>


      <div className={style.firstcta}>
        <div>
          <img style={{width:"23vw"}} src={customize} alt="customize your bio" />
        </div>
        <div className={style.infotext}>
          <h2 className={style.titlefirstcta}>
            Create and customize your bio link in minutes
          </h2>
          <p className={style.paragraphfirstcta}>
            Connect your socials, website, store, videos, music, podcast, events and more. 
            It all comes together in a link in bio landing page designed to convert.
          </p>
          <button className={style.secondarybutton}>Get started for free</button>
        </div>
      </div>


      <div className={style.secondcta}>
        <div className={style.infotext}>
          <h2 className={style.titlesecondcta}>
            Share your Linktree anywhere you like!
          </h2>
          <p className={style.paragraphsecondcta}>
            Add your unique Linktree URL to all the platforms and places you find your audience. 
            Then use your QR code to drive your offline traffic online.
          </p>
          <button className={style.mainbutton}>Get started for free</button>
        </div>
        <div>
          <img style={{width:"23vw"}} src={customize} alt="customize your bio" />
        </div>
      </div>
    </Navbar>
  );
}

export default App;

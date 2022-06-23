import React from "react";
import style from "./App.module.css";

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
          <p>aca va la imagen</p>
        </div>
      </div>
    </Navbar>
  );
}

export default App;

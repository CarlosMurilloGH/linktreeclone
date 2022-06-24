import React from 'react';
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom';

function Navbar({children}) {
  return (
    <div>
    <nav className={style.nav}>
        <div>
            <p className={style.logo}>Linktree Clone</p>
        </div>
        <Link to="/dashboard">Log In</Link>
    </nav>
    <div className='main-container'>
        {children}
    </div>
</div>
  )
}

export default Navbar
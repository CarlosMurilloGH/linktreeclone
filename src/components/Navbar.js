import React from 'react';
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom';

function Navbar({children}) {
  return (
    <div>
    <nav className={style.nav}>
        <div>
            <p className={style.logo}>LOGO</p>
        </div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Home</Link>
    </nav>
    <div className='main-container'>
        {children}
    </div>
</div>
  )
}

export default Navbar
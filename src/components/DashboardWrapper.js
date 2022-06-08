import React from 'react';
import { Link } from 'react-router-dom';

import style from "./DashboardWrapper.module.css"

export default function DashboardWrapper({children}) {
  return (
    <div>
        <nav className={style.nav}>
            <div className={style.logo}>
                <p>LOGO</p>
            </div>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/signout">Signout</Link>
        </nav>
        <div className='main-container'>
            {children}
        </div>
    </div>
  )
}

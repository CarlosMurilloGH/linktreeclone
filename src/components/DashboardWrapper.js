import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardWrapper({children}) {
  return (
    <div>
        <nav>
            <div>
                <p>LOGO</p>
            </div>
            <Link to="/dashboard">Links</Link>
            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/signout">Signout</Link>
        </nav>
        <div>
            {children}
        </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './SideNav.css'

const SideNav = () => {
  return (
    <nav className="SideNav-container">
      <ul className="full-width flex-row-centered">
        <li className="full-width flex-row-centered"><Link to="/dashboard" id="dashboard-link" className="full-width flex-row-centered"><i className="fas fa-chart-pie full-width"></i></Link></li>
      </ul>
    </nav>
  )
}

export default SideNav
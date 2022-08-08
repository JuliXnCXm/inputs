import React from 'react'
import logo from '../assets/devchallenges.png'

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <img src={logo} alt="" />
        <div className="sidebar-logo__title">
          <h4 id="dev">Dev</h4>
          <h4>challenges.io</h4>
        </div>
      </div>
      <ul>
        <li>Typography</li>
        <li>Grid</li>
        <li>Buttons</li>
        <li><strong>Inputs</strong></li>
      </ul>
    </div>
  );
}

export default SideBar
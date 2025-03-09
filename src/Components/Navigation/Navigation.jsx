import React from 'react';
import logo  from '../../../public/images/logo.png';
import styles from  "./Navigation.module.css" ;

const Navigation = () => {
  return (
    <nav className = {`${styles.navigtion } container`}>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>
    </nav>
  )
}

export default Navigation

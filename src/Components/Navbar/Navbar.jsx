import React from 'react';
import Styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={Styles.navBar}>
    <h1>Star Match</h1>
    <h2>Instructions</h2>
    <h3>Pick 1 or more numbers that sum to the number of stars</h3>
    </div>
    )
}

export default Navbar
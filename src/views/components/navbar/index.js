import React from 'react';
import './index.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar__links'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/create-posts'>Post new job</NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

import React from 'react';
import './index.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/create-posts'>Post new job</NavLink>
      </div>
    </nav>
  );
};
export default Navbar;

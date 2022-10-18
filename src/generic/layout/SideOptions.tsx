import React from 'react';
import './side-options.css';
import { NavLink } from 'react-router-dom';

const SideOptions = () => {
  return (
    <div className="side-options">
      <NavLink className="option login" to="/login" end>
        Login
      </NavLink>
      <NavLink className="option" to="/register" end>
        Register
      </NavLink>
    </div>
  );
};

export default SideOptions;

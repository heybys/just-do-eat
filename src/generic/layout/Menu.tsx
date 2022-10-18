import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <NavLink className="item" to="/site" end>
          Site
        </NavLink>
      </li>
      <li>
        <NavLink className="item" to="/about" end>
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="item" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;

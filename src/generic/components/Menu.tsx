import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul style={{ display: 'flex', gap: 32 }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/nothing-here">Nothing Here</Link>
      </li>
    </ul>
  );
};

export default Menu;

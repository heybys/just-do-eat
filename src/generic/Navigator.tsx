import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './components/Logo';

const Navigator = () => {
  return (
    <nav
      className="navigator"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 32px'
      }}
    >
      <Logo />
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
      <Link to="/login" style={{ padding: 16 }}>
        Login
      </Link>
    </nav>
  );
};

export default Navigator;

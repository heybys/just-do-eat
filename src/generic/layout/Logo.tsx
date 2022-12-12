import React from 'react';
import './logo.css';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="logo"
      onClick={() => {
        navigate('/main');
      }}
    >
      <img className="image" src={'/cooking.png'} alt={''} />
      <span className="text">JUST DO EAT</span>
    </div>
  );
};

export default Logo;

import React from 'react';

const Logo = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        fontSize: 24,
        fontWeight: 700
      }}
    >
      <img src={'/cooking.png'} alt={''} width={64} />
      Food Memories
    </div>
  );
};

export default Logo;

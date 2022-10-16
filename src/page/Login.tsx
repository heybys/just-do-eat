import React from 'react';

const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        padding: 128
      }}
    >
      <div style={{ fontSize: 48, fontWeight: 700 }}>로그인</div>
      <input style={{ width: 256, height: 36 }} value={'id'} />
      <input style={{ width: 256, height: 36 }} value={'password'} />
      <button
        style={{
          width: 256,
          height: 36,
          background: 'skyblue',
          color: 'white',
          border: 0,
          outline: 0
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default Login;

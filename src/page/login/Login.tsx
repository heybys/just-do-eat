import React, { useEffect, useState } from 'react';
import './login.css';
import LoginService from './login.service';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const loginService = new LoginService();

  const onClickLoginButton = async () => {
    if (username && password) {
      await loginService.login(username, password);
    } else {
      alert('id, password empty.');
    }
  };

  return (
    <div className="login flex-column-center">
      <div className="paper flex-column-center">
        <div className="title">로그인</div>
        <div className="form flex-column-center">
          <div className="input-container flex-column-center">
            <input
              className="input"
              placeholder={'ID'}
              value={username}
              autoFocus={true}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              className="input"
              placeholder={'PASSWORD'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="button-container flex-column-center">
            <button className="button" onClick={onClickLoginButton}>
              레쯔기릿
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

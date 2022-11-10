import React, {useState} from 'react';
import './login.css';
import {authService} from '../service/authService';
import {LoginInfo, LoginInfoDefault} from '../model/auth.model';
import PasswordInput from "../component/PasswordInput";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>(LoginInfoDefault);

  const onClickLoginButton = async () => {
    const { username, password } = loginInfo;

    if (username && password) {
      await authService.login(loginInfo);
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
              placeholder={'Username'}
              value={loginInfo.username}
              autoFocus={true}
              onChange={(event) => setLoginInfo({ ...loginInfo, username: event.target.value })}
            />
            <PasswordInput
              className="input"
              placeholder={'Password'}
              value={loginInfo.password}
              onChange={(event) => setLoginInfo({ ...loginInfo, password: event.target.value })}
            />
          </div>
          <div className="button-container flex-column-center">
            <button
              className="button"
              onClick={onClickLoginButton}
              disabled={!loginInfo.username || !loginInfo.password}
            >
              레쯔기릿
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

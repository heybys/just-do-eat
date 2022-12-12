import React, { useState } from 'react';
import './login.css';
import { authService } from '../service/authService';
import { LoginInfo, LoginInfoDefault } from '../model/auth.model';
import PasswordInput from '../component/PasswordInput';
import { IoArrowForward } from 'react-icons/io5';
import { Toast } from 'react-bootstrap';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>(LoginInfoDefault);
  const [showToast, setShowToast] = useState(false);

  const postMessageOnToast = (message: string, variant = 'success', delayInSeconds = 3) => {
    setShowToast(true);
  };

  const onClickLoginButton = async () => {
    const { username, password } = loginInfo;

    if (username && password) {
      try {
        await authService.login(loginInfo);
      } catch (e) {
        postMessageOnToast('message');
      }
    } else {
      alert('id, password empty.');
    }
  };

  return (
    <div className="login flex-column-center">
      <div className="paper flex-column-center">
        <div className="title">Login</div>
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
              <IoArrowForward className="icon" />
            </button>
          </div>
        </div>
      </div>
      <Toast show={showToast} autohide onClose={() => setShowToast(false)}>
        <Toast.Header>
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </div>
  );
};

export default Login;

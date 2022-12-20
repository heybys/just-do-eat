import React, { FormEvent, useState } from 'react';
import './login.css';
import { authService } from '../service/auth.service';
import { LoginInfo, LoginInfoDefault } from '../service/model/auth.model';
import PasswordInput from '../component/PasswordInput';
import { IoAlertCircleSharp, IoArrowForward } from 'react-icons/io5';
import { Toast, ToastContainer } from 'react-bootstrap';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>(LoginInfoDefault);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      await authService.login(loginInfo);
      window.location.href = '/';
    } catch (e) {
      setShow(true);
    } finally {
      setLoading(false);
    }
  };

  const onCloseToast = () => setShow(false);

  return (
    <div className="login flex-column-center">
      <div className="paper flex-column-center">
        <div className="title">Login</div>
        <form className="form flex-column-center" onSubmit={onSubmit}>
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
            <button className="button" type="submit" disabled={loading || !loginInfo.username || !loginInfo.password}>
              {loading ? <AiOutlineLoading3Quarters className="icon spinner" /> : <IoArrowForward className="icon" />}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position={'bottom-end'}>
        <Toast show={show} delay={2000} onClose={onCloseToast} autohide>
          <Toast.Header>
            <IoAlertCircleSharp className="rounded me-2 icon" />
            <strong className="me-auto">Failure</strong>
          </Toast.Header>
          <Toast.Body>Your username or password may be incorrect.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Login;

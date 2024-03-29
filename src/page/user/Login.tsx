import React, { FormEvent, useState } from 'react';
import './login.css';
import PasswordInput from './component/PasswordInput';
import { IoAlertCircleSharp, IoArrowForward } from 'react-icons/io5';
import { Toast, ToastContainer } from 'react-bootstrap';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { AxiosBasicCredentials } from 'axios';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/slice/auth-slice';

const defaultCredentials: AxiosBasicCredentials = {
  username: '',
  password: '',
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  const [credentials, setCredentials] = useState<AxiosBasicCredentials>(defaultCredentials);
  const [show, setShow] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await dispatch(login(credentials)).unwrap();
      console.log(res);
      navigate('/');
    } catch (error: any) {
      console.log(error);
      setShow(true);
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
              value={credentials.username}
              autoFocus={true}
              onChange={(event) =>
                setCredentials({
                  ...credentials,
                  username: event.target.value,
                })
              }
            />
            <PasswordInput
              className="input"
              placeholder={'Password'}
              value={credentials.password}
              onChange={(event) =>
                setCredentials({
                  ...credentials,
                  password: event.target.value,
                })
              }
            />
          </div>
          <div className="button-container flex-column-center">
            <button
              className="button"
              type="submit"
              disabled={isLoading || !credentials.username || !credentials.password}
            >
              {isLoading ? <AiOutlineLoading3Quarters className="icon spinner" /> : <IoArrowForward className="icon" />}
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

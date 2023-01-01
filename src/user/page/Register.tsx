import React, { FormEvent, useEffect, useRef, useState } from 'react';
import './register.css';
import PointLabel from '../../generic/component/PointLabel';
import { RegisterInfo } from '../service/model/auth.model';
import PasswordInput from '../component/PasswordInput';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Toast, ToastContainer } from 'react-bootstrap';
import { IoAlertCircleSharp } from 'react-icons/io5';
import { AxiosBasicCredentials } from 'axios';
import { userService } from '../service/user.service';

const defaultCredentials: AxiosBasicCredentials = {
  username: '',
  password: '',
};
const defaultRegisterInfo: RegisterInfo = {
  confirmPassword: '',
  address: '',
  phoneNumber: '',
  email: '',
};

const Register = () => {
  const [credentials, setCredentials] = useState<AxiosBasicCredentials>(defaultCredentials);
  const [registerInfo, setRegisterInfo] = useState<RegisterInfo>(defaultRegisterInfo);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (credentials.password == registerInfo.confirmPassword) {
      try {
        setLoading(true);
        await userService.register(credentials, registerInfo);
        window.location.href = '/login';
      } catch (e) {
        setShow(true);
      } finally {
        setLoading(false);
      }
    } else {
      alert('check your password.');
      confirmPasswordRef.current?.focus();
    }
  };

  const onCloseToast = () => setShow(false);

  useEffect(() => {
    const { username, password } = credentials;
    const { confirmPassword, address, phoneNumber } = registerInfo;
    setIsValid(!!(username && password && confirmPassword && address && phoneNumber));
  }, [credentials, registerInfo]);

  return (
    <div className="register flex-column-center">
      <div className="paper flex-column">
        <div className="title">
          <span>Member Info.</span>
        </div>
        <form className="form flex-column" onSubmit={onSubmit}>
          <div className="property-container flex-column">
            <div className="property flex-column">
              <PointLabel required>Username</PointLabel>
              <input
                className="input"
                value={credentials.username}
                autoFocus
                onChange={(event) =>
                  setCredentials({
                    ...credentials,
                    username: event.target.value,
                  })
                }
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>Password</PointLabel>
              <PasswordInput
                className="input"
                value={credentials.password}
                onChange={(event) =>
                  setCredentials({
                    ...credentials,
                    password: event.target.value,
                  })
                }
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>Confirm Password</PointLabel>
              <PasswordInput
                className="input"
                value={registerInfo.confirmPassword}
                ref={confirmPasswordRef}
                onChange={(event) =>
                  setRegisterInfo({
                    ...registerInfo,
                    confirmPassword: event.target.value,
                  })
                }
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>Address</PointLabel>
              <input
                className="input"
                value={registerInfo.address}
                onChange={(event) =>
                  setRegisterInfo({
                    ...registerInfo,
                    address: event.target.value,
                  })
                }
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>Phone Number</PointLabel>
              <input
                className="input"
                value={registerInfo.phoneNumber}
                onChange={(event) =>
                  setRegisterInfo({
                    ...registerInfo,
                    phoneNumber: event.target.value,
                  })
                }
              />
            </div>
            <div className="property flex-column">
              <PointLabel>Email</PointLabel>
              <input
                className="input"
                value={registerInfo.email}
                onChange={(event) =>
                  setRegisterInfo({
                    ...registerInfo,
                    email: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="button-container flex-column-center">
            <button className="button" type="submit" disabled={!isValid}>
              {loading ? <AiOutlineLoading3Quarters className="icon spinner" /> : 'register'}
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
          <Toast.Body>The information may be incorrect.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Register;

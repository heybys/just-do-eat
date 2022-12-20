import React, { FormEvent, useEffect, useRef, useState } from 'react';
import './register.css';
import PointLabel from '../../generic/component/PointLabel';
import { RegisterInfo, RegisterInfoDefault } from '../service/model/auth.model';
import { authService } from '../service/auth.service';
import PasswordInput from '../component/PasswordInput';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Toast, ToastContainer } from 'react-bootstrap';
import { IoAlertCircleSharp } from 'react-icons/io5';

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState<RegisterInfo>(RegisterInfoDefault);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (registerInfo.password == registerInfo.confirmPassword) {
      try {
        setLoading(true);
        await authService.register(registerInfo);
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
    const { username, password, confirmPassword, address, phoneNumber } = registerInfo;
    setIsValid(!!(username && password && confirmPassword && address && phoneNumber));
  }, [registerInfo]);

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
                value={registerInfo.username}
                autoFocus
                onChange={(event) =>
                  setRegisterInfo({
                    ...registerInfo,
                    username: event.target.value,
                  })
                }
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>Password</PointLabel>
              <PasswordInput
                className="input"
                value={registerInfo.password}
                onChange={(event) =>
                  setRegisterInfo({
                    ...registerInfo,
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

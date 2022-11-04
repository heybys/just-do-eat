import React, { FormEvent, useEffect, useRef, useState } from 'react';
import './register.css';
import PointLabel from '../../generic/component/PointLabel';
import RegisterService, { RegisterInfo } from './register.service';

const Register = () => {
  const registerService = new RegisterService();

  const [registerInfo, setRegisterInfo] = useState<RegisterInfo>(
    RegisterInfo.init()
  );
  const [isValidToSubmit, setIsValidToSubmit] = useState(false);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!registerInfo.isValidPassword()) {
      alert('check your password.');
      confirmPasswordRef.current?.focus();
      return;
    }

    alert(JSON.stringify(registerInfo));

    // await registerService.register(registerInfo);
  };

  useEffect(() => {
    setIsValidToSubmit(registerInfo.isValidToSubmit());
  }, [registerInfo]);

  return (
    <div className="register flex-column-center">
      <div className="paper flex-column">
        <div className="title">
          <span>회원 가입</span>
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
                    username: event.target.value
                  })
                }
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>Password</PointLabel>
              <input
                className="input"
                value={registerInfo.password}
                type="password"
                onChange={(event) =>
                  setRegisterInfo({
                    ...registerInfo,
                    password: event.target.value
                  })
                }
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>Confirm Password</PointLabel>
              <input
                className="input"
                value={registerInfo.confirmPassword}
                type="password"
                ref={confirmPasswordRef}
                onChange={(event) =>
                  setRegisterInfo({
                    ...registerInfo,
                    confirmPassword: event.target.value
                  })
                }
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>︎Email</PointLabel>
              <input
                className="input"
                value={registerInfo.email}
                onChange={(event) =>
                  setRegisterInfo({
                    ...registerInfo,
                    email: event.target.value
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
                    phoneNumber: event.target.value
                  })
                }
              />
            </div>
            <div className="property flex-column">
              <PointLabel>Company</PointLabel>
              <input
                className="input"
                value={registerInfo.company}
                onChange={(event) =>
                  setRegisterInfo({
                    ...registerInfo,
                    company: event.target.value
                  })
                }
              />
            </div>
          </div>
          <div className="button-container flex-column-center">
            <button
              className="button"
              type="submit"
              disabled={!isValidToSubmit}
            >
              이걸로 가입 끝 !
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

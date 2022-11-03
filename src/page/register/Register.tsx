import React, {FormEvent, useEffect, useRef, useState} from 'react';
import './register.css';
import PointLabel from '../../generic/component/PointLabel';
import RegisterService, {RegisterInfo} from "./register.service";

const Register = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [company, setCompany] = useState<string>('');

  const [isDisable, setIsDisable] = useState<boolean>(true);

  const registerService = new RegisterService();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password != confirmPassword) {
      alert('check your password.');
      confirmPasswordRef.current?.focus();
      return;
    }
    const registerInfo: RegisterInfo = {
      username,
      password,
      name,
      email,
      phoneNumber,
      company
    };

    alert(JSON.stringify(registerInfo));

    // await registerService.register(registerInfo);
  };

  useEffect(() => {
    if (username && password && confirmPassword && name && email && phoneNumber) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [username, password, confirmPassword, name, email, phoneNumber])

  return (
    <div className="register flex-column-center">
      <div className="paper flex-column">
        <div className="title">
          <span>회원가입</span>
        </div>
        <form className="form flex-column" onSubmit={onSubmit} >
          <div className="property-container flex-column">
            <div className="property flex-column">
              <PointLabel required>ID</PointLabel>
              <input
                className="input"
                value={username}
                autoFocus
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>Password</PointLabel>
              <input
                className="input"
                value={password}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>Confirm Password</PointLabel>
              <input
                className="input"
                value={confirmPassword}
                type="password"
                ref={confirmPasswordRef}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>︎Name</PointLabel>
              <input
                className="input"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>︎Email</PointLabel>
              <input
                className="input"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="property flex-column">
              <PointLabel required>Phone Number</PointLabel>
              <input
                className="input"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </div>
            <div className="property flex-column">
              <PointLabel>Company</PointLabel>
              <input
                className="input"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
            </div>
          </div>
          <div className="button-container flex-column-center">
            <button className="button" type="submit" disabled={isDisable}>
              제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

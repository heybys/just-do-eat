import React, { useEffect, useState } from 'react';
import './login.css';
import LoginService from "./login.service";

const Login = () => {
  const [id, setId] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const onClickLoginButton = () => {
    let loginService = new LoginService();
    if (id && password) {
      loginService.login(id, password);
    } else {
      alert("id, password empty.");
    }
  }

  return (
    <div className="login">
      <div className="paper">
        <div className="title">로그인</div>
        <input
          className="input"
          placeholder={'ID'}
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <input
          className="input"
          placeholder={'PASSWORD'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="button" onClick={onClickLoginButton}>로그인</button>
      </div>
    </div>
  );
};

export default Login;

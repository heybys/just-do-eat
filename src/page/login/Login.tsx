import React, { useEffect, useState } from 'react';
import './login.css';
import LoginService from "./login.service";

const Login = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const loginService = new LoginService();

  const onClickLoginButton = async () => {
    console.log(id, password)
    if (id && password) {
      await loginService.login(id, password);
    } else {
      alert("id, password empty.");
    }
  }

  const onClickUserButton = async () => {
      const result = await loginService.getUsers();
  }

  return (
    <div className="login">
      <div className="paper">
        <div className="title">로그인</div>
        <input
          className="input"
          placeholder={'ID'}
          value={id}
          autoFocus={true}
          onChange={(event) => setId(event.target.value)}
        />
        <input
          className="input"
          placeholder={'PASSWORD'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="button" onClick={onClickLoginButton}>로그인</button>
        <button className="button" onClick={onClickUserButton}>사용자</button>
      </div>
    </div>
  );
};

export default Login;

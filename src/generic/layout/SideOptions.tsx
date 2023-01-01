import React from 'react';
import './side-options.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/slice/user-slice';

const SideOptions = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

  const onClickLogout = async () => {
    try {
      const res = await dispatch(logout()).unwrap();
      console.log(res);
    } catch (error: any) {
      console.log(error);
    } finally {
      navigate('/login');
    }
  };

  return (
    <div className="side-options">
      {isAuthenticated ? (
        <a className="option logout" onClick={onClickLogout}>
          Logout
        </a>
      ) : (
        <>
          <NavLink className="option login" to="/login" end>
            Login
          </NavLink>
          <NavLink className="option" to="/register" end>
            Register
          </NavLink>
        </>
      )}
    </div>
  );
};

export default SideOptions;

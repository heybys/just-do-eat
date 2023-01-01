import React from 'react';
import './side-options.css';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authService } from '../../user/service/auth.service';
import { userActions } from '../../store/slice/user-slice';

const SideOptions = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

  const logout = async () => {
    if (isAuthenticated) {
      await authService.logout();
      dispatch(userActions.deauthenticate());
    }
  };

  return (
    <div className="side-options">
      {isAuthenticated ? (
        <NavLink className="option" to="/login" onClick={logout} end>
          Logout
        </NavLink>
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

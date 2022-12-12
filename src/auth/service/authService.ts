import axios, { AxiosRequestConfig } from 'axios';
import BaseService from '../../generic/service/base.service';
import { LoginInfo, RegisterInfo } from '../model/auth.model';

class AuthService extends BaseService {
  login = async (loginInfo: LoginInfo) => {
    const { username, password } = loginInfo;

    const url = `${this.serverUrl}/api/v1/auth/login`;
    const data = {};
    const config: AxiosRequestConfig<any> = {
      withCredentials: true,
      auth: {
        username,
        password,
      },
    };

    const result = await axios.post(url, data, config);

    if (result.status === 200) {
      window.location.href = '/';
    } else {
      throw new Error();
    }
  };

  register = async (registerInfo: RegisterInfo) => {
    const { username, password, address, phoneNumber, email } = registerInfo;

    const url = `${this.serverUrl}/api/v1/auth/register`;
    const data = {
      address,
      phoneNumber,
      email,
    };
    const config: AxiosRequestConfig<any> = {
      withCredentials: true,
      auth: {
        username,
        password,
      },
    };

    const result = await axios.post(url, data, config);

    if (result.status === 200) {
      window.location.href = '/login';
    } else {
      throw new Error();
    }
  };
}

export const authService = new AuthService();

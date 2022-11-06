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
        password
      }
    };

    return await axios.post(url, data, config);
  };

  register = async (registerInfo: RegisterInfo) => {
    const { username, password, email, phoneNumber, company } = registerInfo;

    const url = `${this.serverUrl}'/api/v1/auth/register'`;
    const data = {
      email,
      phoneNumber,
      company
    };
    const config: AxiosRequestConfig<any> = {
      withCredentials: true,
      auth: {
        username,
        password
      }
    };

    return await axios.post(url, data, config);
  };
}

export const authService = new AuthService();

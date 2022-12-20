import axios, { AxiosRequestConfig } from 'axios';
import BaseService from '../../generic/service/base.service';
import { LoginInfo, RegisterInfo } from './model/auth.model';

class AuthService extends BaseService {
  getProfile = async () => {
    const url = `${this.serverUrl}/api/v1/auth/profile`;

    const result = await axios.get(url);

    console.log(result);
    return result;
  };

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

    console.log(result);
    if (result.status !== 200) {
      throw new Error();
    } else {
    }
  };

  register = async (registerInfo: RegisterInfo) => {
    const { username, password, address, phoneNumber, email } = registerInfo;

    const url = `${this.serverUrl}/api/v1/auth/register`;
    const data = {
      address,
      phoneNumber,
      email: email || null,
    };
    const config: AxiosRequestConfig<any> = {
      withCredentials: true,
      auth: {
        username,
        password,
      },
    };

    const result = await axios.post(url, data, config);

    if (result.status !== 200) {
      throw new Error();
    } else {
      console.log(result);
    }
  };
}

export const authService = new AuthService();

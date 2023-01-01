import { AxiosBasicCredentials } from 'axios';
import { RegisterInfo } from './model/auth.model';
import httpClient from '../../generic/utils/http-client';

class UserService {
  register = async (credentials: AxiosBasicCredentials, registerInfo: RegisterInfo) => {
    const data = {
      ...registerInfo,
      email: registerInfo.email || null,
    };

    await httpClient.post('/user', data, { auth: credentials });
  };
}

export const userService = new UserService();

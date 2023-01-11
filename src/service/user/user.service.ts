import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import { RegisterInfo } from './model/auth.model';
import httpClient from '../utils/http-client';

class UserService {
  register = async (credentials: AxiosBasicCredentials, registerInfo: RegisterInfo): Promise<AxiosResponse<any>> => {
    const data = {
      ...registerInfo,
      email: registerInfo.email || null,
    };

    return await httpClient.post('/user', data, { auth: credentials });
  };
}

export const userService = new UserService();

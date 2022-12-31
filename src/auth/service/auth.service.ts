import { AxiosBasicCredentials } from 'axios';
import { Profile, RegisterInfo } from './model/auth.model';
import httpClient from './http-client';

class AuthService {
  getProfile = async (): Promise<Profile> => {
    const result = await httpClient.get('/auth/profile');

    return result.data.payload as Profile;
  };

  logout = async () => {
    await httpClient.delete('/auth/logout');
  };

  login = async (credentials: AxiosBasicCredentials) => {
    const response = await httpClient.post('/auth/login', undefined, { auth: credentials });

    return response.data.payload;
  };

  register = async (credentials: AxiosBasicCredentials, registerInfo: RegisterInfo) => {
    const data = {
      ...registerInfo,
      email: registerInfo.email || null,
    };

    await httpClient.post('/auth/register', data, { auth: credentials });
  };
}

export const authService = new AuthService();

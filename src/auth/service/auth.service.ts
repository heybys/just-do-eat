import { AxiosBasicCredentials } from 'axios';
import { Profile, RegisterInfo } from './model/auth.model';
import httpService from './http.service';

class AuthService {
  getProfile = async (): Promise<Profile> => {
    const result = await httpService.get('/auth/profile');

    return result.data.payload as Profile;
  };

  login = async (credentials: AxiosBasicCredentials) => {
    await httpService.post('/auth/login', undefined, { auth: credentials });
  };

  register = async (credentials: AxiosBasicCredentials, registerInfo: RegisterInfo) => {
    const data = {
      ...registerInfo,
      email: registerInfo.email || null,
    };

    await httpService.post('/auth/register', data, { auth: credentials });
  };
}

export const authService = new AuthService();

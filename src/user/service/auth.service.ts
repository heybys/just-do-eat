import { AxiosBasicCredentials } from 'axios';
import httpClient from '../../generic/utils/http-client';

class AuthService {
  login = async (credentials: AxiosBasicCredentials): Promise<any> => {
    const response = await httpClient.post('/auth/login', undefined, { auth: credentials });

    return response.data.payload;
  };

  logout = async (): Promise<void> => {
    await httpClient.delete('/auth/logout');
  };
}

export const authService = new AuthService();

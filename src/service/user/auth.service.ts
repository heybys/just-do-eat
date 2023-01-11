import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import httpClient, { CommonResponse } from '../utils/http-client';

class AuthService {
  login = async (credentials: AxiosBasicCredentials): Promise<AxiosResponse<CommonResponse>> => {
    return await httpClient.post('/login', undefined, { auth: credentials });
  };

  logout = async (): Promise<AxiosResponse<CommonResponse>> => {
    return await httpClient.delete('/logout');
  };
}

export const authService = new AuthService();

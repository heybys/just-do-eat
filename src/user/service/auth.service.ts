import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import httpClient, { CommonResponse } from '../../generic/utils/http-client';

class AuthService {
  login = async (credentials: AxiosBasicCredentials): Promise<AxiosResponse<CommonResponse>> => {
    return await httpClient.post('/auth/login', undefined, { auth: credentials });
  };

  logout = async (): Promise<AxiosResponse<CommonResponse>> => {
    return await httpClient.delete('/auth/logout');
  };
}

export const authService = new AuthService();

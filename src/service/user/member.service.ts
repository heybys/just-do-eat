import { AxiosBasicCredentials, AxiosResponse } from 'axios';
import { RegisterInfo } from './model/auth.model';
import httpClient from '../utils/http-client';

class MemberService {
  register = async (credentials: AxiosBasicCredentials, registerInfo: RegisterInfo): Promise<AxiosResponse<any>> => {
    const data = {
      ...registerInfo,
      email: registerInfo.email || null,
    };

    return await httpClient.post('/member', data, { auth: credentials });
  };
}

export const memberService = new MemberService();

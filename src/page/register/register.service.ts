import axios, { AxiosRequestConfig } from 'axios';
import BaseService from '../../generic/service/base.service';

export class RegisterInfo {
  username?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
  phoneNumber?: string;
  company?: string;

  isValidToSubmit = () => {
    return (
      !this.isEmpty(this.username) &&
      !this.isEmpty(this.password) &&
      !this.isEmpty(this.confirmPassword) &&
      !this.isEmpty(this.email) &&
      !this.isEmpty(this.phoneNumber)
    );
  };

  isValidPassword = () => {
    return this.password == this.confirmPassword;
  };

  private isEmpty = (str?: string) => {
    return !str || str.length === 0;
  };

  static init = () => {
    let build = new RegisterInfo();
    build.username = '';
    build.password = '';
    build.confirmPassword = '';
    build.email = '';
    build.phoneNumber = '';
    build.company = '';
    return build;
  };
}

class RegisterService extends BaseService {
  register = async (registerInfo: RegisterInfo) => {
    const { username, password, email, phoneNumber, company } = registerInfo;

    if (!username || !password) {
      throw new Error();
    }

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

export default RegisterService;

import axios, {AxiosRequestConfig} from "axios";
import BaseService from "../../generic/service/base.service";

export interface RegisterInfo {
    username: string;
    password: string;
    name: string;
    email: string;
    phoneNumber: string;
    company?: string;
}

class RegisterService extends BaseService{
    register = async (registerInfo: RegisterInfo) => {
        const {username, password, ...rest} = registerInfo;

        const url = `${this.serverUrl}'/api/v1/auth/register'`;
        const data = {
            ...rest
        };
        const config: AxiosRequestConfig<any> = {
            withCredentials: true,
            auth: {
                username,
                password,
            }
        };

        return await axios.post(url, data, config);
    }
}

export default RegisterService;

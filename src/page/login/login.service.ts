import axios, {AxiosRequestConfig} from "axios";
import BaseService from "../../generic/service/base.service";


class LoginService extends BaseService{
    login = async (id: string, password: string) => {
        const path = '/api/v1/auth/login';
        const url = `${this.serverUrl}${path}`;
        const data = {};
        const config: AxiosRequestConfig<any> = {
            withCredentials: true,
            auth: {
                username: id,
                password: password,
            }
        };

        const result = await axios.post(url, data, config);

        console.log('result : ', result);
        console.log('cookie : ', document.cookie);
        let header = result.headers;
        console.log('set-cookie : ', header);

        return result;
    }

    getUsers = async () => {
        const url = `${this.serverUrl}/api/v1/users`;
        const config: AxiosRequestConfig<any> = {
            withCredentials: true
        };
        const result = await axios.get(url, config);

        console.log('result : ', result);
        console.log('cookie : ', document.cookie);
        let header = result.headers;
        console.log('set-cookie : ', header);

        return result;
    }
}

export default LoginService;

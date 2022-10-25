import axios, {AxiosRequestConfig} from "axios";


class LoginService {
    login = async (id: string, password: string) => {
        const url = "http://localhost:8080/login";
        const data = {
            id, password
        };
        const config: AxiosRequestConfig<any> = {};

        return await axios.post(url, data, config);
    }
}

export default LoginService;
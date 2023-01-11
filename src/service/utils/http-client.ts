import axios, { AxiosError } from 'axios';

const printConsoleLog = false;
const apiVersion = 'v1';

const httpClient = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/${apiVersion}`,
  withCredentials: true,
});

httpClient.interceptors.request.use(
  (request) => {
    if (printConsoleLog) console.log('[request]', request);
    return request;
  },
  (error: AxiosError) => {
    if (printConsoleLog) console.log('[request]', error);
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  (response) => {
    if (printConsoleLog) console.log('[response]', response);
    return response;
  },
  (error: AxiosError) => {
    if (printConsoleLog) console.log('[response]', error);
    return Promise.reject(error);
  },
);

export interface CommonResponse<T = any> {
  statusCode: 'SUCCESS' | 'FAIL';
  message?: string;
  payload?: T;
}

export default httpClient;

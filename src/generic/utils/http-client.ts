import axios, { AxiosError } from 'axios';

const logOn = false;

const httpClient = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/v1`,
  withCredentials: true,
});

httpClient.interceptors.request.use(
  (request) => {
    if (logOn) console.log('[request]', request);
    return request;
  },
  (error: AxiosError) => {
    if (logOn) console.log('[request]', error);
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  (response) => {
    if (logOn) console.log('[response]', response);
    return response;
  },
  (error: AxiosError) => {
    if (logOn) console.log('[response]', error);
    return Promise.reject(error);
  },
);

export interface CommonResponse<T = any> {
  statusCode: 'SUCCESS' | 'FAIL';
  message?: string;
  payload?: T;
}

export default httpClient;

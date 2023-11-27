import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { API_URL } from 'env';
import { openAlert } from 'reducers/notificationSlice';
import { store } from 'reducers/store';

const beforeRequest = (config: InternalAxiosRequestConfig) => {
  try {
    if (config.data instanceof FormData) {
      Object.assign(config.headers, { 'Content-Type': 'multipart/form-data' });
    }
  } catch {}
  return config;
};

const onError = async (error: AxiosError) => {
  const { response } = error;
  if (response) {
    const { data } = response;

    const message = (data as any).errors ?? 'Đã có lỗi xảy ra';
    store.dispatch(openAlert({ message, variant: 'error' }));
  }
  return Promise.reject(error);
};

const client = axios.create({ baseURL: API_URL });

client.interceptors.request.use(beforeRequest);
client.interceptors.response.use((response) => response.data, onError);

export { client };

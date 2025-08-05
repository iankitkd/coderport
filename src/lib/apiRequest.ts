import axios, { AxiosRequestConfig, Method } from 'axios';

export default async function apiRequest(
  url: string,
  method: Method = "GET",
  options?: AxiosRequestConfig & { data?: any }
) {
  try {
    const response = await axios({
      ...options,
      method,
      url,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      data: options?.data,
      withCredentials: true
    });

    return response.data;
} catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 'Request failed';
      throw new Error(message);
    } else {
      throw new Error((error as Error).message);
    }
  }
}

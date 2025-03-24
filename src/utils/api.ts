import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Default timeout in milliseconds
});

api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" && localStorage.getItem("token");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const request = async <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(
    () => controller.abort(),
    config.timeout || 10000
  );

  try {
    // Handle multipart form data
    if (config.data instanceof FormData) {
      config.headers = {
        ...config.headers,
        "Content-Type": "multipart/form-data",
      };
    }

    const response = await api.request({
      ...config,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error: any) {
    clearTimeout(timeoutId);
    throw error.response?.data;
  }
};

export const Fetch = async <T>(
  url: string,
  params?: Record<string, unknown>,
  timeout?: number
): Promise<T> => {
  const response = await request<T>({
    method: "GET",
    url,
    params,
    timeout,
  });
  return response.data;
};

export const Post = async <T>(
  url: string,
  data: Record<string, unknown> | FormData,
  timeout?: number
): Promise<T> => {
  const response = await request<T>({
    method: "POST",
    url,
    data,
    timeout,
  });
  return response.data;
};

export const Put = async <T>(
  url: string,
  data: Record<string, unknown> | FormData,
  timeout?: number
): Promise<T> => {
  const response = await request<T>({
    method: "PUT",
    url,
    data,
    timeout,
  });
  return response.data;
};

export const Delete = async <T>(
  url: string,
  data?: Record<string, unknown>,
  params?: Record<string, unknown>,
  timeout?: number
): Promise<T> => {
  const response = await request<T>({
    method: "DELETE",
    url,
    data,
    params,
    timeout,
  });
  return response.data;
};

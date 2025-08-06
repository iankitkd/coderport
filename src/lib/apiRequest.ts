export default async function apiRequest(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  options?: RequestInit & { data?: object },
  returnType: "json" | "text" = "json",
) {
  try {
    const response = await fetch(url, {
      ...options,
      method,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: options?.data ? JSON.stringify(options.data) : options?.body,
      credentials: "include",
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Request failed");
    }

    if(returnType === "text") {
      const text = await response.text();
      return text;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}



// import axios, { AxiosRequestConfig, Method } from 'axios';

// export default async function apiRequest(
//   url: string,
//   method: Method = "GET",
//   options?: AxiosRequestConfig & { data?: {} }
// ) {
//   try {
//     const response = await axios({
//       ...options,
//       method,
//       url,
//       headers: {
//         'Content-Type': 'application/json',
//         ...options?.headers
//       },
//       data: options?.data,
//       withCredentials: true
//     });

//     return response.data;
// } catch (error) {
//     if (axios.isAxiosError(error)) {
//       const message = error.response?.data?.message || 'Request failed';
//       throw new Error(message);
//     } else {
//       throw new Error((error as Error).message);
//     }
//   }
// }

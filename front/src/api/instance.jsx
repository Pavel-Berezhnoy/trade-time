import axios from "axios";
import TokenService from "../tokens/tokenService";

const instance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  timeout: 100000,
  headers: {
    'Content-Type': 'Application/json',
  }
});

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
},
(error) => {
  return Promise.reject(error);
});

instance.interceptors.response.use(
  responce => {
    return responce;
},
async (error) => {
  const config = error.config;
  if (config.url !== "/auth/login" && error.response) {
    console.log(config._retry);
    if (error.response.status === 401) {
      try {
        const refresh = await instance.post("auth/refresh", {
          refreshToken: TokenService.getRefreshToken(),
        });
        const tokens = refresh.data;
        TokenService.updateTokens(tokens);
        return instance(config);
      } catch (err) {
        TokenService.removeTokens()
        return Promise.reject(err);
      }
    }
    return Promise.reject(error)
  }
})

export default instance;
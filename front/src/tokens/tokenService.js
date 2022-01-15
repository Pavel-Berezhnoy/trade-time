import jwt from 'jwt-decode';

const TokenService = {
    getRefreshToken: () => {
        return localStorage.getItem('refreshToken');
    },
    getAccessToken: () => {
        return localStorage.getItem('accessToken');
    },
    updateTokens: (tokens) => {
        localStorage.setItem("accessToken", tokens.accessToken);
        localStorage.setItem("refreshToken", tokens.refreshToken);
    },
    removeTokens: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    },
    decodeAccessToken: (token) => {
        if (token)
            return jwt(token).data;
        else 
            return {
                id: "",
                role: "",
                email: "",
            }
    }
}

export default TokenService;
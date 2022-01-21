import instance from "./instance";

export const userApi = {
    registration: async (userData) => {
        const response = await instance.post(`/auth/registration`,{
            username: userData.username,
            password: userData.password,
        })
        return response.data;
    },
    authentication: async (userData) => {
        const response = await instance.post('/auth/login',{
            username: userData.username,
            password: userData.password,
        }) 
        return response.data;
    },
    // createUser: async (data) => {
    //     const response = await instance.post('/auth/create-user',{
    //         role: data.role,
    //         name: data.name,
    //     }) 
    //     return response.data;
    // }
}
import instance from "./instance";

export const userApi = {
    registration: async (data) => {
        const response = await instance.post(`/auth/register`,{
            email: data.user.email,
            password: data.user.password,
        })
        return response;
    },
    authentication: async (userData) => {
        const response = await instance.post('/auth/login',{
            email: userData.email,
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
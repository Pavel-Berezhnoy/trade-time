import instance from "./instance";

export const lotApi = {
    uploadForm: async (data) => {
        const response = await instance.post(`/lots`,data,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'multipart/form-data'
            }
        })
        return response;
    },
    upload: async (data) => {
        const response = await instance.post(`/bets`,data,
        {
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            }
        })
        return response;
    }
}
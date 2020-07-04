const axios = require('axios')

const comAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})

comAxios.interceptors.response.use(function (response) {
    const { data } = response;

    if (data.code !== 0) {
        const error = new Error(data.message || 'Unknown Error');
        error.data = data.data;
        throw error;
    }
    return data.data;
}, function (error) {

    return Promise.reject(error);
});


export { comAxios };
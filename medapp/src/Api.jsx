import axios from 'axios'

export const Api=axios.create({
    baseURL:'http://192.168.73.255:8000/',
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
    }

})

Api.interceptors.request.use(
    function(Config){
        const token = localStorage.getItem('access');
        if (token) {
            Config.headers.Authorization = `Bearer ${token}`;
        }
        return Config;    
    },
    function(error){
        return Promise.reject(error)
    }
)

Api.interceptors.response.use(
    function(response){
        console.log(response.data)
        return response.data;
    },

    function(error){
        return Promise.reject(error)
    }
)
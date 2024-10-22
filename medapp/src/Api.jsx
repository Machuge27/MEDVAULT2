import axios from 'axios'

export const Api=axios.create({
    baseURL:'http://192.168.100.38:8000/'

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
        return response.data;
    },

    function(error){
        return Promise.reject(error)
    }
)
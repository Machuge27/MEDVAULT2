// src/Components/Protected.jsx
import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode"
import { Navigate,Outlet } from 'react-router-dom';
import { Api } from '../Api';

export default function ProtectedRoute() {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    }, []);

    async function refreshToken() {
        const refreshToken = localStorage.getItem('refresh');
        const decode=jwtDecode(refreshToken)
        const now=Date.now()/1000
        if(now > decode.exp){
            setIsAuthorized(false)
            return
        }

        try {
            const res = await Api.post('api/token/refresh/', { refresh: refreshToken });
            if (res.status === 200) {
                localStorage.setItem('access', res.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    }

    async function auth() {
        const token = localStorage.getItem('access');
        if (!token) {
            setIsAuthorized(false);
            return;
        }
        const decode = jwtDecode(token);
        const tokenExpiration = decode.exp;
        const now = Date.now() / 1000;
        if (now > tokenExpiration) {
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
    }

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }
    if(isAuthorized){
        return <Outlet/>
    }else{
        localStorage.clear('access')
        localStorage.clear('refresh')
        return <Navigate to='/auth'/>
    }

}


import React, { createContext, useState, useContext, useEffect } from 'react';
import { authApi } from '../apis/authApi';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if user is already authenticated via token
        const token = Cookies.get('auth_token');
        if (token) {
            authApi.verifyToken(token).then((userData) => {
                setUser(userData);
            }).catch(() => {
                Cookies.remove('auth_token');
                setUser(null);
            });
        }
    }, []);

    const login = async (credentials) => {
        try {
            const { token, userData } = await authApi.login(credentials);
            Cookies.set('auth_token', token, { expires: 7 }); // Store token for 7 days
            setUser(userData);
        } catch (error) {
            throw new Error('Login failed');
        }
    };

    const logout = () => {
        Cookies.remove('auth_token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

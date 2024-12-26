
import React, { createContext, useState, useContext } from 'react';
import { login, logout } from '../apis/authApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handleLogin = async (credentials) => {
        const data = await login(credentials);
        setUser(data.user);
        localStorage.setItem('token', data.token);
    };

    const handleLogout = async () => {
        await logout();
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

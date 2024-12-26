
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    headers: { 'Content-Type': 'application/json' },
});

export const authApi = {
    login: async ({ email, password }) => {
        const response = await api.post('/auth/login', { email, password });
        return response.data;
    },
    verifyToken: async (token) => {
        const response = await api.get('/auth/verify', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },
};

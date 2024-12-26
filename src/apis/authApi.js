
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Placeholder API for demonstration
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (credentials) => {
    // Mock response for login
    const response = await apiClient.post('/posts', credentials); // Simulating login
    return {
        token: 'mock-token',
        user: { id: 1, name: 'John Doe', email: credentials.email },
    };
};

export const logout = async () => {
    return { success: true };
};

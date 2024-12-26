
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Demonstration API
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchUsers = async () => {
    const response = await apiClient.get('/users');
    return response.data;
};

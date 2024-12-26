
import React, { useState } from 'react';
import { useAuth } from '../context/authContext';

const LoginPage = () => {
    const { login, user } = useAuth();
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(credentials);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Login</h1>
            {user ? (
                <p>Welcome, {user.name}!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={credentials.email}
                            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default LoginPage;

import React, { useEffect, useState } from 'react';
import { userApi } from '../../apis/userApi';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userApi.getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  if (error) return <div>{error}</div>;
  if (!users.length) return <div>Loading...</div>;

  return (
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default UserList;

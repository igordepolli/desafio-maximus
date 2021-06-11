import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import StoreContext from '../Store/Context';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Nome', width: 150 },
  { field: 'username', headerName: 'Usuário', width: 150 },
  { field: 'email', headerName: 'E-mail', width: 150 },
];

// {id: user.id, name: user.name, username: user.username, email: user.email}

export default function DataGridDemo() {
  const [users, setUsers] = useState([]);
  const { token } = useContext(StoreContext);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch('http://localhost:3000/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      const responseJson = await data.json();
      setUsers(responseJson);
    };
    fetchUsers();
  }, [token]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={users} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

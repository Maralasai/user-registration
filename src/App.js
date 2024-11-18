// src/App.js
import React, { useState } from "react";
import AddUserForm from './components/AddUserForm';
import UserList from "./components/UserList";
import './styles.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const addUser = (user) => {
    if (editUser) {
      setUsers(
        users.map((u) => (u.id === editUser.id ? { ...user, id: editUser.id } : u))
      );
      setEditUser(null);
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUserDetails = (user) => {
    setEditUser(user);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Registration</h1>
      <AddUserForm onSubmit={addUser} editData={editUser} />
      <UserList users={users} onEdit={editUserDetails} onDelete={deleteUser} />
    </div>
  );
};

export default App;

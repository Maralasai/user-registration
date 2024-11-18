
import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div> <h1 style={{color:"red",fontSize:"25px",textAlign:"center"}}>Registered Users</h1>
    <table border="1" style={{ width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Date of Birth</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>
                <button className="edit" onClick={() => onEdit(user)}>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="delete" onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              No users available
            </td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
  );
};

export default UserList;

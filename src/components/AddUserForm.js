// src/components/UserForm.js
import React, { useState, useEffect } from "react";

const AddUserForm = ({ onSubmit, editData }) => {
  const [user, setUser] = useState({ name: "", email: "", dob: "" });

  useEffect(() => {
    if (editData) setUser(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({ name: "", email: "", dob: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        placeholder="Date of Birth"
        value={user.dob}
        onChange={handleChange}
        required
      />
      <button type="submit">{editData ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default AddUserForm;

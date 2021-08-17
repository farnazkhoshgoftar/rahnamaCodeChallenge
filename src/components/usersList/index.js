import React, { useState, useEffect } from "react";
import axios from "axios";

import "./usersList.css";

const UsersList = () => {
  const [users, setUsers] = useState();
  const getAllUsers = async () => {
    try {
      await axios.get("http://localhost:3000/signup").then((res) => {
        setUsers(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="usersListContainer">
     
      <ul>
      <li className='title'>All users</li>
        {users && users.map((user) => <li  key={user.id}>{user.userName}</li>)}
      </ul>
    </div>
  );
};

export default UsersList;

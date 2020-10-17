import React from "react";
import User from "../User/User";
import "./UserList.scss";

function UserList({ users, showMessage, selectedUser }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <User
          user={user.name}
          showMessage={() => showMessage(user.name)}
          key={user.id}
          selectedUser={selectedUser}
        />
      ))}
    </div>
  );
}

export default UserList;

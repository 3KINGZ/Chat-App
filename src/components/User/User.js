import React from "react";
import "./User.scss";

const User = ({ user, showMessage, selectedUser }) => (
  <div
    className={`user ${selectedUser === user ? "selected" : ""}`}
    onClick={showMessage}
  >
    {user}
  </div>
);

export default User;

import React from "react";
import "./Header.scss";

function Header({ selectedUser }) {
  return (
    <div className="header">
      <div>
        <h3 className="title">Welcome User</h3>
      </div>
      <div className="selected-user">{selectedUser}</div>
    </div>
  );
}

export default Header;

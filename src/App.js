import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
import MessageArea from "./components/MessageArea/MessageArea";
import "./App.scss";

function App() {
  const users = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState(users[0]);

  //get user when a user clicks on one
  const findUser = (name) => {
    const user = users.find((user) => user.name === name);
    setSelectedUser(user);
  };

  const id = users.indexOf(selectedUser);

  return (
    <div className="app">
      <Header selectedUser={selectedUser.name} />
      <div className="main">
        <UserList
          users={users}
          showMessage={findUser}
          selectedUser={selectedUser.name}
        />
        <MessageArea message={selectedUser.messages} id={id} />
      </div>
    </div>
  );
}

export default App;

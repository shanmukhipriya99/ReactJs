import React, { useState } from 'react';

import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addNewUserHandler = (newUserInfo) => {
    setUsers((prevUsers) => [...prevUsers, newUserInfo]);
  };
  return (
    <div>
      <UserForm addNewUser={addNewUserHandler} />
      <UsersList usersList={users} />
    </div>
  );
}

export default App;

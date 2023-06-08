import React, { useState } from 'react';
import './UserForm.css';

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameHandler = (event) => {
    setUsername(event.target.value.trim());
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const user = {
      username,
      age,
      id: Math.random().toString(),
    };
    // console.log(user);
    props.addNewUser(user)
    setUsername('');
    setAge('');
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='user-form'>
        <label>Username:</label>
        <input type='text' value={username} onChange={usernameHandler} />
        <label>Age (Years):</label>
        <input type='number' value={age} onChange={ageHandler} />
        <button type='submit'>Add User</button>
      </div>
    </form>
  );
};

export default UserForm;

import React, { useState } from 'react';
import './UserForm.css';
import ErrorModal from './UI/ErrorModal';

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const usernameHandler = (event) => {
    setUsername(event.target.value.trim());
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    const user = {
      username,
      age,
      id: Math.random().toString(),
    };
    // console.log(user);
    props.addNewUser(user);
    setUsername('');
    setAge('');
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <form onSubmit={formSubmitHandler}>
        <div className='user-form'>
          <label htmlFor='username'>Username:</label>
          <input
            id='username'
            type='text'
            value={username}
            onChange={usernameHandler}
          />
          <label htmlFor='age'>Age (Years):</label>
          <input id='age' type='number' value={age} onChange={ageHandler} />
          <button type='submit'>Add User</button>
        </div>
      </form>
    </>
  );
};

export default UserForm;

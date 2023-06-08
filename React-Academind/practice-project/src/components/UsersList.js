import React from 'react';
import Card from './UI/Card';
import './UsersList.css'

const UsersList = (props) => {
  return (
    <div className='users'>
      <ul>
        {props.usersList.map((user) => (
          <Card key={user.id} username={user.username} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

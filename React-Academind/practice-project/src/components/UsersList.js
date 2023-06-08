import React from 'react';
import Card from './UI/Card';

const UsersList = (props) => {
  return (
    <ul>
      {props.usersList.map((user) => (
        <Card 
            key={user.id}
            username={user.username}
            age={user.age}
        />
      ))}
    </ul>
  );
};

export default UsersList;

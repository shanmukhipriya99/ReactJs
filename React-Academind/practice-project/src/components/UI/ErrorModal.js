import React from 'react';
import './ErrorModal.css';

const ErrorModal = (props) => {
  return (
    <>
      <div className='backdrop' />
      <div className='modal'>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'>
          <p>{props.message}</p>
        </div>
        <footer className='actions'>
          <button className='button' type='button'>
            Okay
          </button>
        </footer>
      </div>
    </>
  );
};

export default ErrorModal;

import { useRef, useState, useEffect } from 'react';

const SimpleInput = (props) => {
  // const nameRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  // const [nameIsValid, setNameIsValid] = useState(false);
  const [nameInputTouched, setNameInputTouched] = useState(false);
  const [emailInputTouched, setEmailInputTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const nameIsValid = enteredName.trim() !== '';
  const emailIsValid = enteredEmail.includes('@');
  const nameInputIsInvalid = !nameIsValid && nameInputTouched;
  const emailInputIsInvalid = !emailIsValid && emailInputTouched;
  let formIsValid = false;

  // useEffect(() => {
  if (nameIsValid && emailIsValid) {
    // formIsValid(true);
    formIsValid = true;
  }
  // else {
  //   setFormIsValid(false);
  // }
  // }, [nameIsValid]);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameBlurHandler = (event) => {
    setNameInputTouched(true);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailBlurHandler = (event) => {
    setEmailInputTouched(true);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameInputTouched(true);
    setEmailInputTouched(true);
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    console.log(enteredName);
    // console.log(nameRef.current.value);
    setEnteredName('');
    setEnteredEmail('');
    setNameInputTouched(false);
    setEmailInputTouched(false);
  };

  const nameInputClass = !nameInputIsInvalid
    ? 'form-control'
    : 'form-control invalid';
  const emailInputClass = !emailInputIsInvalid
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          // ref={nameRef}
          type='text'
          id='name'
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input
          // ref={nameRef}
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className='error-text'>Enter a valid email address.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

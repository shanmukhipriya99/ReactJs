import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  // const nameRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  // const [nameIsValid, setNameIsValid] = useState(false);
  const [nameInputTouched, setNameInputTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !nameIsValid && nameInputTouched;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameBlurHandler = (event) => {
    setNameInputTouched(true);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameInputTouched(true);
    if (!nameIsValid) {
      return;
    }
    console.log(enteredName);
    // console.log(nameRef.current.value);
    setEnteredName('');
    setNameInputTouched(false);
  };

  const nameInputClass = !nameInputIsInvalid
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
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

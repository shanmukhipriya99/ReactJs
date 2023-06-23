import useValidation from '../hooks/use-validation';

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangedHandler: firstNameChangedHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useValidation((value) => value.trim() !== '');

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangedHandler: lastNameChangedHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useValidation((value) => value.trim() !== '');

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangedHandler: emailChangedHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useValidation((value) => value.includes('@'));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClass = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameClass = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailClass = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstName}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p>First Name can't be empty!</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p>Last Name can't be empty!</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='name'
          value={email}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p>Enter a valid email!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

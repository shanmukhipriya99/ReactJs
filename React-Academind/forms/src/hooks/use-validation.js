import { useState } from 'react';

const useValidation = (validateInput) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateInput(value);
  const hasError = !isValid && isTouched;

  const valueChangedHandler = (event) => {
    setValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    valueChangedHandler,
    valueBlurHandler,
    reset,
  };
};

export default useValidation;

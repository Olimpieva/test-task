import { useCallback, useState } from 'react';

import { defaultValidationErrorMessages } from './constans';

export function useFormWithValidation(initialState = { values: {}, isFormValid: true }, overrideErrorMessages = {}) {
  const [values, setValues] = useState(initialState.values);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(initialState.isFormValid);

  const handleChange = (input) => {
    const name = input.name;
    const value = input.value;
    const minLength = input.minLength;
    const validityState = input.validity;
    let errorMessage = undefined;

    if (!validityState.valid) {
      const updatedErrorMessages = {
        ...defaultValidationErrorMessages,
        ...overrideErrorMessages[name]
      };

      const [, getValidationMessage] = Object.entries(updatedErrorMessages).find(([errorKey]) => {
        const hasError = validityState[errorKey];
        if (hasError) {
          return true;
        }
        return false;
      });

      errorMessage = getValidationMessage({ minLength });
    };

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: errorMessage });
    setIsFormValid(input.closest('form').checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsFormValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsFormValid(newIsFormValid);
  },
    [setValues, setErrors, setIsFormValid]);

  return { values, setValues, handleChange, errors, setErrors, isFormValid, setIsFormValid, resetForm, };
};
import React, { useRef, useEffect } from 'react';
import ReactInputMask from 'react-input-mask';

import { useField } from '@unform/core';

const InputMask = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <ReactInputMask
        ref={inputRef}
        defaultValue={defaultValue}
        className={error ? 'hasError' : ''}
        onFocus={clearError}
        {...rest}
      />
      {error && <span style={{ color: "var(--color-danger)" }}>{error}</span>}
    </>
  );
};

export default InputMask;
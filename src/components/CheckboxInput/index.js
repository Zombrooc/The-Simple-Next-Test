import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

const CheckboxInput = ({ name, options, ...rest }) => {
  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue = [], error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      clearValue: (refs) => {
        refs.forEach(ref => {
          ref.checked = false;
        });
      },
      setValue: (refs, values) => {
        refs.forEach(ref => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <>
      {error && <small style={{ color: "var(--color-danger)", marginTop: "-10px", marginBottom: "10px" }}>{error}</small>}
      <Container>
        {options.map((option, index) => (
          <div key={option.id}>
            <input
              defaultChecked={defaultValue.find((dv) => dv === option.id)}
              ref={ref => {
                inputRefs.current[index] = ref;
              }}
              value={option.value}
              onFocus={clearError}
              type="checkbox"
              id={option.id}
              {...rest}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </Container>
    </>
  );
};

export default CheckboxInput;
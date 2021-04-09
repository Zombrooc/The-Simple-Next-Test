import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = "", registerField, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);
  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <input
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        className={error ? 'hasError' : ''}
        onFocus={clearError}
        {...rest}
      />

      {error && <span style={{ color: "var(--color-danger)" }}>{error}</span>}
    </>
  );
}

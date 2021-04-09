import React, { useRef, useEffect } from "react";
import ReactSelect from "react-select";
import { useField } from "@unform/core";

const Select = ({ name, label, ...rest }) => {
  const selectRef = useRef(null);
  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return "";
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        id={fieldName}
        cacheOptions
        classNamePrefix="react-select"
        className={error ? "hasError" : ""}
        onFocus={clearError}
        {...rest}
      />

      {error && <span style={{ color: "var(--color-danger)" }}>{error}</span>}
    </>
  );
};

export default Select;

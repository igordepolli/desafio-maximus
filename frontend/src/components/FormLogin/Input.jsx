import React, { useEffect, useRef } from 'react';
import { TextField } from '@material-ui/core';
import { useField } from '@unform/core';

// eslint-disable-next-line react/prop-types
const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <TextField ref={inputRef} {...rest} />

      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </div>
  );
};

export default Input;

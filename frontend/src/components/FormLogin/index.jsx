import React, { useRef } from 'react';
import { Button } from '@material-ui/core';
import { Form } from '@unform/web';
import Input from './Input';
import './styles.css';

const FormLogin = () => {
  const formRef = useRef(null);

  const handleSubmit = () => {
    //
  };

  return (
    <Form
      ref={formRef}
      align="center"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Input className="input" name="user" label="Usuário" />
      <Input className="input" name="password" label="Senha" type="password" />
      <Button variant="contained" color="primary">
        Log In
      </Button>
    </Form>
  );
};

export default FormLogin;

import React from 'react';
import * as Toastify from 'react-toastify';

// eslint-disable-next-line react/prop-types
const Msg = ({ message }) => <div style={{ width: 260 }}> {message} </div>;

export default function Alert({
  message,
  type = 'error',
  position = 'top-left',
  ...rest
}) {
  Toastify.toast(<Msg message={message} />, { type, position, ...rest });
}

import React from 'react';
import Alert from '@mui/material/Alert';

export function SuccessAlert(message) {
  return (
      <Alert variant="filled" severity="success">
        {message}
      </Alert>
  );
}

export function ErrorAlert() {
    <Alert variant="filled" severity="error">
      This is an error alert — check it out!
    </Alert>
}

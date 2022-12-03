import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export function SuccessAlert(message) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="success">
        {message}
      </Alert>
    </Stack>
  );
}

export function ErrorAlert() {
  <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert variant="filled" severity="error">
      This is an error alert — check it out!
    </Alert>
  </Stack>
}
// @ts-nocheck
import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Typography, Button } from '@mui/material';

export default () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title,
    });

    setTitle('');
  };

  return (
    <Box>
      <Typography>Create Post</Typography>
      <Box>
        <Typography>Title</Typography>
        <TextField label = "Enter title"/>
      </Box>
      <Button>Submit</Button>
    </Box>
  );
};

// @ts-nocheck
import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';
import {Box, Typography} from "@mui/material"

export default () => {
  return (
    <Box>
      <PostCreate />
      <Box></Box>
      <PostList />
    </Box>
  );
};

import React from 'react';
import { Typography, Box } from '@material-ui/core';

const Education = () => {
  return (
    <div style={{marginTop: '2rem'}}>
    <Box py={2}>
      <Typography variant="h5">Education</Typography>

      <Typography variant="h6">MS.Computer Science</Typography>
      <Typography variant='h8'> Liverpool John Moores University - UK (2020-2022)</Typography>
      <div>
        <br></br>
      </div>
      <Typography variant="h6">Bachelor of Technology (B.Tech)</Typography>
      <Typography variant='h8'>KIIT University - Bhubaneswar , India (2010-2014)</Typography>
    </Box>
    </div>
  );
};

export default Education;

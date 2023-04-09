import React from 'react';
import { Typography, Box } from '@material-ui/core';

const Certification = () => {
  const certifications = [
    {
      name: 'Accenture Spot Award ',
      description: 'Spot Award from Accenture for delivering the product within a very short duration.',
    },
    {
      name: 'Delivery Excellence Award',
      description: 'Delivery Excellence Award from Onshore Team for the month of September in 2016',
    },
    {
      name: 'Monthly Spot Recognition Award',
      description: 'Monthly Spot Recognition Award for Developing an awesome test automation framework for the team.',
    },
    {
      name: 'Telstra Employee of the Month Award',
      description: 'Telstra Employee of the Month Award for excellent contribution with Quality Assurance',
    },
    {
      name: 'Accenture Excellence Award',
      description: 'Received Accenture Excellence Award (ACE Award) for individual contribution in test Automation',
    },
    
  ];

  return (
    <div style={{marginTop: '2rem'}}>
    <Box py={2}>
      <Typography variant="h5">Accomplishments</Typography>
      {certifications.map((certifications) => (
        <Box key={certifications.name} py={1}>

          <ul>
            <li>
            <Typography variant="h6">{certifications.name}</Typography>
            <Typography>{certifications.description}</Typography>
            </li>
          </ul>
         
        </Box>
      ))}
    </Box>
    </div>
  );
};

export default Certification;

import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

const ContactUsComponent = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(11, 31, 58, 0.08)',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ color: '#0B1F3A', fontWeight: 700, mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ color: '#1E4D8C', lineHeight: 1.7 }}>
          Welcome to the Contact Us section of Northnode Analytics.
        </Typography>
      </Paper>
    </Container>
  );
};

export default ContactUsComponent;

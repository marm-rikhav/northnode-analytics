import PropTypes from 'prop-types';
import { Box, Container, Typography } from '@mui/material';

const PageBanner = ({ title, subtitle, maxWidth = 'lg', children }) => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#1E4D8C',
        color: '#FFFFFF',
        py: { xs: 6, sm: 7.5, md: 9 },
        px: { xs: '24px', sm: '40px', md: '48px', lg: '64px' },
        textAlign: 'center',
      }}
    >
      <Container maxWidth={maxWidth} disableGutters>
        <Typography
          variant="h1"
          sx={{
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.25rem' },
            lineHeight: 1.2,
            mb: { xs: 1.5, md: 2 },
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: '#3E92CC',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              lineHeight: 1.5,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            {subtitle}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
};

PageBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.node,
};

export default PageBanner;

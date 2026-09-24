import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Link,
  Divider,
  Chip
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  VerifiedUser as TrustIcon,
  Shield as SecurityIcon
} from '@mui/icons-material';
import companyLogo from '../../assets/companylogo.jpg';

const COLORS = {
  navy: '#0B1F3A',
  blue: '#1E4D8C',
  sky: '#3E92CC',
  light: '#F2F5F9',
  white: '#FFFFFF',
};

const navLinks = [
  { label: 'Home', name: 'Home' },
  { label: 'About Us', name: 'About Us' },
  { label: 'Services', name: 'Services' },
  { label: 'Industry', name: 'Industry' },
  { label: 'Contact Us', name: 'Contact Us' }
];

const FooterComponent = ({ onNavigate }) => {
  const handleNavClick = (pageName) => {
    if (onNavigate) {
      onNavigate(pageName);
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: COLORS.navy,
        color: COLORS.white,
        pt: 6,
        pb: 3,
        borderTop: `3px solid ${COLORS.blue}`,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ mb: 5 }}>
          {/* Column 1: Company */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  component="img"
                  src={companyLogo}
                  alt="NorthNode Analytics Logo"
                  sx={{
                    height: 44,
                    width: 'auto',
                    borderRadius: 1.5,
                    backgroundColor: COLORS.white,
                    p: 0.5,
                  }}
                />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: COLORS.white, lineHeight: 1.1 }}>
                    NORTHNODE
                  </Typography>
                  <Typography variant="caption" sx={{ color: COLORS.sky, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                    Analytics
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                Engineering Intelligent Digital Solutions
              </Typography>
            </Stack>
          </Grid>

          {/* Column 2: Navigate */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" sx={{ color: COLORS.sky, fontWeight: 700, mb: 2, letterSpacing: 0.5 }}>
              Navigate
            </Typography>
            <Stack spacing={1.2}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  component="button"
                  variant="body2"
                  onClick={() => handleNavClick(link.name)}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textAlign: 'left',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      color: COLORS.sky,
                      transform: 'translateX(3px)',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Contact */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" sx={{ color: COLORS.sky, fontWeight: 700, mb: 2, letterSpacing: 0.5 }}>
              Contact
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <LocationIcon sx={{ color: COLORS.sky, fontSize: 20, mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                  121 King Street West, Suite 1900<br />
                  Toronto, Ontario M5H 3T9, Canada
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ color: COLORS.sky, fontSize: 20 }} />
                <Link
                  href="mailto:info@northnodeanalytics.com"
                  underline="hover"
                  sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem' }}
                >
                  info@northnodeanalytics.com
                </Link>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ color: COLORS.sky, fontSize: 20 }} />
                <Link
                  href="tel:+14165552408"
                  underline="hover"
                  sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem' }}
                >
                  +1 (416) 555-2408
                </Link>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <LinkedInIcon sx={{ color: COLORS.sky, fontSize: 20 }} />
                <Link
                  href="https://linkedin.com/company/northnodeanalytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem' }}
                >
                  LinkedIn
                </Link>
              </Stack>
            </Stack>
          </Grid>

          {/* Column 4: Trust & Credentials */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ color: COLORS.sky, fontWeight: 700, mb: 2, letterSpacing: 0.5 }}>
              Trust & Credentials
            </Typography>
            <Stack spacing={1.5} alignItems="flex-start">
              <Chip
                icon={<SecurityIcon sx={{ color: `${COLORS.sky} !important` }} />}
                label="ISO 27001 Certified (In Progress)"
                size="small"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: COLORS.white,
                  fontWeight: 600,
                  fontSize: '0.78rem',
                }}
              />
              <Chip
                icon={<TrustIcon sx={{ color: `${COLORS.sky} !important` }} />}
                label="SOC 2 Compliant Controls"
                size="small"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: COLORS.white,
                  fontWeight: 600,
                  fontSize: '0.78rem',
                }}
              />
              <Typography variant="body2" sx={{ color: COLORS.sky, fontWeight: 700, mt: 1 }}>
                180+ Employees · 120+ Clients · 14 Countries
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)', mb: 3 }} />

        {/* Bottom legal strip (full width, small text) */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1.5}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © 2026 NorthNode Analytics Inc. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link underline="hover" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem', cursor: 'pointer' }}>
              Privacy Policy
            </Link>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.3)' }}>·</Typography>
            <Link underline="hover" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem', cursor: 'pointer' }}>
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

FooterComponent.propTypes = {
  onNavigate: PropTypes.func,
};

export default FooterComponent;

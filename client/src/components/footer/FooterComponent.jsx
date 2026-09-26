import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Divider,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import companyLogo from '../../assets/logo_transparent.png';

const navLinks = [
  { label: 'Home', name: 'Home' },
  { label: 'About Us', name: 'About Us' },
  { label: 'Services', name: 'Services' },
  { label: 'Industry', name: 'Industry' },
  { label: 'Contact Us', name: 'Contact Us' },
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
      id="footer"
      sx={{
        backgroundColor: '#0B1F3A',
        color: '#FFFFFF',
        pt: { xs: 6, md: 7 },
        pb: { xs: 4, md: 5 },
        mt: 'auto',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: '24px', sm: '40px', md: '80px', lg: '96px' },
          boxSizing: 'border-box',
        }}
      >
        {/* Equal-Width 3-Column Distribution: 1fr 1fr 1fr */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(3, 1fr)',
            },
            gap: { xs: 4, sm: 3.5, md: 5, lg: 6 },
            alignItems: 'start',
          }}
        >
          {/* Column 1: Brand & Description */}
          <Box>
            <Stack spacing={2} alignItems="flex-start">
              {/* Clean White Container for Dark Logo */}
              <Box
                sx={{
                  width: 54,
                  height: 54,
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 0.8,
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Box
                  component="img"
                  src={companyLogo}
                  alt="NorthNode Analytics Logo"
                  sx={{
                    maxHeight: 40,
                    maxWidth: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </Box>

              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: { xs: '1.05rem', sm: '0.98rem', md: '1.05rem' },
                  lineHeight: 1.35,
                  letterSpacing: '-0.01em',
                  mt: 0.5,
                  maxWidth: 320,
                }}
              >
                Engineering Intelligent Digital Solutions
              </Typography>

              <Typography
                sx={{
                  color: '#C7D4E5',
                  fontSize: { xs: '0.88rem', sm: '0.82rem', md: '0.88rem' },
                  lineHeight: 1.65,
                  maxWidth: 320,
                }}
              >
                We build scalable, secure and innovative technology solutions that help businesses transform and grow in the digital world.
              </Typography>
            </Stack>
          </Box>

          {/* Column 2: Quick Links */}
          <Box>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: { xs: '1.08rem', sm: '1rem', md: '1.08rem' },
                letterSpacing: '-0.01em',
                mb: 1,
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ width: 28, height: 2.5, backgroundColor: '#3E92CC', borderRadius: 1, mb: 2.5 }} />

            <Stack spacing={1.6}>
              {navLinks.map((link) => (
                <Box
                  key={link.name}
                  onClick={() => handleNavClick(link.name)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: { xs: 165, sm: 155, md: 175 },
                    cursor: 'pointer',
                    color: '#FFFFFF',
                    fontSize: { xs: '0.92rem', sm: '0.86rem', md: '0.92rem' },
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#3E92CC',
                      '& .footer-link-arrow': {
                        color: '#3E92CC',
                        stroke: '#3E92CC',
                        transform: 'translateX(3px)',
                      },
                    },
                  }}
                >
                  <span>{link.label}</span>
                 
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Column 3: Contact Us */}
          <Box>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: { xs: '1.08rem', sm: '1rem', md: '1.08rem' },
                letterSpacing: '-0.01em',
                mb: 1,
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ width: 28, height: 2.5, backgroundColor: '#3E92CC', borderRadius: 1, mb: 2.5 }} />

            <Stack spacing={2}>
              {/* Address */}
              <Stack direction="row" spacing={1.8} alignItems="flex-start">
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: '#123D70',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    mt: 0.2,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#1E4D8C',
                    },
                  }}
                >
                  <LocationIcon sx={{ color: '#3E92CC', fontSize: 18 }} />
                </Box>
                <Typography sx={{ color: '#C7D4E5', fontSize: { xs: '0.86rem', sm: '0.8rem', md: '0.86rem' }, lineHeight: 1.55 }}>
                  121 King Street West, Suite 1900
                  <br />
                  Toronto, Ontario M5H 3T9, Canada
                </Typography>
              </Stack>

              {/* Email */}
              <Stack direction="row" spacing={1.8} alignItems="center">
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: '#123D70',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#1E4D8C',
                    },
                  }}
                >
                  <EmailIcon sx={{ color: '#3E92CC', fontSize: 18 }} />
                </Box>
                <Link
                  href="mailto:info@northnodeanalytics.com"
                  underline="none"
                  sx={{
                    color: '#FFFFFF',
                    fontSize: { xs: '0.88rem', sm: '0.8rem', md: '0.88rem' },
                    transition: 'color 0.2s ease',
                    wordBreak: 'break-word',
                    '&:hover': { color: '#3E92CC' },
                  }}
                >
                  info@northnodeanalytics.com
                </Link>
              </Stack>

              {/* Phone */}
              <Stack direction="row" spacing={1.8} alignItems="center">
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: '#123D70',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#1E4D8C',
                    },
                  }}
                >
                  <PhoneIcon sx={{ color: '#3E92CC', fontSize: 18 }} />
                </Box>
                <Link
                  href="tel:+14165552408"
                  underline="none"
                  sx={{
                    color: '#FFFFFF',
                    fontSize: { xs: '0.88rem', sm: '0.82rem', md: '0.88rem' },
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#3E92CC' },
                  }}
                >
                  +1 (416) 555-2408
                </Link>
              </Stack>

              {/* LinkedIn */}
              <Stack direction="row" spacing={1.8} alignItems="center">
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: '#123D70',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#1E4D8C',
                    },
                  }}
                >
                  <LinkedInIcon sx={{ color: '#3E92CC', fontSize: 20 }} />
                </Box>
                <Link
                  href="https://linkedin.com/company/northnodeanalytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: '#FFFFFF',
                    fontSize: { xs: '0.88rem', sm: '0.82rem', md: '0.88rem' },
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#3E92CC' },
                  }}
                >
                  LinkedIn
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ borderColor: '#1E4D8C', mt: { xs: 5, md: 6 }, mb: { xs: 3, md: 3.5 } }} />

        {/* Bottom legal row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            width: '100%',
            gap: 2,
          }}
        >
          <Typography sx={{ color: '#AFC0D4', fontSize: '0.84rem', flexShrink: 0 }}>
            © 2026 NorthNode Analytics Inc. All rights reserved.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              marginLeft: { sm: 'auto' },
            }}
          >
            <Link
              underline="none"
              sx={{
                color: '#AFC0D4',
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                '&:hover': { color: '#3E92CC' },
              }}
            >
              Privacy Policy
            </Link>
            <Typography sx={{ color: 'rgba(175, 192, 212, 0.4)', fontSize: '0.84rem' }}>|</Typography>
            <Link
              underline="none"
              sx={{
                color: '#AFC0D4',
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                '&:hover': { color: '#3E92CC' },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

FooterComponent.propTypes = {
  onNavigate: PropTypes.func,
};

export default FooterComponent;

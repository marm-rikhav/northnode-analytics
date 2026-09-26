import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  TextField,
  Button,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Language as WebIcon,
  LinkedIn as LinkedInIcon,
  Business as BusinessIcon,
  ArrowForward as ArrowIcon,
  Directions as DirectionsIcon,
} from '@mui/icons-material';

const COLORS = {
  navy: '#0B1F3A',
  blue: '#1E4D8C',
  sky: '#3E92CC',
  light: '#F2F5F9',
  white: '#FFFFFF',
};

const contactItems = [
  {
    label: 'Company',
    value: 'NorthNode Analytics Inc.',
    icon: <BusinessIcon sx={{ fontSize: 20 }} />,
  },
  {
    label: 'Head Office',
    value: '121 King Street West, Suite 1900, Toronto, Ontario M5H 3T9, Canada',
    icon: <LocationIcon sx={{ fontSize: 20 }} />,
  },
  {
    label: 'Website',
    value: 'www.northnodeanalytics.com',
    href: 'https://www.northnodeanalytics.com',
    icon: <WebIcon sx={{ fontSize: 20 }} />,
  },
  {
    label: 'Email',
    value: 'info@northnodeanalytics.com',
    href: 'mailto:info@northnodeanalytics.com',
    icon: <EmailIcon sx={{ fontSize: 20 }} />,
  },
  {
    label: 'Phone',
    value: '+1 (416) 555-2408',
    href: 'tel:+14165552408',
    icon: <PhoneIcon sx={{ fontSize: 20 }} />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/company/northnodeanalytics',
    href: 'https://linkedin.com/company/northnodeanalytics',
    icon: <LinkedInIcon sx={{ fontSize: 20 }} />,
  },
];

const inputSx = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#D8E2EE',
    },
    '&:hover fieldset': {
      borderColor: '#3E92CC',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3E92CC',
      borderWidth: '2px',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#42546B',
    fontSize: '0.9rem',
    '&.Mui-focused': {
      color: '#1E4D8C',
    },
  },
  '& .MuiOutlinedInput-input': {
    fontSize: '0.9rem',
    color: '#0B1F3A',
  },
};

const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ backgroundColor: COLORS.light, pb: 8 }}>
      {/* 1. HERO HEADER */}
      <Box
        component="section"
        sx={{
          backgroundColor: COLORS.blue,
          color: COLORS.white,
          py: { xs: 6, sm: 7.5, md: 9 },
          px: { xs: '24px', sm: '40px', md: '48px', lg: '64px' },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Typography
            variant="h1"
            sx={{
              color: COLORS.white,
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.25rem' },
              lineHeight: 1.2,
              mb: { xs: 1.5, md: 2 },
            }}
          >
            Let’s Build Something Intelligent Together
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: COLORS.sky,
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              lineHeight: 1.5,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Reach out to discuss how NorthNode Analytics can support your next digital initiative.
          </Typography>
        </Container>
      </Box>

      {/* 2. UNIFIED CONTACT INFORMATION & SEND US A MESSAGE CARD */}
      <Box
        component="section"
        sx={{
          py: { xs: 4, sm: 5, md: 6 },
          px: { xs: '20px', sm: '36px', md: '48px', lg: '64px' },
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ mx: 'auto' }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #D8E2EE',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(11, 31, 58, 0.04)',
              p: { xs: '24px', sm: '28px', md: '32px' },
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
                gap: { xs: '32px', md: '36px', lg: '40px' },
                alignItems: 'start',
              }}
            >
              {/* LEFT COLUMN: CONTACT INFORMATION */}
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    color: '#0B1F3A',
                    fontWeight: 800,
                    fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.75rem' },
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                    mb: { xs: 2, md: 2.5 },
                  }}
                >
                  Contact Information
                </Typography>

                <Stack
                  spacing={0}
                  sx={{
                    border: '1px solid #E2EAF2',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#FAFCFE',
                  }}
                >
                  {contactItems.map((item, index) => (
                    <Box
                      key={item.label}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        py: { xs: '12px', sm: '13px' },
                        px: { xs: '14px', sm: '18px' },
                        borderBottom: index !== contactItems.length - 1 ? '1px solid #E8EEF5' : 'none',
                        gap: { xs: 1.5, sm: 2 },
                        transition: 'background-color 0.15s ease',
                        '&:hover': {
                          backgroundColor: '#FFFFFF',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: '10px',
                          backgroundColor: '#EBF3FB',
                          color: '#3E92CC',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          sx={{
                            color: '#0B1F3A',
                            fontWeight: 700,
                            fontSize: '0.74rem',
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            lineHeight: 1.2,
                            mb: 0.25,
                          }}
                        >
                          {item.label}
                        </Typography>
                        {item.href ? (
                          <Box
                            component="a"
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            sx={{
                              color: '#1E4D8C',
                              textDecoration: 'none',
                              fontWeight: 600,
                              fontSize: { xs: '0.88rem', sm: '0.92rem' },
                              lineHeight: 1.35,
                              wordBreak: 'break-word',
                              display: 'inline-block',
                              transition: 'color 0.15s ease',
                              '&:hover': {
                                color: '#3E92CC',
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            {item.value}
                          </Box>
                        ) : (
                          <Typography
                            sx={{
                              color: '#1E4D8C',
                              fontWeight: 500,
                              fontSize: { xs: '0.88rem', sm: '0.92rem' },
                              lineHeight: 1.35,
                              wordBreak: 'break-word',
                            }}
                          >
                            {item.value}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* RIGHT COLUMN: SEND US A MESSAGE */}
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    color: '#0B1F3A',
                    fontWeight: 800,
                    fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.75rem' },
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                    mb: 0.75,
                  }}
                >
                  Send Us a Message
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1E4D8C',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    mb: { xs: 2, md: 2.5 },
                  }}
                >
                  Fill out the form below and an engineering lead will get back to you within 24 hours.
                </Typography>

                {submitted && (
                  <Alert severity="success" sx={{ mb: 2.5, borderRadius: '8px' }}>
                    Thank you! Your message has been sent successfully. We will get in touch with you shortly.
                  </Alert>
                )}

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                      gap: 2,
                    }}
                  >
                    {/* Row 1: Full Name * & Work Email * */}
                    <TextField
                      fullWidth
                      required
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      sx={inputSx}
                    />
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Work Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      sx={inputSx}
                    />

                    {/* Row 2: Subject / Project Interest & Message / Project Details */}
                    <TextField
                      fullWidth
                      label="Subject / Project Interest"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="e.g. Cloud, Custom Software, AI"
                      size="small"
                      sx={inputSx}
                    />
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={3.5}
                      label="Message / Project Details"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="Tell us about your requirements or goals..."
                      sx={inputSx}
                    />
                  </Box>

                  <Box
                    sx={{
                      pt: 0.5,
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 2,
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<ArrowIcon sx={{ fontSize: 18 }} />}
                      sx={{
                        backgroundColor: '#3E92CC',
                        color: '#0B1F3A',
                        fontWeight: 700,
                        fontSize: '0.925rem',
                        textTransform: 'none',
                        borderRadius: '8px',
                        px: 3.5,
                        py: 1.15,
                        boxShadow: '0 4px 14px rgba(62, 146, 204, 0.3)',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          backgroundColor: '#0B1F3A',
                          color: '#FFFFFF',
                          boxShadow: '0 6px 20px rgba(11, 31, 58, 0.2)',
                          transform: 'translateY(-1px)',
                        },
                      }}
                    >
                      Send Message
                    </Button>

                    <Button
                      component="a"
                      href="https://maps.google.com/?q=121+King+Street+West,+Suite+1900,+Toronto,+Ontario+M5H+3T9,+Canada"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      startIcon={<DirectionsIcon sx={{ fontSize: 19 }} />}
                      sx={{
                        borderColor: '#1E4D8C',
                        color: '#1E4D8C',
                        fontWeight: 700,
                        fontSize: '0.925rem',
                        textTransform: 'none',
                        borderRadius: '8px',
                        px: 3,
                        py: 1.15,
                        borderWidth: '1.5px',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          borderColor: '#0B1F3A',
                          backgroundColor: '#EBF3FB',
                          color: '#0B1F3A',
                          borderWidth: '1.5px',
                          transform: 'translateY(-1px)',
                        },
                      }}
                    >
                      Get Directions
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* SNACKBAR NOTIFICATION */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%', borderRadius: 2 }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUsComponent;

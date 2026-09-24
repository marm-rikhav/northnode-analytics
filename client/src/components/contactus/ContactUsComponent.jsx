import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Alert,
  Snackbar,
  Link
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Language as WebIcon,
  LinkedIn as LinkedInIcon,
  Business as BusinessIcon,
  Send as SendIcon
} from '@mui/icons-material';

const COLORS = {
  navy: '#0B1F3A',
  blue: '#1E4D8C',
  sky: '#3E92CC',
  light: '#F2F5F9',
  white: '#FFFFFF',
};

const contactDetailsTable = [
  { label: 'Company', value: 'NorthNode Analytics Inc.', icon: <BusinessIcon sx={{ color: COLORS.sky }} /> },
  { label: 'Head Office', value: '121 King Street West, Suite 1900, Toronto, Ontario M5H 3T9, Canada', icon: <LocationIcon sx={{ color: COLORS.sky }} /> },
  { label: 'Website', value: 'www.northnodeanalytics.com', href: 'https://www.northnodeanalytics.com', icon: <WebIcon sx={{ color: COLORS.sky }} /> },
  { label: 'Email', value: 'info@northnodeanalytics.com', href: 'mailto:info@northnodeanalytics.com', icon: <EmailIcon sx={{ color: COLORS.sky }} /> },
  { label: 'Phone', value: '+1 (416) 555-2408', href: 'tel:+14165552408', icon: <PhoneIcon sx={{ color: COLORS.sky }} /> },
  { label: 'LinkedIn', value: 'linkedin.com/company/northnodeanalytics', href: 'https://linkedin.com/company/northnodeanalytics', icon: <LinkedInIcon sx={{ color: COLORS.sky }} /> }
];

const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
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
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ backgroundColor: COLORS.light, pb: 8 }}>
      {/* 1. HERO HEADER */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.blue} 100%)`,
          color: COLORS.white,
          py: { xs: 7, md: 9 },
          px: 2,
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(11, 31, 58, 0.25)',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.2rem', sm: '3rem', md: '3.5rem' },
              mb: 2,
            }}
          >
            Let’s Build Something Intelligent Together
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: COLORS.sky,
              fontWeight: 600,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
            }}
          >
            Reach out to discuss how NorthNode Analytics can support your next digital initiative.
          </Typography>
        </Container>
      </Box>

      {/* 2. MAIN CONTACT SECTION (HEAD OFFICE & FORM) */}
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Grid container spacing={4}>
          {/* Left Column: Head Office Block & Contact Table */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              {/* Head Office Highlight Card */}
              <Paper
                elevation={2}
                sx={{
                  p: 3.5,
                  borderRadius: 3,
                  backgroundColor: COLORS.navy,
                  color: COLORS.white,
                  background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.blue} 100%)`,
                }}
              >
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <LocationIcon sx={{ color: COLORS.sky, fontSize: 32 }} />
                    <Typography variant="h5" sx={{ fontWeight: 800, color: COLORS.white }}>
                      Head Office
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                    121 King Street West, Suite 1900<br />
                    Toronto, Ontario M5H 3T9, Canada
                  </Typography>
                </Stack>
              </Paper>

              {/* Official Contact Details Table */}
              <Paper
                elevation={2}
                sx={{
                  p: 3.5,
                  borderRadius: 3,
                  backgroundColor: COLORS.white,
                  border: '1px solid rgba(11, 31, 58, 0.08)',
                }}
              >
                <Typography variant="h6" sx={{ color: COLORS.navy, fontWeight: 800, mb: 2 }}>
                  Contact Information
                </Typography>
                <TableContainer>
                  <Table size="small">
                    <TableBody>
                      {contactDetailsTable.map((row) => (
                        <TableRow key={row.label} sx={{ '&:nth-of-type(odd)': { backgroundColor: COLORS.light } }}>
                          <TableCell sx={{ fontWeight: 700, color: COLORS.navy, width: '35%', py: 1.5 }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                              {row.icon}
                              <span>{row.label}</span>
                            </Stack>
                          </TableCell>
                          <TableCell sx={{ color: COLORS.blue, py: 1.5, wordBreak: 'break-word' }}>
                            {row.href ? (
                              <Link href={row.href} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ color: COLORS.blue, fontWeight: 600 }}>
                                {row.value}
                              </Link>
                            ) : (
                              <span style={{ fontWeight: 600 }}>{row.value}</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Stack>
          </Grid>

          {/* Right Column: Functional Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={2}
              sx={{
                p: { xs: 3.5, md: 4.5 },
                borderRadius: 3,
                backgroundColor: COLORS.white,
                border: '1px solid rgba(11, 31, 58, 0.08)',
              }}
            >
              <Typography variant="h5" sx={{ color: COLORS.navy, fontWeight: 800, mb: 1 }}>
                Send Us a Message
              </Typography>
              <Typography variant="body2" sx={{ color: COLORS.blue, mb: 3 }}>
                Fill out the form below and an engineering lead will get back to you within 24 hours.
              </Typography>

              {submitted && (
                <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                  Thank you! Your message has been sent successfully. We will get in touch with you shortly.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Work Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject / Project Interest"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="e.g. Cloud Migration, Custom Software, AI Advisory"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={4}
                      label="Message / Project Details"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="Tell us about your requirements or goals..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        backgroundColor: COLORS.sky,
                        color: COLORS.navy,
                        fontWeight: 700,
                        px: 4,
                        py: 1.4,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1.05rem',
                        boxShadow: '0 4px 14px rgba(62, 146, 204, 0.4)',
                        '&:hover': {
                          backgroundColor: COLORS.navy,
                          color: COLORS.white,
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* 3. EMBEDDED MAP BLOCK */}
      <Container maxWidth="lg">
        <Paper
          elevation={2}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            border: '1px solid rgba(11, 31, 58, 0.08)',
          }}
        >
          <Box sx={{ p: 3, backgroundColor: COLORS.white, borderBottom: '1px solid rgba(11, 31, 58, 0.08)' }}>
            <Typography variant="h6" sx={{ color: COLORS.navy, fontWeight: 800 }}>
              Location Map — Toronto Head Office
            </Typography>
            <Typography variant="body2" sx={{ color: COLORS.blue }}>
              121 King Street West, Suite 1900, Toronto, Ontario M5H 3T9, Canada
            </Typography>
          </Box>
          <Box
            component="iframe"
            title="NorthNode Analytics Toronto Location"
            src="https://maps.google.com/maps?q=121%20King%20Street%20West,%20Toronto,%20ON%20M5H%203T9,%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
            sx={{
              width: '100%',
              height: '380px',
              border: 0,
            }}
            loading="lazy"
          />
        </Paper>
      </Container>

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

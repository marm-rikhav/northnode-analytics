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
} from '@mui/icons-material';
import PageBanner from '../common/PageBanner';

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
  '& .MuiFormHelperText-root': {
    fontSize: '0.78rem',
    mx: 0.5,
  },
};

// Safe, linear-time regex (no polynomial backtracking)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

const validators = {
  name: (trimmed) => {
    if (!trimmed) {
      return 'Full name is required';
    }
    if (trimmed.length < 3 || trimmed.length > 12) {
      return 'Full name must be between 3 and 12 characters';
    }
    return '';
  },

  email: (trimmed) => {
    if (!trimmed) {
      return 'Work email is required';
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      return 'Please enter a valid work email address';
    }
    return '';
  },

  subject: (trimmed) => {
    if (trimmed && (trimmed.length < 3 || trimmed.length > 50)) {
      return 'Subject must be between 3 and 50 characters';
    }
    return '';
  },

  message: (trimmed) => {
    if (!trimmed) {
      return 'Message is required';
    }
    const words = trimmed.split(/\s+/).filter(Boolean);
    if (words.length < 5) {
      return `Message must contain at least 5 words (currently ${words.length})`;
    }
    if (words.length > 150) {
      return `Message cannot exceed 150 words (currently ${words.length})`;
    }
    return '';
  },
};

const validateField = (name, value) => {
  const validator = validators[name];
  return validator ? validator(value.trim()) : '';
};

const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: errorMsg,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const isNameValid = formData.name.trim().length >= 3 && formData.name.trim().length <= 12;
  const isEmailValid = EMAIL_REGEX.test(formData.email.trim());
  const isSubjectValid = formData.subject.trim().length === 0 || (formData.subject.trim().length >= 3 && formData.subject.trim().length <= 50);
  const messageWordCount = formData.message.trim().split(/\s+/).filter(Boolean).length;
  const isMessageValid = messageWordCount >= 5 && messageWordCount <= 150;

  const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }

    // Log submitted data to console as requested
    console.log('Contact Us Form Submitted:', formData);

    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setTouched({
      name: false,
      email: false,
      subject: false,
      message: false,
    });
    setErrors({});
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ backgroundColor: COLORS.light, pb: 8 }}>
      {/* 1. HERO HEADER */}
      <PageBanner
        title="Let’s Build Something Intelligent Together"
        subtitle="Reach out to discuss how NorthNode Analytics can support your next digital initiative."
      />

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
                        borderBottom: index === contactItems.length - 1 ? 'none' : '1px solid #E8EEF5',
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
                      onBlur={handleBlur}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
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
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      variant="outlined"
                      size="small"
                      sx={inputSx}
                    />

                    {/* Row 2: Subject / Project Interest & Message / Project Details */}
                    <TextField
                      fullWidth
                      label="Subject / Project Interest (Optional)"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.subject && Boolean(errors.subject)}
                      helperText={touched.subject && errors.subject}
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
                      onBlur={handleBlur}
                      error={touched.message && Boolean(errors.message)}
                      helperText={
                        (touched.message && errors.message) ||
                        (formData.message.trim() ? `${formData.message.trim().split(/\s+/).filter(Boolean).length} words (min 5, max 150)` : '')
                      }
                      variant="outlined"
                      placeholder="Tell us about your requirements or goals (min 5 words)..."
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
                      disabled={!isFormValid}
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
                        '&.Mui-disabled': {
                          backgroundColor: '#D1DEEB',
                          color: '#8CA0B3',
                          boxShadow: 'none',
                          cursor: 'not-allowed',
                          pointerEvents: 'auto',
                        },
                      }}
                    >
                      Send Message
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
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%', borderRadius: 2 }}>
          Form data logged to console successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUsComponent;

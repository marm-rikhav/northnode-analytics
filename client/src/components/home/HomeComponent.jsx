import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Typography,
  Card,
  CardActionArea,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import {
  AccountBalance as FinanceIcon,
  ShoppingCart as RetailIcon,
  LocalShipping as LogisticsIcon,
  Public as GlobalIcon,
  Groups as SeniorTeamsIcon,
  Layers as FullStackIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';
import coverPageBg from './homeassests/coverpage.png';

const COLORS = {
  navy: '#0B1F3A',
  blue: '#1E4D8C',
  sky: '#3E92CC',
  light: '#F2F5F9',
  white: '#FFFFFF',
};

const servicesList = [
  {
    name: 'Custom Software Development',
    desc: 'Tailored software solutions to solve your unique business challenges.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Web Developments',
    desc: 'Modern, responsive and scalable web applications for your business.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: 'Mobile App Development',
    desc: 'High-performance mobile apps for iOS and Android platforms.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: 'Cloud Solutions',
    desc: 'Scalable, secure and cost-efficient cloud infrastructure and services.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    name: 'Data Analytics',
    desc: 'Turn data into actionable insights for smarter decisions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20V14" />
      </svg>
    ),
  },
  {
    name: 'Artificial Intelligence',
    desc: 'Intelligent solutions to automate, optimize and innovate.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
      </svg>
    ),
  },
  {
    name: 'Machine Learning',
    desc: 'Build intelligent systems that learn and evolve.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" />
      </svg>
    ),
  },
  {
    name: 'DevOps',
    desc: 'Faster delivery, better collaboration and reliable operations.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    name: 'UI/UX Design',
    desc: 'User-centric designs that create meaningful experiences.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    name: 'Cybersecurity',
    desc: 'Proactive security for a safer digital tomorrow.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    name: 'QA & Testing',
    desc: 'Ensure quality, performance and reliability at every stage.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'IT Consulting',
    desc: 'Strategic guidance to help you achieve your technology goals.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
];

const HeartPulseIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="#3E92CC"
    />
    <path
      d="M4.5 12.5h3.2l1.6-3 2.4 6 2-4.5 1.5 2.5h4.3"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const industriesList = [
  {
    title: 'Financial Services',
    desc: 'Supporting banks, insurers and financial institutions with secure, scalable and compliant technology solutions.',
    icon: <FinanceIcon sx={{ fontSize: 26, color: '#3E92CC' }} />,
  },
  {
    title: 'Healthcare & Life Sciences',
    desc: 'Enabling better outcomes with technology that supports patients, providers and research.',
    icon: <HeartPulseIcon />,
  },
  {
    title: 'Retail & E-Commerce',
    desc: 'Building seamless digital experiences that drive engagement, loyalty and growth.',
    icon: <RetailIcon sx={{ fontSize: 26, color: '#3E92CC' }} />,
  },
  {
    title: 'Manufacturing & Logistics',
    desc: 'Optimizing operations with smart, connected and data-driven solutions.',
    icon: <LogisticsIcon sx={{ fontSize: 26, color: '#3E92CC' }} />,
  },
];

const whyChooseUsHighlights = [
  {
    title: 'Canadian-Based Precision',
    desc: 'Canadian-based, driven with a global perspective and a commitment to excellence in everything we do.',
    icon: <GlobalIcon sx={{ fontSize: 26, color: '#3E92CC' }} />,
  },
  {
    title: 'Senior-Led Teams',
    desc: 'Every engagement is guided by an experienced leadership team with deep industry and technical expertise.',
    icon: <SeniorTeamsIcon sx={{ fontSize: 26, color: '#3E92CC' }} />,
  },
  {
    title: 'Full-Stack Competency',
    desc: 'Deep bench across software, cloud, data, and AI — one partner, full-stack capability.',
    icon: <FullStackIcon sx={{ fontSize: 26, color: '#3E92CC' }} />,
  },
];

const HomeComponent = ({ onNavigate }) => {
  const handleNavigation = (pageName) => {
    if (onNavigate) {
      onNavigate(pageName);
    }
  };

  return (
    <Box sx={{ backgroundColor: COLORS.light, pb: 6 }}>
      {/* 1. HERO COVER SECTION */}
      <Box
        sx={{
          backgroundColor: '#051329',
          backgroundImage: `url(${coverPageBg})`,
          backgroundSize: 'cover',
          backgroundPosition: { xs: '70% center', md: 'right center' },
          backgroundRepeat: 'no-repeat',
          color: COLORS.white,
          pt: { xs: 8, md: 10 },
          pb: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >

        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 2,
            px: { xs: '24px', sm: '36px', md: '56px' },
          }}
        >

          {/* Large Sans-Serif Modern Headline */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Inter", "Plus Jakarta Sans", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 800,
                color: '#FFFFFF',
                fontSize: { xs: '2.5rem', sm: '3.6rem', md: '4.5rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
              }}
            >
              Engineering intelligent
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Inter", "Plus Jakarta Sans", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 800,
                color: '#3E92CC',
                fontSize: { xs: '2.5rem', sm: '3.6rem', md: '4.5rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
              }}
            >
              digital solutions.
            </Typography>
          </Box>

          {/* Paragraph body */}
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: { xs: '1rem', md: '1.12rem' },
              maxWidth: '560px',
              lineHeight: 1.65,
              mb: 4.5,
            }}
          >
            Software, cloud, and data engineering for organizations that need to build, scale, and secure what comes next — delivered by a 180-person team working across 14 countries.
          </Typography>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2.5} alignItems="center" sx={{ mb: 7, flexWrap: 'wrap', gap: 2 }}>
            <Button
              variant="contained"
              onClick={() => handleNavigation('Contact Us')}
              endIcon={<ArrowIcon sx={{ fontSize: 18, transition: 'transform 0.2s ease' }} />}
              sx={{
                backgroundColor: '#3E92CC',
                color: '#FFFFFF',
                fontWeight: 700,
                px: 3.5,
                py: 1.5,
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '1rem',
                boxShadow: '0 4px 16px rgba(62, 146, 204, 0.35)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#FFFFFF',
                  color: '#1E4D8C',
                  boxShadow: '0 8px 24px rgba(255, 255, 255, 0.25)',
                  '& svg': {
                    transform: 'translateX(3px)',
                  },
                },
              }}
            >
              Start a Conversation
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleNavigation('Services')}
              endIcon={<ArrowIcon sx={{ fontSize: 18, transition: 'transform 0.2s ease' }} />}
              sx={{
                borderColor: '#3E92CC',
                borderWidth: '1.5px',
                color: '#FFFFFF',
                fontWeight: 600,
                px: 3,
                py: 1.4,
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '1rem',
                backgroundColor: 'transparent',
                transition: 'all 0.25s ease',
                '&:hover': {
                  borderColor: '#3E92CC',
                  backgroundColor: '#3E92CC',
                  color: '#FFFFFF',
                  '& svg': {
                    transform: 'translateX(3px)',
                  },
                },
              }}
            >
              See our work
            </Button>
          </Stack>

          {/* Stats Bar with Icon Badges (Matching Image 2) */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 3, sm: 5, md: 6 }}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
          >
            {/* Stat 1: 180+ Engineers & Consultants */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(30, 77, 140, 0.35)',
                  border: '1px solid rgba(62, 146, 204, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <SeniorTeamsIcon sx={{ fontSize: 20, color: '#3E92CC' }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: '#FFFFFF',
                    fontSize: '1.5rem',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  180+
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    mt: 0.3,
                  }}
                >
                  Engineers & Consultants
                </Typography>
              </Box>
            </Stack>

            {/* Stat 2: 120+ Clients Served */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(30, 77, 140, 0.35)',
                  border: '1px solid rgba(62, 146, 204, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3E92CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: '#FFFFFF',
                    fontSize: '1.5rem',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  120+
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    mt: 0.3,
                  }}
                >
                  Clients Served
                </Typography>
              </Box>
            </Stack>

            {/* Stat 3: 14 Countries Delivered In */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(30, 77, 140, 0.35)',
                  border: '1px solid rgba(62, 146, 204, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <GlobalIcon sx={{ fontSize: 20, color: '#3E92CC' }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: '#FFFFFF',
                    fontSize: '1.5rem',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  14
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    mt: 0.3,
                  }}
                >
                  Countries Delivered In
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* 3. WHAT WE DO / ENTERPRISE IT SERVICES & CAPABILITIES */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 7, md: 9 },
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 0, sm: 1 } }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: { xs: '20px', md: '24px' },
              border: '1px solid #D9E5F2',
              boxShadow: '0 4px 24px rgba(11, 31, 58, 0.04)',
              p: { xs: 3.5, sm: 5, md: 6 },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Section Header */}
            <Box sx={{ mb: { xs: 4.5, md: 5.5 }, textAlign: 'left', position: 'relative', zIndex: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: '#1E4D8C',
                    fontWeight: 700,
                    letterSpacing: 2,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}
                >
                  WHAT WE DO
                </Typography>
                <Box sx={{ width: 34, height: 2, backgroundColor: '#1E4D8C', borderRadius: 1 }} />
              </Stack>

              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: '"Inter", "Plus Jakarta Sans", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  color: '#0B1F3A',
                  fontWeight: 800,
                  fontSize: { xs: '1.85rem', sm: '2.3rem', md: '2.6rem' },
                  letterSpacing: '-0.5px',
                  lineHeight: 1.2,
                  mb: 1.5,
                }}
              >
                Enterprise IT Services &{' '}
                <Box component="span" sx={{ color: '#3E92CC' }}>
                  Capabilities
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#475569',
                  maxWidth: '680px',
                  lineHeight: 1.65,
                  fontSize: { xs: '0.95rem', md: '1.02rem' },
                }}
              >
                A full-spectrum portfolio of technology services, enabling clients to engage us for specialized solutions or end-to-end digital delivery.
              </Typography>
            </Box>

            {/* 4 Cards Per Row Grid (12 items: 4 columns desktop, 2 columns tablet, 1 column mobile) */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gap: { xs: 2.5, md: 3 },
                alignItems: 'stretch',
              }}
            >
              {servicesList.map((service) => (
                <Card
                  key={service.name}
                  elevation={0}
                  onClick={() => handleNavigation('Services')}
                  sx={{
                    cursor: 'pointer',
                    borderRadius: '12px',
                    backgroundColor: '#F2F5F9',
                    border: '1px solid #D9E5F2',
                    boxShadow: '0 4px 14px rgba(11, 31, 58, 0.05)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    p: { xs: 2.8, md: 3.2 },
                    minHeight: { xs: 185, md: 200 },
                    overflow: 'hidden',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      backgroundColor: '#FFFFFF',
                      borderColor: '#1E4D8C',
                      boxShadow: '0 12px 28px rgba(11, 31, 58, 0.1)',
                      '& .card-title': {
                        color: '#1E4D8C',
                      },
                      '& .card-icon-badge': {
                        backgroundColor: 'rgba(62, 146, 204, 0.18)',
                        color: '#1E4D8C',
                      },
                      '& .card-arrow-circle': {
                        backgroundColor: '#1E4D8C',
                        color: '#FFFFFF',
                        transform: 'translateX(3px)',
                        boxShadow: '0 3px 8px rgba(30, 77, 140, 0.25)',
                      },
                    },
                  }}
                >
                  {/* Top-left Icon Badge: very light Sky/Blue tint */}
                  <Box
                    className="card-icon-badge"
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: '10px',
                      backgroundColor: '#E4EEF8',
                      color: '#3E92CC',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.2,
                      transition: 'all 0.25s ease',
                      flexShrink: 0,
                    }}
                  >
                    {service.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    className="card-title"
                    sx={{
                      fontWeight: 700,
                      color: '#0B1F3A',
                      fontSize: '1.02rem',
                      lineHeight: 1.35,
                      mb: 1,
                      letterSpacing: '-0.01em',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {service.name}
                  </Typography>

                  {/* Description: readable medium-dark blue/gray */}
                  <Typography
                    sx={{
                      color: '#42546B',
                      fontSize: '0.86rem',
                      lineHeight: 1.55,
                      mb: 2,
                      pr: 3.5,
                      flexGrow: 1,
                    }}
                  >
                    {service.desc}
                  </Typography>

                  {/* Bottom-right Arrow/Action Indicator */}
                  <Box
                    className="card-arrow-circle"
                    sx={{
                      position: 'absolute',
                      bottom: { xs: 16, md: 20 },
                      right: { xs: 16, md: 20 },
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      backgroundColor: '#E4EEF8',
                      color: '#1E4D8C',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <ArrowIcon sx={{ fontSize: 14 }} />
                  </Box>
                </Card>
              ))}
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* 4. SECTORS WE SERVE / INDUSTRIES PREVIEW */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 7, md: 9 },
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          backgroundColor: '#FFFFFF',
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 0, sm: 1 } }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: { xs: '20px', md: '28px' },
              border: '1px solid #D9E5F2',
              boxShadow: '0 4px 24px rgba(11, 31, 58, 0.04)',
              p: { xs: 3.5, sm: 5, md: 6 },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Header inside the white panel */}
            <Box sx={{ mb: { xs: 4.5, md: 5.5 }, textAlign: 'left' }}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: '#1E4D8C',
                    fontWeight: 700,
                    letterSpacing: 2,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}
                >
                  SECTORS WE SERVE
                </Typography>
                <Box sx={{ width: 34, height: 2, backgroundColor: '#1E4D8C', borderRadius: 1 }} />
              </Stack>

              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: '"Inter", "Plus Jakarta Sans", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  color: '#0B1F3A',
                  fontWeight: 800,
                  fontSize: { xs: '1.85rem', sm: '2.3rem', md: '2.6rem' },
                  letterSpacing: '-0.5px',
                  mb: 1.5,
                  lineHeight: 1.2,
                }}
              >
                Domain Fluency Across{' '}
                <Box component="span" sx={{ color: '#3E92CC' }}>
                  Key Industries
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#475569',
                  maxWidth: '640px',
                  lineHeight: 1.65,
                  fontSize: { xs: '0.95rem', md: '1.02rem' },
                }}
              >
                Our teams bring deep industry experience, allowing us to speak the language of your business from day one.
              </Typography>
            </Box>

            {/* 4 Industry Cards */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gap: { xs: 2.5, sm: 2.5, md: 3 },
                alignItems: 'stretch',
              }}
            >
              {industriesList.map((ind) => (
                <Card
                  key={ind.title}
                  elevation={0}
                  sx={{
                    height: '100%',
                    minHeight: { xs: 300, sm: 330 },
                    borderRadius: '14px',
                    backgroundColor: '#F2F5F9',
                    border: '1px solid #D9E5F2',
                    boxShadow: '0 4px 14px rgba(11, 31, 58, 0.05)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      backgroundColor: '#FFFFFF',
                      borderColor: '#3E92CC',
                      boxShadow: '0 12px 28px rgba(11, 31, 58, 0.1)',
                      '& .sector-icon-badge': {
                        backgroundColor: 'rgba(62, 146, 204, 0.18)',
                        color: '#1E4D8C',
                      },
                      '& .sector-arrow-badge': {
                        backgroundColor: '#1E4D8C',
                        color: '#FFFFFF',
                        transform: 'translateX(3px)',
                        boxShadow: '0 2px 8px rgba(30, 77, 140, 0.25)',
                      },
                      '& .sector-learn-more': {
                        color: '#1E4D8C',
                      },
                    },
                  }}
                >
                  <CardActionArea
                    onClick={() => handleNavigation('Industry')}
                    sx={{
                      p: { xs: 3, sm: 3.5 },
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      position: 'relative',
                      zIndex: 1,
                      textAlign: 'left',
                    }}
                  >
                    <Box sx={{ width: '100%' }}>
                      {/* Top-left Icon Box: Sky/Blue tint */}
                      <Box
                        className="sector-icon-badge"
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          backgroundColor: '#E4EEF8',
                          color: '#3E92CC',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2.8,
                          transition: 'all 0.25s ease',
                          flexShrink: 0,
                        }}
                      >
                        {ind.icon}
                      </Box>

                      {/* Title: #0B1F3A */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: '#0B1F3A',
                          fontSize: '1.15rem',
                          lineHeight: 1.3,
                          mb: 1.2,
                          minHeight: { sm: '2.6em' },
                          display: 'flex',
                          alignItems: 'flex-start',
                          textAlign: 'left',
                        }}
                      >
                        {ind.title}
                      </Typography>

                      {/* Description: readable medium-dark blue/gray */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#42546B',
                          fontSize: '0.88rem',
                          lineHeight: 1.6,
                          textAlign: 'left',
                        }}
                      >
                        {ind.desc}
                      </Typography>
                    </Box>

                    {/* Bottom Action: "Learn more" + arrow button */}
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 3.5, pt: 1 }}>
                      <Typography
                        variant="body2"
                        className="sector-learn-more"
                        sx={{
                          color: '#1E4D8C',
                          fontWeight: 600,
                          fontSize: '0.92rem',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        Learn more
                      </Typography>
                      <Box
                        className="sector-arrow-badge"
                        sx={{
                          width: 26,
                          height: 26,
                          borderRadius: '50%',
                          backgroundColor: '#E4EEF8',
                          color: '#3E92CC',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.25s ease',
                        }}
                      >
                        <ArrowIcon sx={{ fontSize: 14 }} />
                      </Box>
                    </Stack>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* 5. WHY NORTHNODE ANALYTICS */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          py: { xs: 7, md: 9 },
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          backgroundColor: '#FFFFFF',
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 0, sm: 1 } }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: { xs: '20px', md: '28px' },
              border: '1px solid #D9E5F2',
              boxShadow: '0 4px 24px rgba(11, 31, 58, 0.04)',
              p: { xs: 3.5, sm: 5, md: 6 },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Header section inside the white panel */}
            <Box sx={{ mb: { xs: 4.5, md: 5.5 }, textAlign: 'left' }}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: '#1E4D8C',
                    fontWeight: 700,
                    letterSpacing: 2,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}
                >
                  WHY NORTHNODE ANALYTICS
                </Typography>
                <Box sx={{ width: 34, height: 2, backgroundColor: '#1E4D8C', borderRadius: 1 }} />
              </Stack>

              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: '"Inter", "Plus Jakarta Sans", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  color: '#0B1F3A',
                  fontWeight: 800,
                  fontSize: { xs: '1.85rem', sm: '2.3rem', md: '2.6rem' },
                  letterSpacing: '-0.5px',
                  mb: 1.5,
                  lineHeight: 1.2,
                }}
              >
                Engineered for{' '}
                <Box component="span" sx={{ color: '#3E92CC' }}>
                  Speed, Scale & Trust
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#475569',
                  maxWidth: '640px',
                  lineHeight: 1.65,
                  fontSize: { xs: '0.95rem', md: '1.02rem' },
                }}
              >
                We combine deep technical expertise with a customer-first approach to deliver reliable, scalable and secure solutions for your business.
              </Typography>
            </Box>

            {/* 3 Cards in 1 Row */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(3, 1fr)',
                },
                gap: { xs: 2.5, sm: 2.5, md: 3 },
                alignItems: 'stretch',
                mb: 4.5,
              }}
            >
              {whyChooseUsHighlights.map((highlight) => (
                <Card
                  key={highlight.title}
                  elevation={0}
                  sx={{
                    height: '100%',
                    minHeight: { xs: 290, sm: 320 },
                    borderRadius: '14px',
                    backgroundColor: '#F2F5F9',
                    border: '1px solid #D9E5F2',
                    boxShadow: '0 4px 14px rgba(11, 31, 58, 0.05)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      backgroundColor: '#FFFFFF',
                      borderColor: '#3E92CC',
                      boxShadow: '0 12px 28px rgba(11, 31, 58, 0.1)',
                      '& .why-icon-badge': {
                        backgroundColor: 'rgba(62, 146, 204, 0.18)',
                        color: '#1E4D8C',
                      },
                      '& .why-arrow-badge': {
                        backgroundColor: '#1E4D8C',
                        color: '#FFFFFF',
                        transform: 'translateX(3px)',
                        boxShadow: '0 2px 8px rgba(30, 77, 140, 0.25)',
                      },
                    },
                  }}
                >
                  <CardActionArea
                    onClick={() => handleNavigation('About Us')}
                    sx={{
                      p: { xs: 3.5, sm: 4 },
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      position: 'relative',
                      zIndex: 1,
                      textAlign: 'left',
                    }}
                  >
                    <Box sx={{ width: '100%' }}>
                      {/* Top-left Icon Box: Sky/Blue tint */}
                      <Box
                        className="why-icon-badge"
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          backgroundColor: '#E4EEF8',
                          color: '#3E92CC',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2.8,
                          transition: 'all 0.25s ease',
                          flexShrink: 0,
                        }}
                      >
                        {highlight.icon}
                      </Box>

                      {/* Title: Navy #0B1F3A */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: '#0B1F3A',
                          fontSize: '1.18rem',
                          lineHeight: 1.3,
                          mb: 1.2,
                          textAlign: 'left',
                          width: '100%',
                        }}
                      >
                        {highlight.title}
                      </Typography>

                      {/* Description: readable dark blue/gray */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#42546B',
                          fontSize: '0.88rem',
                          lineHeight: 1.6,
                          textAlign: 'left',
                          width: '100%',
                        }}
                      >
                        {highlight.desc}
                      </Typography>
                    </Box>

                    {/* Bottom-left arrow button */}
                    <Box
                      className="why-arrow-badge"
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        backgroundColor: '#E4EEF8',
                        color: '#3E92CC',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 3.5,
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <ArrowIcon sx={{ fontSize: 14 }} />
                    </Box>
                  </CardActionArea>
                </Card>
              ))}
            </Box>

            {/* Read Full Company Profile & Values link inside the white panel */}
            <Box sx={{ textAlign: 'left', pt: 0.5 }}>
              <Button
                variant="text"
                onClick={() => handleNavigation('About Us')}
                sx={{
                  p: 0,
                  color: '#1E4D8C',
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: '0.94rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#3E92CC',
                    '& svg': {
                      transform: 'translateX(4px)',
                      color: '#1E4D8C',
                    },
                  },
                }}
              >
                Read Full Company Profile & Values
                <ArrowIcon sx={{ fontSize: 16, color: '#3E92CC', transition: 'all 0.2s ease' }} />
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* 6. FINAL CTA BANNER */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 }, mb: { xs: 3, md: 4 } }}>
        <Paper
          elevation={0}
          sx={{
            position: 'relative',
            borderRadius: { xs: '18px', md: '24px' },
            overflow: 'hidden',
            backgroundColor: '#1E4D8C',
            boxShadow: '0 16px 40px -10px rgba(30, 77, 140, 0.3)',
            py: { xs: 5.5, sm: 6.5, md: 7.5 },
            px: { xs: 3, sm: 5, md: 7 },
            textAlign: 'center',
          }}
        >
          {/* Eyebrow / Tagline */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1.5}
            sx={{ mb: 2 }}
          >
            <Box
              sx={{
                width: { xs: 24, sm: 30 },
                height: '1.5px',
                backgroundColor: '#3E92CC',
                opacity: 0.85,
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: '#3E92CC',
                fontWeight: 700,
                letterSpacing: '0.14em',
                fontSize: { xs: '0.72rem', sm: '0.8rem' },
                textTransform: 'uppercase',
                fontFamily: '"Inter", "Plus Jakarta Sans", "Roboto", sans-serif',
              }}
            >
              LET’S BUILD TOGETHER
            </Typography>
            <Box
              sx={{
                width: { xs: 24, sm: 30 },
                height: '1.5px',
                backgroundColor: '#3E92CC',
                opacity: 0.85,
              }}
            />
          </Stack>

          {/* Heading */}
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              color: '#FFFFFF',
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.6rem' },
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              mb: 2,
              fontFamily: '"Inter", "Plus Jakarta Sans", "Roboto", sans-serif',
            }}
          >
            Let’s Build Something{' '}
            <Box
              component="span"
              sx={{
                color: '#3E92CC',
              }}
            >
              Intelligent Together
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: { xs: '0.92rem', sm: '1.02rem' },
              lineHeight: 1.6,
              maxWidth: '560px',
              mx: 'auto',
              mb: { xs: 4, sm: 4.5 },
              fontFamily: '"Inter", "Plus Jakarta Sans", "Roboto", sans-serif',
            }}
          >
            Reach out to discuss how NorthNode Analytics can support your next digital initiative.
          </Typography>

          {/* Primary Action Button */}
          <Button
            variant="contained"
            disableElevation
            onClick={() => handleNavigation('Contact Us')}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1.2,
              px: { xs: 4, sm: 4.5 },
              py: { xs: 1.3, sm: 1.45 },
              borderRadius: '50px',
              backgroundColor: '#FFFFFF',
              color: '#1E4D8C',
              fontWeight: 700,
              fontSize: { xs: '0.92rem', sm: '0.98rem' },
              textTransform: 'none',
              boxShadow: '0 4px 16px rgba(11, 31, 58, 0.2)',
              transition: 'all 0.25s ease',
              '&:hover': {
                backgroundColor: '#3E92CC',
                color: '#FFFFFF',
                boxShadow: '0 8px 24px rgba(62, 146, 204, 0.45)',
                transform: 'translateY(-2px)',
                '& svg': {
                  transform: 'translateX(3px)',
                },
              },
            }}
          >
            Contact Us
            <Box
              component="svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              sx={{ transition: 'transform 0.2s ease', ml: 0.2 }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </Box>
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

HomeComponent.propTypes = {
  onNavigate: PropTypes.func,
};

export default HomeComponent;

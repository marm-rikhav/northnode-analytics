import React from 'react';
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
  ShoppingCart as RetailIcon,
  LocalShipping as LogisticsIcon,
  Public as GlobalIcon,
  Groups as SeniorTeamsIcon,
  Layers as FullStackIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';
import contactUsBg from './homeassests/contactusImg.png';
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
    color: '#2563EB',
    stripe: '#1D72FE',
    bg: '#EFF6FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Web Developments',
    desc: 'Modern, responsive and scalable web applications for your business.',
    color: '#059669',
    stripe: '#10B981',
    bg: '#ECFDF5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: 'Mobile App Development',
    desc: 'High-performance mobile apps for iOS and Android platforms.',
    color: '#9333EA',
    stripe: '#8B5CF6',
    bg: '#F5F3FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: 'Cloud Solutions',
    desc: 'Scalable, secure and cost-efficient cloud infrastructure and services.',
    color: '#0284C7',
    stripe: '#0EA5E9',
    bg: '#F0F9FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    name: 'Data Analytics',
    desc: 'Turn data into actionable insights for smarter decisions.',
    color: '#C026D3',
    stripe: '#A855F7',
    bg: '#FDF4FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C026D3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 20V14" />
        <path d="M12 20V8" />
        <path d="M18 20V12" />
      </svg>
    ),
  },
  {
    name: 'Artificial Intelligence',
    desc: 'Intelligent solutions to automate, optimize and innovate.',
    color: '#EA580C',
    stripe: '#F59E0B',
    bg: '#FFF7ED',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
      </svg>
    ),
  },
  {
    name: 'Machine Learning',
    desc: 'Build intelligent systems that learn and evolve.',
    color: '#0D9488',
    stripe: '#10B981',
    bg: '#ECFDF5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" />
      </svg>
    ),
  },
  {
    name: 'DevOps',
    desc: 'Faster delivery, better collaboration and reliable operations.',
    color: '#7C3AED',
    stripe: '#8B5CF6',
    bg: '#F5F3FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    name: 'UI/UX Design',
    desc: 'User-centric designs that create meaningful experiences.',
    color: '#2563EB',
    stripe: '#3B82F6',
    bg: '#EFF6FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    name: 'Cybersecurity',
    desc: 'Proactive security for a safer digital tomorrow.',
    color: '#059669',
    stripe: '#10B981',
    bg: '#ECFDF5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    name: 'QA & Testing',
    desc: 'Ensure quality, performance and reliability at every stage.',
    color: '#6366F1',
    stripe: '#8B5CF6',
    bg: '#EEF2FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'IT Consulting',
    desc: 'Strategic guidance to help you achieve your technology goals.',
    color: '#0284C7',
    stripe: '#0284C7',
    bg: '#F0F9FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
];

const HeartPulseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="#0D9488"
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
    icon: <FinanceIcon sx={{ fontSize: 28, color: '#2563EB' }} />,
    bg: '#EBF3FE',
    glow: 'radial-gradient(circle at 100% 100%, rgba(191, 219, 254, 0.7) 0%, rgba(219, 234, 254, 0.3) 50%, rgba(255, 255, 255, 0) 75%)',
  },
  {
    title: 'Healthcare & Life Sciences',
    desc: 'Enabling better outcomes with technology that supports patients, providers and research.',
    icon: <HeartPulseIcon />,
    bg: '#E6F7F5',
    glow: 'radial-gradient(circle at 100% 100%, rgba(153, 246, 228, 0.7) 0%, rgba(204, 251, 241, 0.3) 50%, rgba(255, 255, 255, 0) 75%)',
  },
  {
    title: 'Retail & E-Commerce',
    desc: 'Building seamless digital experiences that drive engagement, loyalty and growth.',
    icon: <RetailIcon sx={{ fontSize: 28, color: '#7C3AED' }} />,
    bg: '#F3EEFF',
    glow: 'radial-gradient(circle at 100% 100%, rgba(233, 213, 255, 0.7) 0%, rgba(243, 232, 255, 0.3) 50%, rgba(255, 255, 255, 0) 75%)',
  },
  {
    title: 'Manufacturing & Logistics',
    desc: 'Optimizing operations with smart, connected and data-driven solutions.',
    icon: <LogisticsIcon sx={{ fontSize: 28, color: '#EA580C' }} />,
    bg: '#FFF4EB',
    glow: 'radial-gradient(circle at 100% 100%, rgba(254, 215, 170, 0.7) 0%, rgba(255, 237, 213, 0.3) 50%, rgba(255, 255, 255, 0) 75%)',
  }
];

const whyChooseUsHighlights = [
  {
    title: 'Canadian-Based Precision',
    desc: 'Canadian-based, driven with a global perspective and a commitment to excellence in everything we do.',
    icon: <GlobalIcon sx={{ fontSize: 28, color: '#2563EB' }} />
  },
  {
    title: 'Senior-Led Teams',
    desc: 'Every engagement is guided by an experienced leadership team with deep industry and technical expertise.',
    icon: <SeniorTeamsIcon sx={{ fontSize: 28, color: '#2563EB' }} />
  },
  {
    title: 'Full-Stack Competency',
    desc: 'Deep bench across software, cloud, data, and AI — one partner, full-stack capability.',
    icon: <FullStackIcon sx={{ fontSize: 28, color: '#2563EB' }} />
  }
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

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          {/* Subtitle / Est location line */}
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
            <Box sx={{ width: 28, height: 2.5, backgroundColor: '#1D72FE', borderRadius: 1 }} />
            <Typography
              variant="caption"
              sx={{
                color: '#E2E8F0',
                fontWeight: 600,
                letterSpacing: 0.5,
                fontSize: '0.92rem',
                textTransform: 'none',
              }}
            >
              Toronto · Est. 2016
            </Typography>
          </Stack>

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
                color: '#38BDF8',
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
              color: '#94A3B8',
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
                backgroundColor: '#1D72FE',
                color: '#FFFFFF',
                fontWeight: 700,
                px: 3.5,
                py: 1.5,
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '1rem',
                boxShadow: '0 4px 16px rgba(29, 114, 254, 0.35)',
                '&:hover': {
                  backgroundColor: '#0D62EE',
                  boxShadow: '0 8px 24px rgba(29, 114, 254, 0.5)',
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
                borderColor: 'rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                fontWeight: 600,
                px: 3,
                py: 1.4,
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                '&:hover': {
                  borderColor: '#38BDF8',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#38BDF8',
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
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <SeniorTeamsIcon sx={{ fontSize: 20, color: '#38BDF8' }} />
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
                    color: '#94A3B8',
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
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                    color: '#94A3B8',
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
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <GlobalIcon sx={{ fontSize: 20, color: '#38BDF8' }} />
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
                    color: '#94A3B8',
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

      {/* 3. SERVICE PREVIEW (Exact match to target UI Screenshot) */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 10 },
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          overflow: 'hidden',
          backgroundColor: '#F8FAFC',
          background: 'radial-gradient(ellipse 70% 50% at 88% 12%, rgba(219, 234, 254, 0.55) 0%, rgba(248, 250, 252, 0) 70%), radial-gradient(ellipse 60% 40% at 10% 88%, rgba(219, 234, 254, 0.45) 0%, rgba(248, 250, 252, 0) 70%), #F8FAFC',
        }}
      >
        {/* Decorative Dot Matrix Top Right */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 20, md: 35 },
            right: { xs: 20, md: 45 },
            width: { xs: 100, md: 135 },
            height: { xs: 70, md: 90 },
            opacity: 0.45,
            pointerEvents: 'none',
            zIndex: 0,
            backgroundImage: 'radial-gradient(#3B82F6 1.8px, transparent 1.8px)',
            backgroundSize: '15px 15px',
          }}
        />

        {/* Decorative Dot Matrix Bottom Left */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 20, md: 35 },
            left: { xs: 20, md: 45 },
            width: { xs: 100, md: 135 },
            height: { xs: 70, md: 90 },
            opacity: 0.4,
            pointerEvents: 'none',
            zIndex: 0,
            backgroundImage: 'radial-gradient(#3B82F6 1.8px, transparent 1.8px)',
            backgroundSize: '15px 15px',
          }}
        />

        {/* Section Header */}
        <Box sx={{ position: 'relative', zIndex: 1, mb: 5, textAlign: 'left', maxWidth: '1440px', mx: 'auto' }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
            <Typography
              sx={{
                color: '#1D72FE',
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              WHAT WE DO
            </Typography>
            <Box sx={{ width: 32, height: 2, backgroundColor: '#1D72FE', borderRadius: 1 }} />
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Inter", "Plus Jakarta Sans", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              color: '#0B1F3A',
              fontWeight: 800,
              fontSize: { xs: '1.9rem', sm: '2.4rem', md: '2.85rem' },
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              mb: 1.5,
            }}
          >
            Enterprise IT Services &{' '}
            <Box component="span" sx={{ color: '#1D72FE' }}>
              Capabilities
            </Box>
          </Typography>
          <Typography
            sx={{
              color: '#64748B',
              maxWidth: '720px',
              lineHeight: 1.6,
              fontSize: { xs: '0.95rem', md: '1.02rem' },
              fontWeight: 400,
            }}
          >
            A full-spectrum portfolio of technology services, enabling clients to engage us for specialized solutions or end-to-end digital delivery.
          </Typography>
        </Box>

        {/* 4 Cards Per Row Grid (12 items matching attached snapshot) */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1440px',
            mx: 'auto',
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
          {servicesList.map((service, index) => (
            <Card
              key={service.name}
              elevation={0}
              onClick={() => handleNavigation('Services')}
              sx={{
                cursor: 'pointer',
                borderRadius: '16px',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(226, 232, 240, 0.85)',
                borderLeft: `4px solid ${service.stripe}`,
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.03)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                p: { xs: 2.5, md: 3 },
                minHeight: { xs: 175, md: 190 },
                overflow: 'hidden',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 14px 30px rgba(37, 99, 235, 0.12), -2px 0 10px ${service.stripe}33`,
                  borderColor: 'rgba(59, 130, 246, 0.35)',
                  borderLeftColor: service.stripe,
                  '& .card-arrow-circle': {
                    backgroundColor: service.stripe,
                    color: '#FFFFFF',
                    transform: 'translateX(2px)',
                    boxShadow: `0 4px 10px ${service.stripe}55`,
                  },
                },
              }}
            >
              {/* Left Accent Pill Stripe */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: '4px',
                  backgroundColor: service.stripe,
                  borderTopLeftRadius: '16px',
                  borderBottomLeftRadius: '16px',
                }}
              />
              {/* Top-left Pastel Icon Badge */}
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  backgroundColor: service.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                {service.icon}
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#0F172A',
                  fontSize: '1.02rem',
                  lineHeight: 1.3,
                  mb: 0.8,
                  letterSpacing: '-0.01em',
                }}
              >
                {service.name}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: '#64748B',
                  fontSize: '0.84rem',
                  lineHeight: 1.5,
                  mb: 1,
                  pr: 3.5,
                  flexGrow: 1,
                }}
              >
                {service.desc}
              </Typography>

              {/* Bottom-right Arrow Circle */}
              <Box
                className="card-arrow-circle"
                sx={{
                  position: 'absolute',
                  bottom: { xs: 16, md: 20 },
                  right: { xs: 16, md: 20 },
                  width: 26,
                  height: 26,
                  borderRadius: '50%',
                  backgroundColor: '#EFF6FF',
                  color: '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                }}
              >
                <Box
                  component="svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* 4. INDUSTRIES PREVIEW (Exact match to target UI Image 2) */}
      <Box
        sx={{
          position: 'relative',
          mb: 10,
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 4, md: 6 },
          overflow: 'hidden',
        }}
      >
        {/* Ambient background glow top right */}
        <Box
          sx={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: { xs: 280, md: 450 },
            height: { xs: 280, md: 450 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(191, 219, 254, 0.5) 0%, rgba(224, 242, 254, 0.2) 50%, rgba(255, 255, 255, 0) 75%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Ambient background glow bottom left */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: { xs: 240, md: 380 },
            height: { xs: 240, md: 380 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(191, 219, 254, 0.4) 0%, rgba(224, 242, 254, 0.15) 50%, rgba(255, 255, 255, 0) 75%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 1, mb: 5, textAlign: 'left' }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
            <Typography
              variant="overline"
              sx={{
                color: '#1D4ED8',
                fontWeight: 700,
                letterSpacing: 1.5,
                fontSize: '0.85rem',
                lineHeight: 1,
              }}
            >
              SECTORS WE SERVE
            </Typography>
            <Box sx={{ width: 36, height: 2, backgroundColor: '#1D4ED8', borderRadius: 1 }} />
          </Stack>

          <Typography
            variant="h4"
            sx={{
              color: '#0B1F3A',
              fontWeight: 800,
              fontSize: { xs: '1.9rem', sm: '2.3rem', md: '2.6rem' },
              letterSpacing: '-0.5px',
              mb: 1.5,
            }}
          >
            Domain Fluency Across Key Industries
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#475569',
              maxWidth: '600px',
              lineHeight: 1.6,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
            }}
          >
            Our teams bring deep industry experience, allowing us to speak the language of your business from day one.
          </Typography>
        </Box>

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
            '@media (min-width: 768px)': {
              gridTemplateColumns: 'repeat(4, 1fr)',
            },
            gap: { xs: 2.5, sm: 2.5, md: 3 },
            alignItems: 'stretch',
          }}
        >
          {industriesList.map((ind, index) => (
            <Card
              key={ind.title}
              elevation={0}
              sx={{
                height: '100%',
                minHeight: { xs: 320, sm: 360 },
                borderRadius: '24px',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                animation: 'fadeInUp 0.5s ease-out forwards',
                animationDelay: `${index * 50}ms`,
                '@keyframes fadeInUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(16px)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 16px 36px rgba(30, 77, 140, 0.12)',
                  borderColor: '#93C5FD',
                  '& .sector-arrow-badge': {
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    transform: 'scale(1.08)',
                  },
                  '& .sector-arrow-badge svg': {
                    transform: 'translateX(2px)',
                  },
                },
              }}
            >
              {/* Bottom-right decorative corner gradient orb */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -15,
                  right: -15,
                  width: 135,
                  height: 135,
                  borderRadius: '50%',
                  background: ind.glow,
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

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
                {/* Top-left Icon Box with themed background */}
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: '16px',
                    backgroundColor: ind.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {ind.icon}
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: '#0B1F3A',
                    fontSize: '1.22rem',
                    lineHeight: 1.3,
                    mb: 1.5,
                    minHeight: '2.8em',
                    display: 'flex',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                  }}
                >
                  {ind.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748B',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    mb: 3,
                    flexGrow: 1,
                    textAlign: 'left',
                  }}
                >
                  {ind.desc}
                </Typography>

                {/* Bottom Action: "Learn more" + circular arrow button */}
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 'auto' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#2563EB',
                      fontWeight: 600,
                      fontSize: '0.92rem',
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
                      backgroundColor: '#EBF3FE',
                      color: '#2563EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <ArrowIcon sx={{ fontSize: 16, transition: 'all 0.3s ease-in-out' }} />
                  </Box>
                </Stack>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>

      {/* 5. WHY CHOOSE US (Exact match to target UI Screenshot Image 2) */}
      <Box
        sx={{
          position: 'relative',
          mb: 10,
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 4, md: 6 },
          overflow: 'hidden',
        }}
      >
        {/* Ambient background glow top right */}
        <Box
          sx={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: { xs: 280, md: 450 },
            height: { xs: 280, md: 450 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(191, 219, 254, 0.5) 0%, rgba(224, 242, 254, 0.2) 50%, rgba(255, 255, 255, 0) 75%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Ambient background glow bottom left */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: { xs: 240, md: 380 },
            height: { xs: 240, md: 380 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(191, 219, 254, 0.4) 0%, rgba(224, 242, 254, 0.15) 50%, rgba(255, 255, 255, 0) 75%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Header */}
        <Box sx={{ position: 'relative', zIndex: 1, mb: 5, textAlign: 'left' }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
            <Typography
              variant="overline"
              sx={{
                color: '#1D4ED8',
                fontWeight: 700,
                letterSpacing: 1.5,
                fontSize: '0.85rem',
                lineHeight: 1,
              }}
            >
              WHY NORTHNODE ANALYTICS
            </Typography>
            <Box sx={{ width: 36, height: 2, backgroundColor: '#1D4ED8', borderRadius: 1 }} />
          </Stack>

          <Typography
            variant="h4"
            sx={{
              color: '#0B1F3A',
              fontWeight: 800,
              fontSize: { xs: '1.9rem', sm: '2.3rem', md: '2.6rem' },
              letterSpacing: '-0.5px',
            }}
          >
            Engineered for Speed, Scale & Trust
          </Typography>
        </Box>

        {/* 3 Cards in 1 Row */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            '@media (min-width: 768px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            gap: { xs: 2.5, sm: 2.5, md: 3 },
            alignItems: 'stretch',
          }}
        >
          {whyChooseUsHighlights.map((highlight, index) => (
            <Card
              key={highlight.title}
              elevation={0}
              sx={{
                height: '100%',
                minHeight: { xs: 280, sm: 320 },
                borderRadius: '24px',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                animation: 'fadeInUp 0.5s ease-out forwards',
                animationDelay: `${index * 50}ms`,
                '@keyframes fadeInUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(16px)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 16px 36px rgba(30, 77, 140, 0.12)',
                  borderColor: '#93C5FD',
                  '& .why-arrow-badge': {
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    transform: 'scale(1.08)',
                  },
                  '& .why-arrow-badge svg': {
                    transform: 'translateX(2px)',
                  },
                },
              }}
            >
              {/* Bottom-right decorative corner gradient orb */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -15,
                  right: -15,
                  width: 130,
                  height: 130,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 100% 100%, rgba(191, 219, 254, 0.6) 0%, rgba(224, 242, 254, 0.25) 50%, rgba(255, 255, 255, 0) 75%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              <CardActionArea
                onClick={() => handleNavigation('About Us')}
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
                {/* Top-left Icon Box with themed background */}
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: '16px',
                    backgroundColor: '#EBF3FE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {highlight.icon}
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: '#0B1F3A',
                    fontSize: '1.25rem',
                    lineHeight: 1.3,
                    mb: 1.5,
                    textAlign: 'left',
                    width: '100%',
                  }}
                >
                  {highlight.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748B',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    mb: 3,
                    flexGrow: 1,
                    textAlign: 'left',
                    width: '100%',
                  }}
                >
                  {highlight.desc}
                </Typography>

                {/* Bottom-left arrow button */}
                <Box
                  className="why-arrow-badge"
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    backgroundColor: '#EBF3FE',
                    color: '#2563EB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 'auto',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ArrowIcon sx={{ fontSize: 16, transition: 'all 0.3s ease-in-out' }} />
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>

        {/* Read Full Company Profile & Values link */}
        <Box sx={{ position: 'relative', zIndex: 1, mt: 4, textAlign: 'left' }}>
          <Button
            variant="text"
            onClick={() => handleNavigation('About Us')}
            sx={{
              p: 0,
              color: '#2563EB',
              fontWeight: 700,
              textTransform: 'none',
              fontSize: '0.96rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#1D4ED8',
                '& svg': {
                  transform: 'translateX(4px)',
                },
              },
            }}
          >
            Read Full Company Profile & Values
            <ArrowIcon sx={{ fontSize: 18, transition: 'transform 0.2s ease' }} />
          </Button>
        </Box>
      </Box>

      {/* 6. CTA BANNER */}
      <Container maxWidth="lg" sx={{ mt: { xs: 5, md: 7 }, mb: { xs: 2, md: 3 } }}>
        <Paper
          elevation={0}
          sx={{
            position: 'relative',
            borderRadius: { xs: 3, md: '20px' },
            overflow: 'hidden',
            backgroundColor: '#05142E',
            backgroundImage: `url(${contactUsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            border: '1px solid rgba(59, 130, 246, 0.18)',
            boxShadow: '0 16px 40px -10px rgba(6, 27, 55, 0.25)',
            py: { xs: 4.5, sm: 5, md: 5.5 },
            px: { xs: 2.5, sm: 4, md: 6 },
            textAlign: 'center',
          }}
        >
          {/* Eyebrow / Tagline */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1.5}
            sx={{ mb: 1.8 }}
          >
            <Box
              sx={{
                width: { xs: 24, sm: 30 },
                height: '1.5px',
                backgroundColor: '#2B8DFE',
                opacity: 0.85,
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: '#2B8DFE',
                fontWeight: 700,
                letterSpacing: '0.14em',
                fontSize: { xs: '0.68rem', sm: '0.74rem' },
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              LET’S BUILD TOGETHER
            </Typography>
            <Box
              sx={{
                width: { xs: 24, sm: 30 },
                height: '1.5px',
                backgroundColor: '#2B8DFE',
                opacity: 0.85,
              }}
            />
          </Stack>

          {/* Heading */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 800,
              color: '#FFFFFF',
              fontSize: { xs: '1.5rem', sm: '1.85rem', md: '2.1rem' },
              letterSpacing: '-0.015em',
              lineHeight: 1.25,
              mb: 1.5,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Let’s Build Something{' '}
            <Box
              component="span"
              sx={{
                color: '#2B8DFE',
              }}
            >
              Intelligent Together
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              color: '#94A3B8',
              fontSize: { xs: '0.86rem', sm: '0.92rem' },
              lineHeight: 1.55,
              maxWidth: '480px',
              mx: 'auto',
              mb: { xs: 3, md: 3.5 },
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Reach out to discuss how NorthNode Analytics can support your next digital initiative.
          </Typography>

          {/* Action Button */}
          <Button
            variant="contained"
            onClick={() => handleNavigation('Contact Us')}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              px: { xs: 3, sm: 3.5 },
              py: { xs: 1, sm: 1.15 },
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #1E70FD 0%, #298DFE 50%, #389EFE 100%)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: { xs: '0.86rem', sm: '0.9rem' },
              textTransform: 'none',
              boxShadow: '0 4px 18px rgba(36, 137, 253, 0.45)',
              transition: 'all 0.25s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #257DFF 0%, #389BFF 100%)',
                boxShadow: '0 6px 24px rgba(36, 137, 253, 0.65)',
                transform: 'translateY(-1px)',
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
              sx={{ transition: 'transform 0.2s ease', ml: 0.5 }}
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

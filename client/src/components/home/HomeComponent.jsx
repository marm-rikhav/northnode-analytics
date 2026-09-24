import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  Button,
  Chip,
  Paper,
  Stack
} from '@mui/material';
import {
  Code as CodeIcon,
  Web as WebIcon,
  PhoneIphone as MobileIcon,
  Cloud as CloudIcon,
  BarChart as AnalyticsIcon,
  AutoAwesome as AIIcon,
  Hub as MLIcon,
  Build as DevOpsIcon,
  Palette as DesignIcon,
  Security as SecurityIcon,
  FactCheck as QAIcon,
  Lightbulb as ConsultingIcon,
  AccountBalance as FinanceIcon,
  LocalHospital as HealthIcon,
  ShoppingCart as RetailIcon,
  LocalShipping as LogisticsIcon,
  Public as GlobalIcon,
  Groups as SeniorTeamsIcon,
  Layers as FullStackIcon,
  ArrowForward as ArrowIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon
} from '@mui/icons-material';

const COLORS = {
  navy: '#0B1F3A',
  blue: '#1E4D8C',
  sky: '#3E92CC',
  light: '#F2F5F9',
  white: '#FFFFFF',
};

const servicesList = [
  { name: 'Custom Software Development', icon: <CodeIcon fontSize="medium" /> },
  { name: 'Web Development', icon: <WebIcon fontSize="medium" /> },
  { name: 'Mobile App Development', icon: <MobileIcon fontSize="medium" /> },
  { name: 'Cloud Solutions', icon: <CloudIcon fontSize="medium" /> },
  { name: 'Data Analytics', icon: <AnalyticsIcon fontSize="medium" /> },
  { name: 'Artificial Intelligence', icon: <AIIcon fontSize="medium" /> },
  { name: 'Machine Learning', icon: <MLIcon fontSize="medium" /> },
  { name: 'DevOps', icon: <DevOpsIcon fontSize="medium" /> },
  { name: 'UI/UX Design', icon: <DesignIcon fontSize="medium" /> },
  { name: 'Cybersecurity', icon: <SecurityIcon fontSize="medium" /> },
  { name: 'QA & Testing', icon: <QAIcon fontSize="medium" /> },
  { name: 'IT Consulting', icon: <ConsultingIcon fontSize="medium" /> }
];

const industriesList = [
  {
    title: 'Financial Services',
    desc: 'Core banking modernization, fraud analytics & regulatory reporting',
    icon: <FinanceIcon sx={{ fontSize: 36, color: COLORS.sky }} />
  },
  {
    title: 'Healthcare & Life Sciences',
    desc: 'Patient data platforms, secure health records & clinical analytics',
    icon: <HealthIcon sx={{ fontSize: 36, color: COLORS.sky }} />
  },
  {
    title: 'Retail & E-Commerce',
    desc: 'Omnichannel platforms, personalization engines & inventory intelligence',
    icon: <RetailIcon sx={{ fontSize: 36, color: COLORS.sky }} />
  },
  {
    title: 'Manufacturing & Logistics',
    desc: 'IoT-enabled operations, supply chain visibility & predictive maintenance',
    icon: <LogisticsIcon sx={{ fontSize: 36, color: COLORS.sky }} />
  }
];

const whyChooseUsHighlights = [
  {
    title: 'Canadian-Based Precision',
    desc: 'Canadian-based delivery with global engagement experience across 14+ countries.',
    icon: <GlobalIcon sx={{ fontSize: 40, color: COLORS.blue }} />
  },
  {
    title: 'Senior-Led Teams',
    desc: 'Every engagement is guided by an experienced architect or delivery lead.',
    icon: <SeniorTeamsIcon sx={{ fontSize: 40, color: COLORS.blue }} />
  },
  {
    title: 'Full-Stack Competency',
    desc: 'Deep bench across software, cloud, data, and AI — one partner, full-stack capability.',
    icon: <FullStackIcon sx={{ fontSize: 40, color: COLORS.blue }} />
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
      {/* 1. HERO SECTION */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.blue} 100%)`,
          color: COLORS.white,
          py: { xs: 8, md: 10 },
          px: 2,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(11, 31, 58, 0.25)',
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} alignItems="flex-start">
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              <Chip
                icon={<LocationIcon sx={{ color: `${COLORS.sky} !important` }} />}
                label="Toronto, Ontario, Canada"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: COLORS.white,
                  fontWeight: 600,
                  backdropFilter: 'blur(4px)',
                }}
              />
              <Chip
                icon={<CalendarIcon sx={{ color: `${COLORS.sky} !important` }} />}
                label="2026 Profile"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: COLORS.white,
                  fontWeight: 600,
                  backdropFilter: 'blur(4px)',
                }}
              />
            </Stack>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.2rem', sm: '3rem', md: '3.6rem' },
                letterSpacing: -0.5,
                lineHeight: 1.15,
                maxW: '900px',
              }}
            >
              ENGINEERING INTELLIGENT DIGITAL SOLUTIONS
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: COLORS.sky,
                fontWeight: 600,
                fontSize: { xs: '1rem', md: '1.25rem' },
                letterSpacing: 0.5,
              }}
            >
              Software Development · Cloud · Data Analytics · Artificial Intelligence · Cybersecurity
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '1rem', md: '1.15rem' },
                maxWidth: '820px',
                lineHeight: 1.7,
              }}
            >
              NorthNode Analytics is a Toronto-headquartered technology company delivering enterprise-grade software, cloud, and data engineering services to organizations across North America and beyond. We combine deep engineering expertise with a consultative approach to help clients modernize, scale, and compete.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowIcon />}
                onClick={() => handleNavigation('Services')}
                sx={{
                  backgroundColor: COLORS.sky,
                  color: COLORS.navy,
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.05rem',
                  boxShadow: '0 4px 14px rgba(62, 146, 204, 0.4)',
                  '&:hover': {
                    backgroundColor: COLORS.white,
                    color: COLORS.blue,
                  },
                }}
              >
                Explore Services
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => handleNavigation('Contact Us')}
                sx={{
                  color: COLORS.white,
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.05rem',
                  '&:hover': {
                    borderColor: COLORS.sky,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Get in Touch
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* 2. SNAPSHOT STATS BAR (Corporate Snapshot) */}
      <Container maxWidth="lg" sx={{ mt: -4, mb: 6, position: 'relative', zIndex: 2 }}>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            backgroundColor: COLORS.white,
            border: `1px solid rgba(30, 77, 140, 0.12)`,
          }}
        >
          <Grid container spacing={3} justifyContent="space-around" alignItems="center">
            <Grid item xs={12} sm={4} textAlign="center">
              <Typography variant="h3" sx={{ fontWeight: 800, color: COLORS.navy }}>
                2016
              </Typography>
              <Typography variant="subtitle1" sx={{ color: COLORS.blue, fontWeight: 600 }}>
                Founded in Toronto
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center" sx={{ borderLeft: { sm: `1px solid rgba(11, 31, 58, 0.1)` }, borderRight: { sm: `1px solid rgba(11, 31, 58, 0.1)` } }}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: COLORS.sky }}>
                180+
              </Typography>
              <Typography variant="subtitle1" sx={{ color: COLORS.navy, fontWeight: 600 }}>
                Engineering & Delivery Experts
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
              <Typography variant="h3" sx={{ fontWeight: 800, color: COLORS.navy }}>
                120+
              </Typography>
              <Typography variant="subtitle1" sx={{ color: COLORS.blue, fontWeight: 600 }}>
                Clients Across 14 Countries
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* 3. SERVICE PREVIEW (12 Clickable Tiles) */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box textAlign="center" sx={{ mb: 5 }}>
          <Typography variant="overline" sx={{ color: COLORS.sky, fontWeight: 700, letterSpacing: 1.5, fontSize: '0.85rem' }}>
            WHAT WE DO
          </Typography>
          <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800, mt: 0.5 }}>
            Enterprise IT Services & Capabilities
          </Typography>
          <Typography variant="body1" sx={{ color: COLORS.blue, mt: 1, maxWidth: '650px', mx: 'auto' }}>
            A full-spectrum portfolio of technology services enabling clients to engage us for specialized solutions or end-to-end digital delivery.
          </Typography>
        </Box>

        <Grid container spacing={2.5} alignItems="stretch">
          {servicesList.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.name}>
              <Card
                elevation={1}
                sx={{
                  height: 80,
                  width: '100%',
                  borderRadius: 2.5,
                  transition: 'all 0.25s ease-in-out',
                  border: '1px solid rgba(11, 31, 58, 0.08)',
                  backgroundColor: COLORS.white,
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(30, 77, 140, 0.15)',
                    borderColor: COLORS.sky,
                  },
                }}
              >
                <CardActionArea
                  onClick={() => handleNavigation('Services')}
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      p: 1.2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(62, 146, 204, 0.12)',
                      color: COLORS.blue,
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: COLORS.navy,
                      flexGrow: 1,
                      fontSize: '0.95rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {service.name}
                  </Typography>
                  <ArrowIcon sx={{ color: COLORS.sky, fontSize: 20, flexShrink: 0, ml: 1 }} />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button
            variant="outlined"
            onClick={() => handleNavigation('Services')}
            endIcon={<ArrowIcon />}
            sx={{
              color: COLORS.blue,
              borderColor: COLORS.blue,
              fontWeight: 700,
              px: 4,
              py: 1.2,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: COLORS.blue,
                color: COLORS.white,
              },
            }}
          >
            Explore All Services
          </Button>
        </Box>
      </Container>

      {/* 4. INDUSTRIES PREVIEW */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box textAlign="center" sx={{ mb: 5 }}>
          <Typography variant="overline" sx={{ color: COLORS.sky, fontWeight: 700, letterSpacing: 1.5, fontSize: '0.85rem' }}>
            SECTORS WE SERVE
          </Typography>
          <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800, mt: 0.5 }}>
            Domain Fluency Across Key Industries
          </Typography>
          <Typography variant="body1" sx={{ color: COLORS.blue, mt: 1, maxWidth: '650px', mx: 'auto' }}>
            Our teams bring deep industry experience, allowing us to speak the language of your business from day one.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {industriesList.map((ind) => (
            <Grid item xs={12} sm={6} md={3} key={ind.title}>
              <Card
                elevation={1}
                sx={{
                  height: '100%',
                  borderRadius: 2.5,
                  p: 3,
                  backgroundColor: COLORS.white,
                  border: '1px solid rgba(11, 31, 58, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(30, 77, 140, 0.12)',
                    borderColor: COLORS.blue,
                  },
                }}
              >
                <Box>
                  <Box sx={{ mb: 2 }}>{ind.icon}</Box>
                  <Typography variant="h6" sx={{ color: COLORS.navy, fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>
                    {ind.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: COLORS.blue, lineHeight: 1.6 }}>
                    {ind.desc}
                  </Typography>
                </Box>
                <Button
                  size="small"
                  onClick={() => handleNavigation('Industry')}
                  endIcon={<ArrowIcon fontSize="small" />}
                  sx={{
                    color: COLORS.sky,
                    fontWeight: 700,
                    textTransform: 'none',
                    alignSelf: 'flex-start',
                    mt: 2,
                    p: 0,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: COLORS.blue,
                    },
                  }}
                >
                  Learn More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 5. WHY CHOOSE US (3 Key Highlights) */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Paper
          elevation={2}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 3,
            backgroundColor: COLORS.white,
            border: `1px solid rgba(11, 31, 58, 0.08)`,
          }}
        >
          <Box textAlign="center" sx={{ mb: 5 }}>
            <Typography variant="overline" sx={{ color: COLORS.sky, fontWeight: 700, letterSpacing: 1.5, fontSize: '0.85rem' }}>
              WHY NORTHNODE ANALYTICS
            </Typography>
            <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800, mt: 0.5 }}>
              Engineered for Speed, Scale & Trust
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {whyChooseUsHighlights.map((highlight) => (
              <Grid item xs={12} md={4} key={highlight.title}>
                <Stack spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: COLORS.light,
                      display: 'inline-flex',
                    }}
                  >
                    {highlight.icon}
                  </Box>
                  <Typography variant="h6" sx={{ color: COLORS.navy, fontWeight: 700 }}>
                    {highlight.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: COLORS.blue, lineHeight: 1.7 }}>
                    {highlight.desc}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" sx={{ mt: 5 }}>
            <Button
              variant="text"
              onClick={() => handleNavigation('About Us')}
              endIcon={<ArrowIcon />}
              sx={{
                color: COLORS.blue,
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  color: COLORS.sky,
                  backgroundColor: 'transparent',
                },
              }}
            >
              Read Full Company Profile & Values
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* 6. CTA BANNER */}
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 3,
            backgroundColor: COLORS.navy,
            color: COLORS.white,
            textAlign: 'center',
            background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.blue} 100%)`,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5 }}>
            Let’s Build Something Intelligent Together
          </Typography>
          <Typography variant="body1" sx={{ color: COLORS.sky, mb: 4, maxWidth: '650px', mx: 'auto', fontSize: '1.1rem' }}>
            Reach out to discuss how NorthNode Analytics can support your next digital initiative.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => handleNavigation('Contact Us')}
            sx={{
              backgroundColor: COLORS.sky,
              color: COLORS.navy,
              fontWeight: 700,
              px: 5,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1.05rem',
              boxShadow: '0 4px 14px rgba(62, 146, 204, 0.4)',
              '&:hover': {
                backgroundColor: COLORS.white,
                color: COLORS.blue,
              },
            }}
          >
            Contact Us
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

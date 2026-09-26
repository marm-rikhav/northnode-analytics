import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Paper,
  Stack,
  Chip,
} from '@mui/material';
import { ROUTE_MAP } from '../../constants/routes';
import PageBanner from '../common/PageBanner';
import {
  AccountBalance as FinanceIcon,
  LocalHospital as HealthIcon,
  ShoppingCart as RetailIcon,
  LocalShipping as LogisticsIcon,
  CorporateFare as PublicIcon,
  Bolt as EnergyIcon,
  BusinessCenter as ServicesIcon,
  CloudSync as TechIcon,
  ArrowForward as ArrowIcon
} from '@mui/icons-material';

const COLORS = {
  navy: '#0B1F3A',
  blue: '#1E4D8C',
  sky: '#3E92CC',
  light: '#F2F5F9',
  white: '#FFFFFF',
};

const industriesServed = [
  {
    num: '01',
    industry: 'Financial Services',
    engagements: 'Core banking modernization, fraud analytics, regulatory reporting platforms',
    icon: <FinanceIcon sx={{ fontSize: 36, color: COLORS.sky }} />,
    tag: 'Fintech & Banking'
  },
  {
    num: '02',
    industry: 'Healthcare & Life Sciences',
    engagements: 'Patient data platforms, secure health records systems, clinical analytics',
    icon: <HealthIcon sx={{ fontSize: 36, color: COLORS.sky }} />,
    tag: 'HealthTech & Records'
  },
  {
    num: '03',
    industry: 'Retail & E-Commerce',
    engagements: 'Omnichannel platforms, personalization engines, inventory intelligence',
    icon: <RetailIcon sx={{ fontSize: 36, color: COLORS.sky }} />,
    tag: 'Digital Commerce'
  },
  {
    num: '04',
    industry: 'Manufacturing & Logistics',
    engagements: 'IoT-enabled operations, supply chain visibility, predictive maintenance',
    icon: <LogisticsIcon sx={{ fontSize: 36, color: COLORS.sky }} />,
    tag: 'Smart Supply Chain'
  },
  {
    num: '05',
    industry: 'Public Sector',
    engagements: 'Citizen service portals, secure data infrastructure, accessibility compliance',
    icon: <PublicIcon sx={{ fontSize: 36, color: COLORS.sky }} />,
    tag: 'GovTech & Compliance'
  },
  {
    num: '06',
    industry: 'Energy & Utilities',
    engagements: 'Grid analytics, asset monitoring, sustainability reporting tools',
    icon: <EnergyIcon sx={{ fontSize: 36, color: COLORS.sky }} />,
    tag: 'CleanTech & Grid'
  },
  {
    num: '07',
    industry: 'Professional Services',
    engagements: 'Workflow automation, client portals, internal knowledge platforms',
    icon: <ServicesIcon sx={{ fontSize: 36, color: COLORS.sky }} />,
    tag: 'Enterprise Workflow'
  },
  {
    num: '08',
    industry: 'Technology & SaaS',
    engagements: 'Product engineering, platform scaling, DevOps and reliability partnerships',
    icon: <TechIcon sx={{ fontSize: 36, color: COLORS.sky }} />,
    tag: 'SaaS & Scale-Ups'
  }
];

const IndustryComponent = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleNavigation = (pageName) => {
    if (onNavigate) {
      onNavigate(pageName);
    }
    const targetPath = ROUTE_MAP[pageName] || pageName;
    navigate(targetPath);
  };

  return (
    <Box sx={{ backgroundColor: COLORS.light, pb: 8 }}>
      {/* 1. HERO & INTRO */}
      <PageBanner
        title="Industries Served"
        subtitle="Our teams bring domain fluency across a broad range of sectors, allowing us to speak the language of your business from day one."
      />

      {/* 2. UNIFIED SECTOR EXPERIENCE & ENGAGEMENTS SECTION */}
      <Box
        component="section"
        sx={{
          backgroundColor: '#F2F5F9',
          py: { xs: '48px', sm: '56px', md: '64px', lg: '80px' },
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ mx: 'auto' }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #D9E3EF',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(11, 31, 58, 0.04)',
              p: { xs: '24px', sm: '36px', md: '44px', lg: '48px' },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Section Header */}
            <Box sx={{ mb: { xs: 4, md: 5 } }}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: '#3E92CC',
                    fontWeight: 700,
                    letterSpacing: 2,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}
                >
                  SECTOR-SPECIFIC EXPERIENCE
                </Typography>
              </Stack>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: '#0B1F3A',
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.4rem' },
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  mb: 1.5,
                }}
              >
                Tailored Digital & Engineering Engagements
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#1E4D8C',
                  maxWidth: '760px',
                  lineHeight: 1.65,
                  fontSize: { xs: '0.95rem', md: '1.025rem' },
                }}
              >
                Full breakdown of enterprise solutions and specialized digital capabilities engineered per industry domain.
              </Typography>
            </Box>

            {/* 4 Cards per row Grid (2 rows total for 8 items) */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  lg: 'repeat(4, 1fr)',
                },
                gap: { xs: '20px', md: '24px' },
                alignItems: 'stretch',
              }}
            >
              {industriesServed.map((item) => (
                <Card
                  key={item.industry}
                  elevation={0}
                  onClick={() => handleNavigation('Contact Us')}
                  sx={{
                    cursor: 'pointer',
                    borderRadius: '12px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #D9E3EF',
                    boxShadow: '0 2px 10px rgba(11, 31, 58, 0.03)',
                    p: { xs: '20px', md: '24px' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      backgroundColor: '#F2F5F9',
                      borderColor: '#3E92CC',
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
                  <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    {/* Top Row: Icon Badge & Number Indicator */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2.2 }}>
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
                          transition: 'all 0.25s ease',
                          flexShrink: 0,
                        }}
                      >
                        {cloneElement(item.icon, { sx: { fontSize: 24, color: 'inherit' } })}
                      </Box>
                      <Chip
                        label={item.num}
                        size="small"
                        sx={{
                          backgroundColor: '#F2F5F9',
                          color: '#1E4D8C',
                          fontWeight: 700,
                          fontSize: '0.78rem',
                          borderRadius: '8px',
                          border: '1px solid #D9E3EF',
                        }}
                      />
                    </Stack>

                    {/* Industry Title */}
                    <Typography
                      className="card-title"
                      variant="h3"
                      component="h3"
                      sx={{
                        color: '#0B1F3A',
                        fontWeight: 700,
                        fontSize: { xs: '1.05rem', md: '1.15rem' },
                        lineHeight: 1.35,
                        mb: 1.2,
                        letterSpacing: '-0.01em',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {item.industry}
                    </Typography>

                    {/* Category Tag */}
                    <Box sx={{ mb: 1.8 }}>
                      <Chip
                        label={item.tag}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(62, 146, 204, 0.1)',
                          color: '#1E4D8C',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          borderRadius: '6px',
                        }}
                      />
                    </Box>

                    {/* Engagements Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#1E4D8C',
                        fontSize: '0.86rem',
                        lineHeight: 1.55,
                        flexGrow: 1,
                        mb: 2.5,
                      }}
                    >
                      {item.engagements}
                    </Typography>
                  </Box>

                  {/* Bottom Action Indicator */}
                  <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ pt: 1 }}>
                    <Box
                      className="card-arrow-circle"
                      sx={{
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
                  </Stack>
                </Card>
              ))}
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* 3. FINAL CTA BANNER */}
      <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 8 } }}>
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
          {/* Main Heading */}
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              color: '#FFFFFF',
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.6rem' },
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              mb: { xs: 1.5, md: 2 },
            }}
          >
            Don’t See Your Industry Listed?
          </Typography>

          {/* Subtitle / Description */}
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '0.92rem', sm: '1.02rem' },
              lineHeight: 1.6,
              maxWidth: '680px',
              mx: 'auto',
              mb: { xs: 4, sm: 4.5 },
            }}
          >
            Our core engineering, cloud, and data practices adapt to complex business logic across any regulated or high-growth domain.
          </Typography>

          {/* Primary Action Button */}
          <Button
            variant="contained"
            disableElevation
            onClick={() => handleNavigation('Contact Us')}
            endIcon={<ArrowIcon sx={{ fontSize: 18, transition: 'transform 0.2s ease', ml: 0.5 }} />}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
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
            Discuss Your Sector Requirements
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

IndustryComponent.propTypes = {
  onNavigate: PropTypes.func,
};

export default IndustryComponent;

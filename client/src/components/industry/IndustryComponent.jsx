import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Chip
} from '@mui/material';
import {
  AccountBalance as FinanceIcon,
  LocalHospital as HealthIcon,
  ShoppingCart as RetailIcon,
  LocalShipping as LogisticsIcon,
  CorporateFare as PublicIcon,
  Bolt as EnergyIcon,
  BusinessCenter as ServicesIcon,
  CloudSync as TechIcon,
  ArrowForward as ArrowIcon,
  Domain as SectorIcon
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
  const handleNavigation = (pageName) => {
    if (onNavigate) {
      onNavigate(pageName);
    }
  };

  return (
    <Box sx={{ backgroundColor: COLORS.light, pb: 8 }}>
      {/* 1. HERO & INTRO */}
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
            Industries Served
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: COLORS.sky,
              fontWeight: 600,
              maxWidth: '850px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
            }}
          >
            Our teams bring domain fluency across a broad range of sectors, allowing us to speak the language of your business from day one.
          </Typography>
        </Container>
      </Box>

      {/* 2. 8 INDUSTRY SECTOR CARDS */}
      <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
        <Box textAlign="center" sx={{ mb: 5 }}>
          <Typography variant="overline" sx={{ color: COLORS.sky, fontWeight: 700, letterSpacing: 1.5, fontSize: '0.85rem' }}>
            SECTOR-SPECIFIC EXPERIENCE
          </Typography>
          <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800, mt: 0.5 }}>
            Tailored Digital & Engineering Engagements
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {industriesServed.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.industry}>
              <Card
                elevation={1}
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: COLORS.white,
                  border: '1px solid rgba(11, 31, 58, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(30, 77, 140, 0.15)',
                    borderColor: COLORS.sky,
                  },
                }}
              >
                <Box>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        p: 1.2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(62, 146, 204, 0.12)',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Chip
                      label={item.num}
                      size="small"
                      sx={{
                        backgroundColor: COLORS.light,
                        color: COLORS.blue,
                        fontWeight: 700,
                      }}
                    />
                  </Stack>

                  <Typography variant="h6" sx={{ color: COLORS.navy, fontWeight: 700, mb: 1, fontSize: '1.15rem' }}>
                    {item.industry}
                  </Typography>

                  <Chip
                    label={item.tag}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(30, 77, 140, 0.08)',
                      color: COLORS.blue,
                      fontWeight: 600,
                      mb: 2,
                      fontSize: '0.75rem',
                    }}
                  />

                  <Typography variant="body2" sx={{ color: COLORS.navy, lineHeight: 1.6, fontWeight: 500 }}>
                    {item.engagements}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 3. FULL COMPARISON TABLE */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Paper
          elevation={2}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 3,
            backgroundColor: COLORS.white,
            border: '1px solid rgba(11, 31, 58, 0.08)',
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
            <SectorIcon sx={{ color: COLORS.sky, fontSize: 32 }} />
            <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800 }}>
              Industries Served & Typical Engagements
            </Typography>
          </Stack>
          <Typography variant="body1" sx={{ color: COLORS.blue, mb: 3 }}>
            Full breakdown of enterprise solutions engineered per industry domain.
          </Typography>

          <TableContainer>
            <Table size="small">
              <TableBody>
                {industriesServed.map((row) => (
                  <TableRow key={row.industry} sx={{ '&:nth-of-type(odd)': { backgroundColor: COLORS.light } }}>
                    <TableCell sx={{ fontWeight: 700, color: COLORS.navy, width: '30%', py: 2, fontSize: '0.95rem' }}>
                      {row.industry}
                    </TableCell>
                    <TableCell sx={{ color: COLORS.blue, py: 2, fontSize: '0.95rem', fontWeight: 500 }}>
                      {row.engagements}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      {/* CTA BANNER */}
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
            Don’t See Your Industry Listed?
          </Typography>
          <Typography variant="body1" sx={{ color: COLORS.sky, mb: 4, maxWidth: '650px', mx: 'auto', fontSize: '1.1rem' }}>
            Our core engineering, cloud, and data practices adapt to complex business logic across any regulated or high-growth domain.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => handleNavigation('Contact Us')}
            endIcon={<ArrowIcon />}
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

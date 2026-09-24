import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
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
  Handshake as IntegrityIcon,
  Engineering as EngineeringIcon,
  People as PartnershipIcon,
  Lightbulb as InnovationIcon,
  Security as SecurityIcon,
  WorkspacePremium as OwnershipIcon,
  Visibility as VisionIcon,
  Flag as MissionIcon,
  Business as CompanyIcon,
  CheckCircle as CheckIcon,
  LocationOn as LocationIcon,
  ArrowForward as ArrowIcon,
  Psychology as LeadershipIcon
} from '@mui/icons-material';

const COLORS = {
  navy: '#0B1F3A',
  blue: '#1E4D8C',
  sky: '#3E92CC',
  light: '#F2F5F9',
  white: '#FFFFFF',
};

const coreValues = [
  {
    title: 'Integrity',
    desc: 'We do what we say, communicate transparently, and hold ourselves accountable to every commitment.',
    icon: <IntegrityIcon sx={{ fontSize: 36, color: COLORS.sky }} />
  },
  {
    title: 'Engineering Excellence',
    desc: 'We build resilient, well-architected systems designed to scale and endure.',
    icon: <EngineeringIcon sx={{ fontSize: 36, color: COLORS.sky }} />
  },
  {
    title: 'Client Partnership',
    desc: 'We act as an extension of our clients\' teams, not an external vendor.',
    icon: <PartnershipIcon sx={{ fontSize: 36, color: COLORS.sky }} />
  },
  {
    title: 'Innovation',
    desc: 'We invest continuously in emerging technology to keep our clients ahead of the curve.',
    icon: <InnovationIcon sx={{ fontSize: 36, color: COLORS.sky }} />
  },
  {
    title: 'Security First',
    desc: 'We treat data protection and compliance as a foundation, not an afterthought.',
    icon: <SecurityIcon sx={{ fontSize: 36, color: COLORS.sky }} />
  },
  {
    title: 'Ownership',
    desc: 'Every team member takes personal accountability for outcomes, not just output.',
    icon: <OwnershipIcon sx={{ fontSize: 36, color: COLORS.sky }} />
  }
];

const corporateSnapshot = [
  { label: 'Legal Name', value: 'NorthNode Analytics Inc.' },
  { label: 'Headquarters', value: 'Toronto, Ontario, Canada' },
  { label: 'Founded', value: '2016' },
  { label: 'Employees', value: '180+ across engineering, data, design, and delivery' },
  { label: 'Industry Focus', value: 'IT Services, Software Development, Cloud & AI' },
  { label: 'Clients Served', value: '120+ organizations across 14 countries' },
  { label: 'Delivery Model', value: 'Onshore, nearshore, and hybrid engagement teams' }
];

const companyProfileDetails = [
  { label: 'Company Type', value: 'Private, Federally Incorporated (Canada)' },
  { label: 'Registered Office', value: 'Toronto, Ontario, Canada' },
  { label: 'Head Office Address', value: '121 King Street West, Suite 1900, Toronto, Ontario M5H 3T9, Canada' },
  { label: 'Service Regions', value: 'Canada, United States, United Kingdom, EU, APAC' },
  { label: 'Core Competencies', value: 'Software Engineering, Cloud, Data & AI, Cybersecurity' },
  { label: 'Engagement Types', value: 'Fixed-Scope Projects, Managed Teams, Staff Augmentation, Retainers' },
  { label: 'Certifications', value: 'ISO/IEC 27001 (in progress), SOC 2 Type II aligned practices' },
  { label: 'Website', value: 'www.northnodeanalytics.com' }
];

const whyChooseAllBullets = [
  'Canadian-based delivery with global engagement experience across 14+ countries.',
  'Senior-led teams — every engagement is guided by an experienced architect or delivery lead.',
  'Security- and compliance-conscious engineering practices from day one.',
  'Transparent, milestone-based delivery with no hidden scope surprises.',
  'Deep bench across software, cloud, data, and AI — one partner, full-stack capability.',
  'Flexible engagement models built around your budget, timeline, and internal team structure.',
  'A long-term partnership mindset: we measure success by your outcomes, not our billable hours.'
];

const AboutUsComponent = ({ onNavigate }) => {
  const handleNavigation = (pageName) => {
    if (onNavigate) {
      onNavigate(pageName);
    }
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
          <Chip
            icon={<LocationIcon sx={{ color: `${COLORS.sky} !important` }} />}
            label="Head Office: 121 King Street West, Suite 1900, Toronto, Ontario M5H 3T9, Canada"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              color: COLORS.white,
              fontWeight: 600,
              mb: 3,
              py: 0.5,
              px: 1,
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.2rem', sm: '3rem', md: '3.5rem' },
              mb: 2,
            }}
          >
            About NorthNode Analytics
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
            Precision Engineering. Global Scale. Canadian Integrity.
          </Typography>
        </Container>
      </Box>

      {/* 2. FULL ABOUT THE COMPANY TEXT */}
      <Container maxWidth="lg" sx={{ mt: 5, mb: 6 }}>
        <Paper
          elevation={2}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 3,
            backgroundColor: COLORS.white,
            border: `1px solid rgba(11, 31, 58, 0.08)`,
          }}
        >
          <Stack spacing={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <CompanyIcon sx={{ color: COLORS.blue, fontSize: 32 }} />
              <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800 }}>
                About the Company
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: COLORS.navy, fontSize: '1.1rem', lineHeight: 1.8 }}>
              NorthNode Analytics is a Toronto-headquartered technology company delivering enterprise-grade software, cloud, and data engineering services to organizations across North America and beyond. Founded on the principle that great technology should be both intelligent and dependable, we combine deep engineering expertise with a consultative approach to help clients modernize, scale, and compete in a digital-first economy.
            </Typography>
            <Typography variant="body1" sx={{ color: COLORS.navy, fontSize: '1.1rem', lineHeight: 1.8 }}>
              Since our founding, NorthNode Analytics has grown into a multi-disciplinary team of software engineers, cloud architects, data scientists, and UX designers who partner with clients ranging from ambitious startups to established enterprises. Our Canadian roots ground us in a culture of precision, transparency, and long-term partnership, while our delivery model is built to operate at global scale.
            </Typography>
          </Stack>
        </Paper>
      </Container>

      {/* 3. VISION & MISSION */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              elevation={2}
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                backgroundColor: COLORS.navy,
                color: COLORS.white,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  <VisionIcon sx={{ color: COLORS.sky, fontSize: 32 }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: COLORS.white }}>
                    Our Vision
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: COLORS.sky,
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    mb: 2,
                    fontStyle: 'italic',
                    borderLeft: `4px solid ${COLORS.sky}`,
                    pl: 2,
                  }}
                >
                  “To be Canada&apos;s most trusted technology partner for organizations building the intelligent, data-driven enterprises of the future.”
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7 }}>
                  We envision a future where every organization, regardless of size or sector, has access to enterprise-grade engineering talent and intelligent systems that turn data into decisive action. NorthNode Analytics exists to close the gap between ambitious digital strategy and dependable technical execution.
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              elevation={2}
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                backgroundColor: COLORS.white,
                color: COLORS.navy,
                border: `2px solid ${COLORS.blue}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  <MissionIcon sx={{ color: COLORS.blue, fontSize: 32 }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: COLORS.navy }}>
                    Our Mission
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: COLORS.blue,
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    mb: 2,
                    fontStyle: 'italic',
                    borderLeft: `4px solid ${COLORS.blue}`,
                    pl: 2,
                  }}
                >
                  “To engineer secure, scalable, and intelligent digital solutions that help our clients operate faster, decide smarter, and grow with confidence.”
                </Typography>
                <Typography variant="body1" sx={{ color: COLORS.navy, lineHeight: 1.7 }}>
                  We deliver on this mission by pairing disciplined software engineering practice with modern data and AI capability, treating every engagement as a long-term partnership rather than a one-time project. Our teams are structured to embed deeply with client stakeholders, ensuring technology decisions are grounded in real business outcomes.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* 4. CORE VALUES TABLE / ICON CARDS */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Box textAlign="center" sx={{ mb: 4 }}>
          <Typography variant="overline" sx={{ color: COLORS.sky, fontWeight: 700, letterSpacing: 1.5, fontSize: '0.85rem' }}>
            WHAT DRIVES US
          </Typography>
          <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800, mt: 0.5 }}>
            Our Core Values
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {coreValues.map((val) => (
            <Grid item xs={12} sm={6} md={4} key={val.title}>
              <Card
                elevation={1}
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: 2.5,
                  backgroundColor: COLORS.white,
                  border: '1px solid rgba(11, 31, 58, 0.08)',
                  transition: 'all 0.25s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(30, 77, 140, 0.12)',
                    borderColor: COLORS.sky,
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{val.icon}</Box>
                <Typography variant="h6" sx={{ color: COLORS.navy, fontWeight: 700, mb: 1 }}>
                  {val.title}
                </Typography>
                <Typography variant="body2" sx={{ color: COLORS.blue, lineHeight: 1.6 }}>
                  {val.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 5. CORPORATE SNAPSHOT & COMPANY PROFILE DETAILS */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Grid container spacing={4}>
          {/* Corporate Snapshot */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: COLORS.white,
                height: '100%',
                border: '1px solid rgba(11, 31, 58, 0.08)',
              }}
            >
              <Typography variant="h5" sx={{ color: COLORS.navy, fontWeight: 800, mb: 3 }}>
                At a Glance — Corporate Snapshot
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableBody>
                    {corporateSnapshot.map((row) => (
                      <TableRow key={row.label} sx={{ '&:nth-of-type(odd)': { backgroundColor: COLORS.light } }}>
                        <TableCell sx={{ fontWeight: 700, color: COLORS.navy, width: '40%', py: 1.5 }}>
                          {row.label}
                        </TableCell>
                        <TableCell sx={{ color: COLORS.blue, py: 1.5 }}>
                          {row.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          {/* Legal & Profile Details */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: COLORS.white,
                height: '100%',
                border: '1px solid rgba(11, 31, 58, 0.08)',
              }}
            >
              <Typography variant="h5" sx={{ color: COLORS.navy, fontWeight: 800, mb: 3 }}>
                Company Profile & Legitimacy
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableBody>
                    {companyProfileDetails.map((row) => (
                      <TableRow key={row.label} sx={{ '&:nth-of-type(odd)': { backgroundColor: COLORS.light } }}>
                        <TableCell sx={{ fontWeight: 700, color: COLORS.navy, width: '40%', py: 1.5 }}>
                          {row.label}
                        </TableCell>
                        <TableCell sx={{ color: COLORS.blue, py: 1.5 }}>
                          {row.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* 6. LEADERSHIP PHILOSOPHY */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Paper
          elevation={2}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 3,
            backgroundColor: COLORS.navy,
            color: COLORS.white,
            background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.blue} 100%)`,
          }}
        >
          <Stack spacing={2}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <LeadershipIcon sx={{ color: COLORS.sky, fontSize: 32 }} />
              <Typography variant="h4" sx={{ fontWeight: 800, color: COLORS.white }}>
                Leadership Philosophy
              </Typography>
            </Stack>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.15rem', lineHeight: 1.8 }}>
              NorthNode Analytics is led by a senior team with backgrounds spanning global systems integrators, cloud hyperscalers, and venture-backed product companies. This blend of enterprise discipline and startup agility informs how we staff, price, and deliver every engagement — with governance where it matters and speed where it counts.
            </Typography>
          </Stack>
        </Paper>
      </Container>

      {/* 7. WHY CHOOSE NORTHNODE ANALYTICS (Full 7 Commitments) */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Paper
          elevation={2}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 3,
            backgroundColor: COLORS.white,
            border: '1px solid rgba(11, 31, 58, 0.08)',
          }}
        >
          <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800, mb: 4, textAlign: 'center' }}>
            Why Choose NorthNode Analytics
          </Typography>
          <Grid container spacing={2.5}>
            {whyChooseAllBullets.map((bullet) => (
              <Grid item xs={12} sm={6} key={bullet}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <CheckIcon sx={{ color: COLORS.sky, mt: 0.3 }} />
                  <Typography variant="body1" sx={{ color: COLORS.navy, fontWeight: 500, lineHeight: 1.6 }}>
                    {bullet}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* 8. CTA BUTTON BANNER */}
      <Container maxWidth="lg">
        <Box textAlign="center">
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
              py: 1.6,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1.1rem',
              boxShadow: '0 4px 14px rgba(62, 146, 204, 0.4)',
              '&:hover': {
                backgroundColor: COLORS.blue,
                color: COLORS.white,
              },
            }}
          >
            Partner With NorthNode Analytics
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

AboutUsComponent.propTypes = {
  onNavigate: PropTypes.func,
};

export default AboutUsComponent;

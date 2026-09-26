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
  Divider
} from '@mui/material';
import { ROUTE_MAP } from '../../constants/routes';
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
  { label: 'Clients Served', value: '120+ organizations across 14 countries' },
  { label: 'Delivery Model', value: 'Onshore, nearshore, and hybrid engagement teams' },
  { label: 'Industry Focus', value: 'IT Services, Software Development, Cloud & AI' }
];

const companyProfileDetails = [
  { label: 'Company Type', value: 'Private, Federally Incorporated (Canada)' },
  { label: 'Registered Office', value: 'Toronto, Ontario, Canada' },
  { label: 'Head Office', value: '121 King Street West, Suite 1900, Toronto, Ontario M5H 3T9, Canada' },
  { label: 'Service Regions', value: 'Canada, United States, United Kingdom, EU, APAC' },
  { label: 'Core Competencies', value: 'Software Engineering, Cloud, Data & AI, Cybersecurity' },
  { label: 'Engagement Types', value: 'Fixed-Scope Projects, Managed Teams, Staff Augmentation, Retainers' },
  { label: 'Certifications', value: 'ISO/IEC 27001 (in progress), SOC 2 Type II aligned practices' },
  { label: 'Website', value: 'www.northnodeanalytics.com' }
];

const whyChooseBenefits = [
  {
    title: 'Canadian-Based Delivery',
    desc: 'Canadian-based delivery with global engagement experience across 14+ countries.',
  },
  {
    title: 'Senior-Led Teams',
    desc: 'Senior-led teams — every engagement is guided by an experienced architect or delivery lead.',
  },
  {
    title: 'Security- & Compliance-Conscious',
    desc: 'Security- and compliance-conscious engineering practices from day one.',
  },
  {
    title: 'Milestone-Based Delivery',
    desc: 'Transparent, milestone-based delivery with no hidden scope surprises.',
  },
  {
    title: 'Full-Stack Bench',
    desc: 'Deep bench across software, cloud, data, and AI — one partner, full-stack capability.',
  },
  {
    title: 'Flexible Engagement Models',
    desc: 'Flexible engagement models built around your budget, timeline, and internal team structure.',
  },
  {
    title: 'Partnership Mindset',
    desc: 'A long-term partnership mindset: we measure success by your outcomes, not our billable hours.',
  },
];

const AboutUsComponent = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleNavigation = (pageName) => {
    if (onNavigate) {
      onNavigate(pageName);
    }
    const targetPath = ROUTE_MAP[pageName] || pageName;
    navigate(targetPath);
  };

  const renderSnapshotValue = (label, value) => {
    if (label === 'Founded') {
      return (
        <Typography
          sx={{
            color: '#3E92CC',
            fontWeight: 800,
            fontSize: { xs: '1.85rem', md: '2.1rem' },
            lineHeight: 1.1,
          }}
        >
          {value}
        </Typography>
      );
    }
    if (label === 'Employees') {
      const num = '180+';
      const rest = value.replace('180+', '').trim();
      return (
        <Box>
          <Typography
            sx={{
              color: '#3E92CC',
              fontWeight: 800,
              fontSize: { xs: '1.85rem', md: '2.1rem' },
              lineHeight: 1.1,
              mb: 0.5,
            }}
          >
            {num}
          </Typography>
          <Typography
            sx={{
              color: '#0B1F3A',
              fontWeight: 600,
              fontSize: '0.925rem',
              lineHeight: 1.5,
            }}
          >
            {rest}
          </Typography>
        </Box>
      );
    }
    if (label === 'Clients Served') {
      const num = '120+';
      const rest = value.replace('120+', '').trim();
      return (
        <Box>
          <Typography
            sx={{
              color: '#3E92CC',
              fontWeight: 800,
              fontSize: { xs: '1.85rem', md: '2.1rem' },
              lineHeight: 1.1,
              mb: 0.5,
            }}
          >
            {num}
          </Typography>
          <Typography
            sx={{
              color: '#0B1F3A',
              fontWeight: 600,
              fontSize: '0.925rem',
              lineHeight: 1.5,
            }}
          >
            {rest}
          </Typography>
        </Box>
      );
    }
    if (label === 'Industry Focus') {
      const displayVal = value.includes(',') ? value.split(',').map((s) => s.trim()).join(' · ') : value;
      return (
        <Typography
          sx={{
            color: '#0B1F3A',
            fontWeight: 700,
            fontSize: { xs: '1.05rem', md: '1.18rem' },
            lineHeight: 1.4,
          }}
        >
          {displayVal}
        </Typography>
      );
    }
    return (
      <Typography
        sx={{
          color: '#0B1F3A',
          fontWeight: 700,
          fontSize: { xs: '1.1rem', md: '1.2rem' },
          lineHeight: 1.35,
        }}
      >
        {value}
      </Typography>
    );
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
            About NorthNode Analytics
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
            Precision Engineering. Global Scale. Canadian Integrity.
          </Typography>
        </Container>
      </Box>

      {/* 2. FULL ABOUT THE COMPANY TEXT */}
      <Box
        component="section"
        sx={{
          py: { xs: 4, sm: 5, md: 6 },
          px: { xs: '24px', sm: '36px', md: '48px', lg: '64px' },
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ mx: 'auto' }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: { xs: '20px', md: '24px' },
              border: '1px solid #D9E5F2',
              boxShadow: '0 4px 24px rgba(11, 31, 58, 0.04)',
              p: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
              position: 'relative',
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: { xs: 2.5, md: 3 } }}>
              <CompanyIcon sx={{ color: COLORS.blue, fontSize: { xs: 28, md: 32 } }} />
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: COLORS.navy,
                  fontWeight: 800,
                  fontSize: { xs: '1.65rem', sm: '1.9rem', md: '2.25rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                About the Company
              </Typography>
            </Stack>

            <Box sx={{ maxWidth: '1000px' }}>
              <Stack spacing={2.5}>
                <Typography
                  variant="body1"
                  sx={{
                    color: COLORS.navy,
                    fontSize: { xs: '1rem', md: '1.05rem' },
                    lineHeight: 1.75,
                  }}
                >
                  NorthNode Analytics is a Toronto-headquartered technology company delivering enterprise-grade software, cloud, and data engineering services to organizations across North America and beyond. Founded on the principle that great technology should be both intelligent and dependable, we combine deep engineering expertise with a consultative approach to help clients modernize, scale, and compete in a digital-first economy.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: COLORS.navy,
                    fontSize: { xs: '1rem', md: '1.05rem' },
                    lineHeight: 1.75,
                  }}
                >
                  Since our founding, NorthNode Analytics has grown into a multi-disciplinary team of software engineers, cloud architects, data scientists, and UX designers who partner with clients ranging from ambitious startups to established enterprises. Our Canadian roots ground us in a culture of precision, transparency, and long-term partnership, while our delivery model is built to operate at global scale.
                </Typography>
              </Stack>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* 3. VISION & MISSION */}
      <Box
        component="section"
        sx={{
          pb: { xs: 4, sm: 5, md: 6 },
          px: { xs: '24px', sm: '36px', md: '48px', lg: '64px' },
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ mx: 'auto' }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: { xs: '20px', md: '24px' },
              border: '1px solid #D9E5F2',
              boxShadow: '0 4px 24px rgba(11, 31, 58, 0.04)',
              p: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'stretch',
              }}
            >
              {/* Vision Column */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      backgroundColor: '#EAF3FB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <VisionIcon sx={{ color: COLORS.blue, fontSize: 24 }} />
                  </Box>
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontWeight: 800,
                      color: COLORS.blue,
                      fontSize: { xs: '1.4rem', sm: '1.55rem', md: '1.75rem' },
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Our Vision
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    borderLeft: `4px solid ${COLORS.sky}`,
                    pl: { xs: 2, sm: 2.5 },
                    my: { xs: 2.5, md: 3 },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="blockquote"
                    sx={{
                      color: COLORS.blue,
                      fontWeight: 600,
                      fontSize: { xs: '1.05rem', sm: '1.1rem', md: '1.15rem' },
                      lineHeight: 1.6,
                      m: 0,
                    }}
                  >
                    “To be Canada&apos;s most trusted technology partner for organizations building the intelligent, data-driven enterprises of the future.”
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: COLORS.blue,
                    lineHeight: 1.75,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    fontWeight: 400,
                  }}
                >
                  We envision a future where every organization, regardless of size or sector, has access to enterprise-grade engineering talent and intelligent systems that turn data into decisive action. NorthNode Analytics exists to close the gap between ambitious digital strategy and dependable technical execution.
                </Typography>
              </Box>

              {/* Vertical Divider for Desktop (md+) */}
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: { xs: 'none', md: 'block' },
                  borderColor: '#D9E5F2',
                  mx: { md: '20px', lg: '24px' },
                }}
              />

              {/* Horizontal Divider for Mobile (xs to sm) */}
              <Divider
                orientation="horizontal"
                flexItem
                sx={{
                  display: { xs: 'block', md: 'none' },
                  borderColor: '#D9E5F2',
                  my: { xs: 3.5, sm: 4 },
                }}
              />

              {/* Mission Column */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      backgroundColor: '#EAF3FB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MissionIcon sx={{ color: COLORS.blue, fontSize: 24 }} />
                  </Box>
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontWeight: 800,
                      color: COLORS.blue,
                      fontSize: { xs: '1.4rem', sm: '1.55rem', md: '1.75rem' },
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Our Mission
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    borderLeft: `4px solid ${COLORS.sky}`,
                    pl: { xs: 2, sm: 2.5 },
                    my: { xs: 2.5, md: 3 },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="blockquote"
                    sx={{
                      color: COLORS.blue,
                      fontWeight: 600,
                      fontSize: { xs: '1.05rem', sm: '1.1rem', md: '1.15rem' },
                      lineHeight: 1.6,
                      m: 0,
                    }}
                  >
                    “To engineer secure, scalable, and intelligent digital solutions that help our clients operate faster, decide smarter, and grow with confidence.”
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: COLORS.blue,
                    lineHeight: 1.75,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    fontWeight: 400,
                  }}
                >
                  We deliver on this mission by pairing disciplined software engineering practice with modern data and AI capability, treating every engagement as a long-term partnership rather than a one-time project. Our teams are structured to embed deeply with client stakeholders, ensuring technology decisions are grounded in real business outcomes.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* 4. WHAT DRIVES US / OUR CORE VALUES */}
      <Box
        component="section"
        sx={{
          pb: { xs: 4, sm: 5, md: 6 },
          px: { xs: '24px', sm: '36px', md: '48px', lg: '64px' },
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ mx: 'auto' }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #D9E5F2',
              boxShadow: '0 4px 24px rgba(11, 31, 58, 0.04)',
              p: { xs: '24px', sm: '32px', md: '40px 44px' },
              position: 'relative',
            }}
          >
            {/* Section Heading */}
            <Box sx={{ mb: { xs: '24px', md: '36px' } }}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: '12px' }}>
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
                  WHAT DRIVES US
                </Typography>
                <Box sx={{ width: 34, height: 2, backgroundColor: '#1E4D8C', borderRadius: 1 }} />
              </Stack>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: '#0B1F3A',
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.35rem' },
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                Our Core Values
              </Typography>
            </Box>

            {/* 3-column x 2-row grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                },
                gap: { xs: '16px', sm: '20px', md: '24px' },
              }}
            >
              {coreValues.map((val) => (
                <Card
                  key={val.title}
                  elevation={0}
                  sx={{
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
                    },
                  }}
                >
                  {/* Top-left Icon Badge: matching Home Services cards */}
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
                      '& .MuiSvgIcon-root': {
                        fontSize: '24px !important',
                        color: 'inherit !important',
                        transition: 'color 0.25s ease',
                      },
                    }}
                  >
                    {val.icon}
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
                    {val.title}
                  </Typography>

                  {/* Description: readable medium-dark blue/gray */}
                  <Typography
                    sx={{
                      color: '#42546B',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                  >
                    {val.desc}
                  </Typography>
                </Card>
              ))}
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* 5. AT A GLANCE — CORPORATE SNAPSHOT */}
      <Box
        component="section"
        sx={{
          pb: { xs: '48px', md: '56px', lg: '64px' },
          px: { xs: '24px', sm: '36px', md: '48px', lg: '64px' },
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ mx: 'auto' }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #D9E5F2',
              boxShadow: '0 4px 24px rgba(11, 31, 58, 0.04)',
              p: { xs: '24px', sm: '32px', md: '40px 44px' },
              position: 'relative',
            }}
          >
            {/* Section Heading */}
            <Box sx={{ mb: { xs: '24px', md: '36px' } }}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: '12px' }}>
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
                  AT A GLANCE
                </Typography>
                <Box sx={{ width: 34, height: 2, backgroundColor: '#1E4D8C', borderRadius: 1 }} />
              </Stack>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: '#0B1F3A',
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.35rem' },
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                At a Glance — Corporate Snapshot
              </Typography>
            </Box>

            {/* Corporate Snapshot Card Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                },
                gap: { xs: '16px', sm: '20px', md: '24px' },
              }}
            >
              {corporateSnapshot.map((item) => {
                const isIndustryFocus = item.label === 'Industry Focus';
                return (
                  <Card
                    key={item.label}
                    elevation={0}
                    sx={{
                      gridColumn: isIndustryFocus
                        ? { xs: 'span 1', sm: 'span 2', md: 'span 3' }
                        : 'span 1',
                      borderRadius: '16px',
                      backgroundColor: '#F2F5F9',
                      border: '1px solid #D9E5F2',
                      boxShadow: '0 4px 14px rgba(11, 31, 58, 0.05)',
                      p: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: isIndustryFocus ? { xs: 'auto', md: '110px' } : { xs: 'auto', sm: '135px', md: '145px' },
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        backgroundColor: '#FFFFFF',
                        borderColor: '#1E4D8C',
                        boxShadow: '0 12px 28px rgba(11, 31, 58, 0.1)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#1E4D8C',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        letterSpacing: 1.2,
                        textTransform: 'uppercase',
                        mb: 1.2,
                      }}
                    >
                      {item.label}
                    </Typography>
                    {renderSnapshotValue(item.label, item.value)}
                  </Card>
                );
              })}
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* 6. COMPANY PROFILE & LEADERSHIP PHILOSOPHY (Side-by-Side 2-Column Layout) */}
      <Box
        component="section"
        sx={{
          pb: { xs: '48px', sm: '56px', md: '64px', lg: '80px' },
          px: { xs: '24px', sm: '36px', md: '48px', lg: '64px' },
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ mx: 'auto' }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #D9E5F2',
              boxShadow: '0 4px 24px rgba(11, 31, 58, 0.04)',
              p: { xs: '24px', sm: '32px', md: '40px 44px' },
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: '24px',
              alignItems: 'stretch',
            }}
          >
            {/* Card 1: Company Profile & Legitimacy */}
            <Card
              elevation={0}
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #D6E2F0',
                boxShadow: '0 4px 20px rgba(11, 31, 58, 0.04)',
                p: { xs: '20px', sm: '26px', md: '28px 30px' },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 28px rgba(11, 31, 58, 0.08)',
                  borderColor: '#3E92CC',
                },
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: '#0B1F3A',
                  fontWeight: 800,
                  fontSize: { xs: '1.35rem', sm: '1.5rem', md: '1.65rem' },
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  mb: { xs: 2, md: 2.25 },
                }}
              >
                Company Profile & Legitimacy
              </Typography>

              {/* Compact Information Blocks Grid */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: { xs: '8px', sm: '10px' },
                  flex: 1,
                }}
              >
                {companyProfileDetails.map((item) => {
                  const isFullWidth = item.label === 'Core Competencies' || item.label === 'Engagement Types';
                  return (
                    <Box
                      key={item.label}
                      sx={{
                        gridColumn: isFullWidth ? { xs: 'span 1', sm: 'span 2' } : 'span 1',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #D6E2F0',
                        borderRadius: '8px',
                        p: { xs: '9px 12px', sm: '10px 14px' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: '#FFFFFF',
                          borderColor: '#3E92CC',
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#0B1F3A',
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          lineHeight: 1.2,
                          mb: 0.35,
                        }}
                      >
                        {item.label}
                      </Typography>
                      {item.label === 'Website' ? (
                        <Box
                          component="a"
                          href={`https://${item.value}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: '#1E4D8C',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            lineHeight: 1.35,
                            wordBreak: 'break-word',
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
                            fontSize: '0.85rem',
                            lineHeight: 1.35,
                            wordBreak: 'break-word',
                          }}
                        >
                          {item.value}
                        </Typography>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Card>

            {/* Card 2: Leadership Philosophy */}
            <Card
              elevation={0}
              sx={{
                backgroundColor: '#1E4D8C',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 24px rgba(30, 77, 140, 0.18)',
                p: { xs: '24px', sm: '28px', md: '32px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 36px rgba(30, 77, 140, 0.3)',
                },
              }}
            >
              {/* Header: Icon + Heading */}
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                <LeadershipIcon sx={{ color: '#3E92CC', fontSize: { xs: 28, md: 32 } }} />
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.75rem' },
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                  }}
                >
                  Leadership Philosophy
                </Typography>
              </Stack>

              {/* Accent Line */}
              <Box sx={{ width: 40, height: 3, backgroundColor: '#3E92CC', borderRadius: 1.5, mb: { xs: 2.5, md: 3 } }} />

              {/* Body Text */}
              <Typography
                variant="body1"
                sx={{
                  color: '#FFFFFF',
                  opacity: 0.94,
                  fontSize: { xs: '0.98rem', md: '1.05rem' },
                  lineHeight: 1.8,
                }}
              >
                NorthNode Analytics is led by a senior team with backgrounds spanning global systems integrators, cloud hyperscalers, and venture-backed product companies. This blend of enterprise discipline and startup agility informs how we staff, price, and deliver every engagement — with governance where it matters and speed where it counts.
              </Typography>
            </Card>
          </Box>
        </Paper>
      </Container>
    </Box>

      {/* 8. WHY CHOOSE NORTHNODE ANALYTICS */}
      <Box
        component="section"
        sx={{
          pb: { xs: 5, md: 7 },
          px: { xs: '24px', sm: '36px', md: '48px', lg: '64px' },
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ mx: 'auto' }}>
          {/* Section Header */}
          <Box sx={{ mb: { xs: 3.5, md: 4.5 } }}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: '12px' }}>
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
                WHY CHOOSE NORTHNODE
              </Typography>
              <Box sx={{ width: 34, height: 2, backgroundColor: '#1E4D8C', borderRadius: 1 }} />
            </Stack>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: '#0B1F3A',
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.35rem' },
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                mb: 1.5,
              }}
            >
              Why Choose NorthNode Analytics
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#1E4D8C',
                maxWidth: '720px',
                lineHeight: 1.6,
                fontSize: { xs: '0.95rem', md: '1.025rem' },
              }}
            >
              Proven Canadian engineering rigor paired with global delivery capability to accelerate your digital transformation.
            </Typography>
          </Box>

          {/* 2-Column Benefit Card Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: { xs: '16px', md: '20px' },
              alignItems: 'stretch',
            }}
          >
            {whyChooseBenefits.map((item, idx) => {
              const isLast = idx === whyChooseBenefits.length - 1;
              return (
                <Card
                  key={item.title}
                  elevation={0}
                  sx={{
                    gridColumn: isLast ? { xs: 'span 1', md: 'span 2' } : 'span 1',
                    backgroundColor: '#EAF3FB',
                    border: '1px solid #D9E4F0',
                    borderRadius: '14px',
                    p: { xs: '20px', md: '24px' },
                    boxShadow: '0 4px 14px rgba(11, 31, 58, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      backgroundColor: '#FFFFFF',
                      borderColor: '#3E92CC',
                      boxShadow: '0 12px 28px rgba(11, 31, 58, 0.06), 0 0 20px rgba(62, 146, 204, 0.22)',
                      '& .check-circle-badge': {
                        backgroundColor: '#EAF3FB',
                        color: '#1E4D8C',
                      },
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      className="check-circle-badge"
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#3E92CC',
                        flexShrink: 0,
                        boxShadow: '0 2px 6px rgba(11, 31, 58, 0.06)',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <CheckIcon sx={{ fontSize: 20, color: 'inherit' }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          color: '#0B1F3A',
                          fontWeight: 700,
                          fontSize: { xs: '1.05rem', md: '1.12rem' },
                          lineHeight: 1.35,
                          mb: 0.8,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#1E4D8C',
                          fontSize: { xs: '0.9rem', md: '0.95rem' },
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              );
            })}
          </Box>

          {/* Centered CTA Button */}
          <Box sx={{ textAlign: 'center', mt: { xs: 4.5, md: 5.5 } }}>
            <Button
              variant="contained"
              onClick={() => handleNavigation('Contact Us')}
              endIcon={<ArrowIcon />}
              sx={{
                backgroundColor: '#1E4D8C',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.05rem' },
                textTransform: 'none',
                px: { xs: 3.5, md: 4.5 },
                py: 1.5,
                borderRadius: '10px',
                boxShadow: '0 4px 14px rgba(30, 77, 140, 0.25)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#163E72',
                  boxShadow: '0 6px 20px rgba(30, 77, 140, 0.35)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Partner With NorthNode Analytics
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

AboutUsComponent.propTypes = {
  onNavigate: PropTypes.func,
};

export default AboutUsComponent;

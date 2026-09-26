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
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { ROUTE_MAP } from '../../constants/routes';
import PageBanner from '../common/PageBanner';
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
  VerifiedUser as ShieldIcon,
  Handshake as HandshakeIcon,
  ArrowForward as ArrowIcon,
  Memory as TechIcon,
  CheckCircle as ScopeIcon,
  Groups as DedicatedTeamIcon,
  Engineering as StaffAugIcon,
  SupportAgent as ManagedServicesIcon
} from '@mui/icons-material';

const COLORS = {
  navy: '#0B1F3A',
  blue: '#1E4D8C',
  sky: '#3E92CC',
  light: '#F2F5F9',
  white: '#FFFFFF',
};

const all12Services = [
  {
    num: '01',
    name: 'Custom Software Development',
    desc: 'Bespoke, scalable applications engineered around your business logic — from greenfield builds to modernization of legacy platforms.',
    icon: <CodeIcon sx={{ fontSize: 32, color: COLORS.sky }} />
  },
  {
    num: '02',
    name: 'Web Development',
    desc: 'High-performance, responsive web platforms built on modern frameworks with a focus on accessibility and speed.',
    icon: <WebIcon sx={{ fontSize: 32, color: COLORS.sky }} />
  },
  {
    num: '03',
    name: 'Mobile App Development',
    desc: 'Native iOS/Android and cross-platform applications engineered for reliability and seamless user experience.',
    icon: <MobileIcon sx={{ fontSize: 32, color: COLORS.sky }} />
  },
  {
    num: '04',
    name: 'Cloud Solutions',
    desc: 'Cloud architecture, migration, and managed operations across AWS, Microsoft Azure, and Google Cloud Platform.',
    icon: <CloudIcon sx={{ fontSize: 32, color: COLORS.sky }} />
  },
  {
    num: '05',
    name: 'Data Analytics',
    desc: 'Data engineering, warehousing, and business intelligence that turn raw data into decision-ready insight.',
    icon: <AnalyticsIcon sx={{ fontSize: 32, color: COLORS.sky }} />
  },
  {
    num: '06',
    name: 'Artificial Intelligence',
    desc: 'Applied AI solutions including intelligent automation, computer vision, and natural language processing.',
    icon: <AIIcon sx={{ fontSize: 32, color: COLORS.sky }} />
  },
  {
    num: '07',
    name: 'Machine Learning',
    desc: 'Custom ML model development, MLOps pipelines, and production-grade model deployment and monitoring.',
    icon: <MLIcon sx={{ fontSize: 32, color: COLORS.sky }} />
  },
  {
    num: '08',
    name: 'DevOps',
    desc: 'CI/CD pipelines, infrastructure as code, and site reliability engineering for continuous, dependable delivery.',
    icon: <DevOpsIcon sx={{ fontSize: 32, color: COLORS.sky }} />
  },
  {
    num: '09',
    name: 'UI/UX Design',
    desc: 'Research-driven product design that balances usability, accessibility, and brand expression.',
    icon: <DesignIcon sx={{ fontSize: 32, color: COLORS.sky }} />
  },
  {
    num: '10',
    name: 'Cybersecurity',
    desc: 'Security assessments, secure architecture, and managed protection for applications and infrastructure.',
    icon: <SecurityIcon sx={{ fontSize: 32, color: COLORS.sky }} />
  },
  {
    num: '11',
    name: 'QA & Testing',
    desc: 'Manual and automated testing frameworks that safeguard quality across every release cycle.',
    icon: <QAIcon sx={{ fontSize: 32, color: COLORS.sky }} />
  },
  {
    num: '12',
    name: 'IT Consulting',
    desc: 'Technology strategy, digital transformation roadmaps, and enterprise architecture advisory.',
    icon: <ConsultingIcon sx={{ fontSize: 32, color: COLORS.sky }} />
  }
];

const techStack = [
  { category: 'Languages', techs: 'JavaScript / TypeScript, Python, Java, C#, Go, Swift, Kotlin' },
  { category: 'Frontend', techs: 'React, Next.js, Angular, Vue.js' },
  { category: 'Backend', techs: 'Node.js, .NET, Spring Boot, Django, FastAPI' },
  { category: 'Mobile', techs: 'React Native, Flutter, Swift (iOS), Kotlin (Android)' },
  { category: 'Cloud Platforms', techs: 'AWS, Microsoft Azure, Google Cloud Platform' },
  { category: 'Data & Analytics', techs: 'Snowflake, Databricks, Power BI, Apache Spark, Kafka' },
  { category: 'AI / ML', techs: 'TensorFlow, PyTorch, OpenAI & Azure AI Services, MLflow' },
  { category: 'DevOps', techs: 'Docker, Kubernetes, Terraform, GitHub Actions, Jenkins' },
  { category: 'Databases', techs: 'PostgreSQL, MySQL, MongoDB, Redis, Amazon Redshift' },
  { category: 'Security', techs: 'OAuth2/OIDC, SIEM tooling, static & dynamic code analysis' }
];

const devProcessSteps = [
  {
    step: '01',
    title: 'Discovery & Requirements',
    desc: 'We align on business goals, technical constraints, and success metrics before any design or engineering begins.'
  },
  {
    step: '02',
    title: 'Solution Architecture',
    desc: 'Our architects design a scalable, secure technical approach and validate it against your roadmap.'
  },
  {
    step: '03',
    title: 'Agile Development',
    desc: 'Cross-functional squads build in iterative sprints, with regular demos and stakeholder checkpoints.'
  },
  {
    step: '04',
    title: 'Quality Assurance',
    desc: 'Continuous automated and manual testing runs alongside development, not after it.'
  },
  {
    step: '05',
    title: 'Deployment & Launch',
    desc: 'We manage release planning, infrastructure provisioning, and go-live support.'
  },
  {
    step: '06',
    title: 'Support & Optimization',
    desc: 'Post-launch monitoring, iteration, and managed support keep systems performing as you scale.'
  }
];

const qaDisciplineTable = [
  { discipline: 'Functional Testing', approach: 'Requirement-mapped test cases executed each sprint' },
  { discipline: 'Automated Regression', approach: 'CI-integrated automated suites covering critical user paths' },
  { discipline: 'Performance Testing', approach: 'Load and stress testing against defined SLAs' },
  { discipline: 'Accessibility Testing', approach: 'WCAG 2.1 AA conformance validation' },
  { discipline: 'User Acceptance Testing', approach: 'Structured UAT cycles with client stakeholders before go-live' }
];

const securityStandardsTable = [
  { practice: 'Secure SDLC', app: 'Threat modeling and security review embedded in every sprint' },
  { practice: 'Data Encryption', app: 'Encryption in transit and at rest across all managed environments' },
  { practice: 'Identity & Access', app: 'Role-based access control and least-privilege provisioning' },
  { practice: 'ISO/IEC 27001', app: 'Information security management practices in active alignment' },
  { practice: 'SOC 2 Aligned Controls', app: 'Operational controls modeled on SOC 2 Type II principles' },
  { practice: 'Vulnerability Management', app: 'Continuous static/dynamic scanning and periodic penetration testing' }
];

const engagementModels = [
  { model: 'Fixed-Scope Project', suitedFor: 'Well-defined initiatives with clear deliverables and timelines' },
  { model: 'Dedicated Team', suitedFor: 'Ongoing product development requiring an embedded, long-term squad' },
  { model: 'Staff Augmentation', suitedFor: 'Extending an existing internal team with specialized skill sets' },
  { model: 'Retainer / Managed Services', suitedFor: 'Continuous support, optimization, and enhancement post-launch' }
];

const getModelIcon = (model) => {
  switch (model) {
    case 'Fixed-Scope Project':
      return <ScopeIcon sx={{ fontSize: 22 }} />;
    case 'Dedicated Team':
      return <DedicatedTeamIcon sx={{ fontSize: 22 }} />;
    case 'Staff Augmentation':
      return <StaffAugIcon sx={{ fontSize: 22 }} />;
    case 'Retainer / Managed Services':
      return <ManagedServicesIcon sx={{ fontSize: 22 }} />;
    default:
      return <HandshakeIcon sx={{ fontSize: 22 }} />;
  }
};

const ServicesComponent = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleNavigation = (pageName) => {
    if (onNavigate) {
      onNavigate(pageName);
    }
    const targetPath = ROUTE_MAP[pageName] || pageName;
    navigate(targetPath);
  };

  return (
    <Box sx={{ backgroundColor: COLORS.light, pb: 0 }}>
      {/* 1. HERO & INTRO */}
      <PageBanner
        title="IT Services & Capabilities"
        subtitle="NorthNode Analytics offers a full-spectrum portfolio of technology services, enabling clients to engage us for a single specialized capability or as an end-to-end digital delivery partner."
      />

      {/* 2. ALL 12 IT SERVICES CARDS - ENCLOSED IN WHITE OUTER COVER CARD */}
      <Box
        component="section"
        sx={{
          backgroundColor: '#F2F5F9',
          py: { xs: '48px', sm: '56px', md: '64px', lg: '80px' },
          px: { xs: '20px', sm: '36px', md: '48px', lg: '80px', xl: '96px' },
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ mx: 'auto' }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #D6E2F0',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(11, 31, 58, 0.04)',
              p: { xs: '24px', sm: '32px', md: '40px' },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Section Header: Left-aligned with Eyebrow, Heading, and Description */}
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
                  OUR SERVICE PORTFOLIO
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
                Comprehensive Engineering Solutions
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#1E4D8C',
                  maxWidth: '740px',
                  lineHeight: 1.6,
                  fontSize: { xs: '0.95rem', md: '1.025rem' },
                }}
              >
                A full-spectrum portfolio of technology services, enabling clients to engage us for specialized solutions or end-to-end digital delivery.
              </Typography>
            </Box>

            {/* 4 Cards x 3 Rows Grid */}
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
              {all12Services.map((service) => (
                <Card
                  key={service.name}
                  elevation={0}
                  onClick={() => handleNavigation('Contact Us')}
                  sx={{
                    cursor: 'pointer',
                    borderRadius: '14px',
                    backgroundColor: '#F2F5F9',
                    border: '1px solid #D6E2F0',
                    boxShadow: '0 4px 14px rgba(11, 31, 58, 0.05)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    p: '24px',
                    pb: '56px',
                    minHeight: { xs: 210, md: 230 },
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
                  {/* Top-left Icon Badge */}
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
                      mb: 2,
                      transition: 'all 0.25s ease',
                      flexShrink: 0,
                      '& .MuiSvgIcon-root': {
                        fontSize: 24,
                        color: 'inherit',
                      },
                    }}
                  >
                    {service.icon}
                  </Box>

                  {/* Service Title */}
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

                  {/* Short Service Description */}
                  <Typography
                    sx={{
                      color: '#1E4D8C',
                      fontSize: '0.86rem',
                      lineHeight: 1.55,
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
                      bottom: '18px',
                      right: '18px',
                      width: 28,
                      height: 28,
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
                </Card>
              ))}
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* 3. TECHNOLOGY STACK & HOW WE DELIVER */}
      <Box
        component="section"
        sx={{
          backgroundColor: '#F2F5F9',
          pb: { xs: '48px', sm: '56px', md: '64px', lg: '80px' },
          px: { xs: '20px', sm: '36px', md: '48px', lg: '80px', xl: '96px' },
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ mx: 'auto' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: { xs: '24px', md: '28px', lg: '32px' },
              alignItems: 'stretch',
            }}
          >
            {/* Left Card: Technology Stack */}
            <Card
              elevation={0}
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #D6E3F0',
                boxShadow: '0 4px 20px rgba(11, 31, 58, 0.04)',
                p: { xs: '20px', sm: '26px', md: '30px' },
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
              {/* Header */}
              <Box sx={{ mb: 2.5 }}>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: '#3E92CC',
                      fontWeight: 700,
                      letterSpacing: 2,
                      fontSize: '0.825rem',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                    }}
                  >
                    CORE CAPABILITIES
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 0.8 }}>
                  <TechIcon sx={{ color: '#3E92CC', fontSize: 26 }} />
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      color: '#0B1F3A',
                      fontWeight: 800,
                      fontSize: { xs: '1.35rem', sm: '1.5rem', md: '1.65rem' },
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Technology Stack
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1E4D8C',
                    fontSize: '0.88rem',
                    lineHeight: 1.5,
                  }}
                >
                  Proof of execution — organized by core engineering and infrastructure categories.
                </Typography>
              </Box>

              {/* Technology Categories Rows */}
              <Box
                sx={{
                  border: '1px solid #D6E3F0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {techStack.map((row, idx) => (
                  <Box
                    key={row.category}
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F2F5F9',
                      borderBottom: idx === techStack.length - 1 ? 'none' : '1px solid #D6E3F0',
                      flex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: '100%', sm: '36%', md: '34%' },
                        fontWeight: 700,
                        color: '#0B1F3A',
                        fontSize: '0.84rem',
                        p: { xs: '7px 12px 2px', sm: '8.5px 14px' },
                        borderRight: { xs: 'none', sm: '1px solid #D6E3F0' },
                        flexShrink: 0,
                      }}
                    >
                      {row.category}
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        color: '#1E4D8C',
                        fontWeight: 500,
                        fontSize: '0.825rem',
                        lineHeight: 1.45,
                        p: { xs: '2px 12px 7px', sm: '8.5px 14px' },
                        wordBreak: 'break-word',
                      }}
                    >
                      {row.techs}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Card>

            {/* Right Card: How We Deliver / Development Process */}
            <Card
              elevation={0}
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #D6E3F0',
                boxShadow: '0 4px 20px rgba(11, 31, 58, 0.04)',
                p: { xs: '20px', sm: '26px', md: '30px' },
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
              {/* Header */}
              <Box sx={{ mb: 2.5 }}>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: '#3E92CC',
                      fontWeight: 700,
                      letterSpacing: 2,
                      fontSize: '0.825rem',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                    }}
                  >
                    HOW WE DELIVER
                  </Typography>
                </Stack>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    color: '#0B1F3A',
                    fontWeight: 800,
                    fontSize: { xs: '1.35rem', sm: '1.5rem', md: '1.65rem' },
                    letterSpacing: '-0.02em',
                    mb: 0.8,
                  }}
                >
                  Development Process
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1E4D8C',
                    fontSize: '0.88rem',
                    lineHeight: 1.5,
                  }}
                >
                  Structured agile execution engineered for predictability, transparency, and speed.
                </Typography>
              </Box>

              {/* Timeline Steps */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  pt: 0.5,
                }}
              >
                {devProcessSteps.map((step, idx) => {
                  const isLast = idx === devProcessSteps.length - 1;
                  return (
                    <Box
                      key={step.step}
                      sx={{
                        display: 'flex',
                        position: 'relative',
                        pb: isLast ? 0 : { xs: 1.8, md: 2.2 },
                      }}
                    >
                      {/* Vertical Connecting Line */}
                      {!isLast && (
                        <Box
                          sx={{
                            position: 'absolute',
                            left: '15px',
                            top: '30px',
                            bottom: 0,
                            width: '2px',
                            backgroundColor: '#D6E3F0',
                          }}
                        />
                      )}

                      {/* Number Badge */}
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          backgroundColor: '#EAF3FB',
                          border: '1.5px solid #3E92CC',
                          color: '#3E92CC',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '0.78rem',
                          flexShrink: 0,
                          mr: 1.8,
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        {step.step}
                      </Box>

                      {/* Content */}
                      <Box sx={{ flex: 1, pt: 0.2 }}>
                        <Typography
                          sx={{
                            color: '#0B1F3A',
                            fontWeight: 700,
                            fontSize: { xs: '0.92rem', md: '0.96rem' },
                            lineHeight: 1.3,
                            mb: 0.3,
                          }}
                        >
                          {step.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: '#1E4D8C',
                            fontSize: { xs: '0.81rem', md: '0.84rem' },
                            lineHeight: 1.45,
                          }}
                        >
                          {step.desc}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* 4 & 5. QUALITY ASSURANCE & SECURITY STANDARDS */}
      <Box
        component="section"
        sx={{
          backgroundColor: '#F2F5F9',
          pb: { xs: '48px', sm: '56px', md: '64px', lg: '80px' },
          px: { xs: '20px', sm: '36px', md: '48px', lg: '80px', xl: '96px' },
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ mx: 'auto' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: { xs: '24px', md: '28px', lg: '32px' },
              alignItems: 'stretch',
            }}
          >
            {/* Left Card: Quality Assurance Standards */}
            <Card
              elevation={0}
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #D6E3F0',
                boxShadow: '0 4px 20px rgba(11, 31, 58, 0.04)',
                p: { xs: '20px', sm: '26px', md: '30px' },
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
              {/* Header */}
              <Box sx={{ mb: { xs: 2, md: 2.5 } }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.2 }}>
                  <QAIcon sx={{ color: '#3E92CC', fontSize: { xs: 26, md: 30 } }} />
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      color: '#0B1F3A',
                      fontWeight: 800,
                      fontSize: { xs: '1.35rem', sm: '1.5rem', md: '1.65rem' },
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Quality Assurance Standards
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1E4D8C',
                    fontSize: { xs: '0.86rem', md: '0.88rem' },
                    lineHeight: 1.55,
                    minHeight: { md: '66px' },
                  }}
                >
                  Quality at NorthNode Analytics is a discipline embedded across the delivery lifecycle, not a final checkpoint. Our QA practice combines automated regression coverage with structured manual testing to ensure every release meets functional, performance, and usability standards.
                </Typography>
              </Box>

              {/* QA Table */}
              <TableContainer
                sx={{
                  border: '1px solid #D6E3F0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Table sx={{ height: '100%', minWidth: '100%', tableLayout: 'fixed' }}>
                  <TableHead sx={{ backgroundColor: '#EAF3FB' }}>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 800,
                          fontSize: '0.75rem',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: '#0B1F3A',
                          width: { xs: '38%', sm: '32%' },
                          py: 1.4,
                          px: { xs: 1.5, sm: 2 },
                          borderBottom: '1.5px solid #D6E3F0',
                        }}
                      >
                        Category
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 800,
                          fontSize: '0.75rem',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: '#1E4D8C',
                          py: 1.4,
                          px: { xs: 1.5, sm: 2 },
                          borderBottom: '1.5px solid #D6E3F0',
                        }}
                      >
                        Focus & Deliverable
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ flexGrow: 1 }}>
                    {qaDisciplineTable.map((row, idx) => (
                      <TableRow
                        key={row.discipline}
                        sx={{
                          backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F2F5F9',
                          '&:last-child td': { borderBottom: 0 },
                          '&:hover': { backgroundColor: '#EAF3FB' },
                          transition: 'background-color 0.2s ease',
                        }}
                      >
                        <TableCell
                          sx={{
                            fontWeight: 700,
                            color: '#0B1F3A',
                            fontSize: { xs: '0.82rem', sm: '0.86rem' },
                            width: { xs: '38%', sm: '32%' },
                            py: { xs: 1.4, md: 1.6 },
                            px: { xs: 1.5, sm: 2 },
                            borderBottom: '1px solid #D6E3F0',
                            verticalAlign: 'middle',
                          }}
                        >
                          {row.discipline}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: '#1E4D8C',
                            fontSize: { xs: '0.8rem', sm: '0.84rem' },
                            lineHeight: 1.5,
                            py: { xs: 1.4, md: 1.6 },
                            px: { xs: 1.5, sm: 2 },
                            borderBottom: '1px solid #D6E3F0',
                            verticalAlign: 'middle',
                          }}
                        >
                          {row.approach}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>

            {/* Right Card: Security Standards & Compliance */}
            <Card
              elevation={0}
              sx={{
                backgroundColor: '#0B1F3A',
                background: 'linear-gradient(145deg, #0B1F3A 0%, #112B50 60%, #163761 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(62, 146, 204, 0.25)',
                boxShadow: '0 8px 24px rgba(11, 31, 58, 0.12)',
                p: { xs: '20px', sm: '26px', md: '30px' },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 14px 32px rgba(11, 31, 58, 0.22)',
                  borderColor: '#3E92CC',
                },
              }}
            >
              {/* Header */}
              <Box sx={{ mb: { xs: 2, md: 2.5 } }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.2 }}>
                  <ShieldIcon sx={{ color: '#3E92CC', fontSize: { xs: 26, md: 30 } }} />
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: { xs: '1.35rem', sm: '1.5rem', md: '1.65rem' },
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Security Standards & Compliance
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: { xs: '0.86rem', md: '0.88rem' },
                    lineHeight: 1.55,
                    minHeight: { md: '66px' },
                  }}
                >
                  Security is engineered into every layer of our solutions, from architecture through deployment. Our practices are aligned with recognized industry frameworks to give clients confidence in the systems we build and operate.
                </Typography>
              </Box>

              {/* Security Table */}
              <TableContainer
                sx={{
                  border: '1px solid rgba(62, 146, 204, 0.25)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(11, 31, 58, 0.4)',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Table sx={{ height: '100%', minWidth: '100%', tableLayout: 'fixed' }}>
                  <TableHead sx={{ backgroundColor: 'rgba(62, 146, 204, 0.15)' }}>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: 800,
                          fontSize: '0.75rem',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: '#3E92CC',
                          width: { xs: '38%', sm: '32%' },
                          py: 1.4,
                          px: { xs: 1.5, sm: 2 },
                          borderBottom: '1.5px solid rgba(62, 146, 204, 0.25)',
                        }}
                      >
                        Category
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 800,
                          fontSize: '0.75rem',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: '#FFFFFF',
                          py: 1.4,
                          px: { xs: 1.5, sm: 2 },
                          borderBottom: '1.5px solid rgba(62, 146, 204, 0.25)',
                        }}
                      >
                        Focus & Deliverable
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ flexGrow: 1 }}>
                    {securityStandardsTable.map((row, idx) => (
                      <TableRow
                        key={row.practice}
                        sx={{
                          backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.04)',
                          '&:last-child td': { borderBottom: 0 },
                          '&:hover': { backgroundColor: 'rgba(62, 146, 204, 0.12)' },
                          transition: 'background-color 0.2s ease',
                        }}
                      >
                        <TableCell
                          sx={{
                            fontWeight: 700,
                            color: '#3E92CC',
                            fontSize: { xs: '0.82rem', sm: '0.86rem' },
                            width: { xs: '38%', sm: '32%' },
                            py: { xs: 1.2, md: 1.35 },
                            px: { xs: 1.5, sm: 2 },
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            verticalAlign: 'middle',
                          }}
                        >
                          {row.practice}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: '#FFFFFF',
                            fontSize: { xs: '0.8rem', sm: '0.84rem' },
                            lineHeight: 1.5,
                            py: { xs: 1.2, md: 1.35 },
                            px: { xs: 1.5, sm: 2 },
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            verticalAlign: 'middle',
                          }}
                        >
                          {row.app}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* 7. CLIENT ENGAGEMENT MODELS (ENCLOSED IN WHITE COVER CARD) */}
      <Box
        component="section"
        sx={{
          backgroundColor: '#F2F5F9',
          pb: { xs: '56px', sm: '64px', md: '72px', lg: '88px' },
          px: { xs: '20px', sm: '36px', md: '48px', lg: '80px', xl: '96px' },
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
            <Box sx={{ mb: { xs: 3.5, md: 4.5 } }}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.2 }}>
                <HandshakeIcon sx={{ color: '#3E92CC', fontSize: { xs: 28, md: 34 } }} />
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    color: '#0B1F3A',
                    fontWeight: 800,
                    fontSize: { xs: '1.5rem', sm: '1.85rem', md: '2.2rem' },
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  Client Engagement Models
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{
                  color: '#1E4D8C',
                  maxWidth: '780px',
                  lineHeight: 1.65,
                  fontSize: { xs: '0.95rem', md: '1.025rem' },
                }}
              >
                We tailor our engagement structure to how each client prefers to work, offering flexibility without sacrificing delivery discipline.
              </Typography>
            </Box>

            {/* 4 Professional Horizontal Engagement Rows / Cards */}
            <Stack spacing={{ xs: 2, sm: 2.2, md: 2.5 }}>
              {engagementModels.map((row) => (
                <Card
                  key={row.model}
                  elevation={0}
                  onClick={() => handleNavigation('Contact Us')}
                  sx={{
                    cursor: 'pointer',
                    borderRadius: '14px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #D9E3EF',
                    boxShadow: '0 2px 8px rgba(11, 31, 58, 0.03)',
                    p: { xs: '18px 20px', sm: '20px 24px', md: '22px 28px' },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    gap: { xs: 1.5, md: 3 },
                    position: 'relative',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      backgroundColor: '#F2F5F9',
                      borderColor: '#3E92CC',
                      boxShadow: '0 10px 24px rgba(11, 31, 58, 0.08)',
                      '& .model-icon-badge': {
                        backgroundColor: 'rgba(62, 146, 204, 0.18)',
                        color: '#1E4D8C',
                      },
                      '& .model-title': {
                        color: '#1E4D8C',
                      },
                      '& .model-arrow-circle': {
                        backgroundColor: '#1E4D8C',
                        color: '#FFFFFF',
                        transform: 'translateX(4px)',
                        boxShadow: '0 2px 8px rgba(30, 77, 140, 0.25)',
                      },
                    },
                  }}
                >
                  {/* Left Side: Icon Badge & Content Stack */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      gap: { xs: 1.8, sm: 2.5 },
                      flex: 1,
                      width: '100%',
                    }}
                  >
                    {/* Visual Indicator Icon Badge */}
                    <Box
                      className="model-icon-badge"
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '10px',
                        backgroundColor: '#E4EEF8',
                        color: '#3E92CC',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {getModelIcon(row.model)}
                    </Box>

                    {/* Model Name & Suited For Description */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'flex-start', md: 'center' },
                        gap: { xs: 0.5, md: 3 },
                        flex: 1,
                        width: '100%',
                      }}
                    >
                      <Typography
                        className="model-title"
                        sx={{
                          color: '#0B1F3A',
                          fontWeight: 700,
                          fontSize: { xs: '1.02rem', sm: '1.08rem', md: '1.12rem' },
                          letterSpacing: '-0.01em',
                          width: { xs: '100%', md: '250px', lg: '280px' },
                          flexShrink: 0,
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {row.model}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#1E4D8C',
                          fontSize: { xs: '0.88rem', sm: '0.92rem', md: '0.95rem' },
                          lineHeight: 1.55,
                          flex: 1,
                        }}
                      >
                        {row.suitedFor}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Right Side: Arrow Action Indicator */}
                  <Box
                    className="model-arrow-circle"
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      backgroundColor: '#E4EEF8',
                      color: '#1E4D8C',
                      display: { xs: 'none', sm: 'flex' },
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <ArrowIcon sx={{ fontSize: 16 }} />
                  </Box>
                </Card>
              ))}
            </Stack>

            {/* CTA Button */}
            <Box
              sx={{
                textAlign: 'center',
                mt: { xs: 4, sm: 5, md: 6 },
                pt: { xs: 1, md: 1.5 },
              }}
            >
              <Button
                variant="contained"
                onClick={() => handleNavigation('Contact Us')}
                endIcon={<ArrowIcon sx={{ fontSize: 20, transition: 'transform 0.2s ease' }} />}
                sx={{
                  backgroundColor: '#3E92CC',
                  color: '#0B1F3A',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  textTransform: 'none',
                  px: { xs: 4, sm: 5 },
                  py: 1.6,
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(62, 146, 204, 0.35)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    backgroundColor: '#1E4D8C',
                    color: '#FFFFFF',
                    boxShadow: '0 8px 24px rgba(30, 77, 140, 0.35)',
                    transform: 'translateY(-2px)',
                    '& svg': {
                      color: '#FFFFFF',
                      transform: 'translateX(4px)',
                    },
                  },
                }}
              >
                Discuss Your Project Requirements
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

ServicesComponent.propTypes = {
  onNavigate: PropTypes.func,
};

export default ServicesComponent;

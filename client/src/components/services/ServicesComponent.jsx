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
  TableRow
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
  VerifiedUser as ShieldIcon,
  Handshake as HandshakeIcon,
  ArrowForward as ArrowIcon,
  Memory as TechIcon
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

const ServicesComponent = ({ onNavigate }) => {
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
            IT Services & Capabilities
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
            NorthNode Analytics offers a full-spectrum portfolio of technology services, enabling clients to engage us for a single specialized capability or as an end-to-end digital delivery partner.
          </Typography>
        </Container>
      </Box>

      {/* 2. ALL 12 IT SERVICES CARDS */}
      <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
        <Box textAlign="center" sx={{ mb: 5 }}>
          <Typography variant="overline" sx={{ color: COLORS.sky, fontWeight: 700, letterSpacing: 1.5, fontSize: '0.85rem' }}>
            OUR SERVICE PORTFOLIO
          </Typography>
          <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800, mt: 0.5 }}>
            Comprehensive Engineering Solutions
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {all12Services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.num}>
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
                      {service.icon}
                    </Box>
                    <Typography variant="subtitle2" sx={{ color: COLORS.blue, fontWeight: 800, fontSize: '1rem' }}>
                      {service.num}
                    </Typography>
                  </Stack>

                  <Typography variant="h6" sx={{ color: COLORS.navy, fontWeight: 700, mb: 1.5, fontSize: '1.15rem' }}>
                    {service.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: COLORS.navy, lineHeight: 1.7 }}>
                    {service.desc}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 3. TECHNOLOGY STACK TABLE */}
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
            <TechIcon sx={{ color: COLORS.sky, fontSize: 32 }} />
            <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800 }}>
              Technology Stack
            </Typography>
          </Stack>
          <Typography variant="body1" sx={{ color: COLORS.blue, mb: 3 }}>
            Proof of execution — organized by core engineering and infrastructure categories.
          </Typography>

          <TableContainer>
            <Table size="small">
              <TableBody>
                {techStack.map((row) => (
                  <TableRow key={row.category} sx={{ '&:nth-of-type(odd)': { backgroundColor: COLORS.light } }}>
                    <TableCell sx={{ fontWeight: 700, color: COLORS.navy, width: '25%', py: 1.8, fontSize: '0.95rem' }}>
                      {row.category}
                    </TableCell>
                    <TableCell sx={{ color: COLORS.blue, py: 1.8, fontSize: '0.95rem', fontWeight: 500 }}>
                      {row.techs}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      {/* 4. DEVELOPMENT PROCESS (6-Step Timeline) */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box textAlign="center" sx={{ mb: 5 }}>
          <Typography variant="overline" sx={{ color: COLORS.sky, fontWeight: 700, letterSpacing: 1.5, fontSize: '0.85rem' }}>
            HOW WE DELIVER
          </Typography>
          <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800, mt: 0.5 }}>
            Development Process
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {devProcessSteps.map((step) => (
            <Grid item xs={12} sm={6} md={4} key={step.step}>
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 2.5,
                  backgroundColor: COLORS.white,
                  borderLeft: `4px solid ${COLORS.sky}`,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(30, 77, 140, 0.12)',
                  },
                }}
              >
                <Typography variant="h5" sx={{ color: COLORS.sky, fontWeight: 800, mb: 1 }}>
                  {step.step}
                </Typography>
                <Typography variant="h6" sx={{ color: COLORS.navy, fontWeight: 700, mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: COLORS.blue, lineHeight: 1.6 }}>
                  {step.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 5. QUALITY ASSURANCE SECTION */}
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
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
            <QAIcon sx={{ color: COLORS.sky, fontSize: 32 }} />
            <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800 }}>
              Quality Assurance Standards
            </Typography>
          </Stack>
          <Typography variant="body1" sx={{ color: COLORS.navy, mb: 3, lineHeight: 1.7 }}>
            Quality at NorthNode Analytics is a discipline embedded across the delivery lifecycle, not a final checkpoint. Our QA practice combines automated regression coverage with structured manual testing to ensure every release meets functional, performance, and usability standards.
          </Typography>

          <TableContainer>
            <Table size="small">
              <TableBody>
                {qaDisciplineTable.map((row) => (
                  <TableRow key={row.discipline} sx={{ '&:nth-of-type(odd)': { backgroundColor: COLORS.light } }}>
                    <TableCell sx={{ fontWeight: 700, color: COLORS.navy, width: '30%', py: 1.8 }}>
                      {row.discipline}
                    </TableCell>
                    <TableCell sx={{ color: COLORS.blue, py: 1.8 }}>
                      {row.approach}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      {/* 6. SECURITY STANDARDS SECTION */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
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
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
            <ShieldIcon sx={{ color: COLORS.sky, fontSize: 32 }} />
            <Typography variant="h4" sx={{ color: COLORS.white, fontWeight: 800 }}>
              Security Standards & Compliance
            </Typography>
          </Stack>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.95)', mb: 3, lineHeight: 1.7 }}>
            Security is engineered into every layer of our solutions, from architecture through deployment. Our practices are aligned with recognized industry frameworks to give clients confidence in the systems we build and operate.
          </Typography>

          <TableContainer>
            <Table size="small">
              <TableBody>
                {securityStandardsTable.map((row) => (
                  <TableRow key={row.practice} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'rgba(255, 255, 255, 0.06)' } }}>
                    <TableCell sx={{ fontWeight: 700, color: COLORS.sky, width: '30%', py: 1.8 }}>
                      {row.practice}
                    </TableCell>
                    <TableCell sx={{ color: COLORS.white, py: 1.8 }}>
                      {row.app}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      {/* 7. CLIENT ENGAGEMENT MODEL */}
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
            <HandshakeIcon sx={{ color: COLORS.sky, fontSize: 32 }} />
            <Typography variant="h4" sx={{ color: COLORS.navy, fontWeight: 800 }}>
              Client Engagement Models
            </Typography>
          </Stack>
          <Typography variant="body1" sx={{ color: COLORS.blue, mb: 3 }}>
            We tailor our engagement structure to how each client prefers to work, offering flexibility without sacrificing delivery discipline.
          </Typography>

          <TableContainer>
            <Table size="small">
              <TableBody>
                {engagementModels.map((row) => (
                  <TableRow key={row.model} sx={{ '&:nth-of-type(odd)': { backgroundColor: COLORS.light } }}>
                    <TableCell sx={{ fontWeight: 700, color: COLORS.navy, width: '30%', py: 1.8 }}>
                      {row.model}
                    </TableCell>
                    <TableCell sx={{ color: COLORS.blue, py: 1.8 }}>
                      {row.suitedFor}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      {/* CTA BUTTON */}
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
            Discuss Your Project Requirements
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

ServicesComponent.propTypes = {
  onNavigate: PropTypes.func,
};

export default ServicesComponent;

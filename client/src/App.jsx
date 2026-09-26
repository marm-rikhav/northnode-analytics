import { Routes, Route, Navigate } from 'react-router-dom';
import HeaderPage from './pages/header/HeaderPage';
import HomePage from './pages/home/HomePage';
import AboutUsPage from './pages/aboutus/AboutUsPage';
import ServicesPage from './pages/services/ServicesPage';
import IndustryPage from './pages/industry/IndustryPage';
import ContactUsPage from './pages/contactus/ContactUsPage';
import FooterPage from './pages/footer/FooterPage';
import ScrollToTop from './components/common/ScrollToTop';
import { ROUTES } from './constants/routes';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B1F3A',
    },
    secondary: {
      main: '#1E4D8C',
    },
    info: {
      main: '#3E92CC',
    },
    background: {
      default: '#F2F5F9',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F2F5F9' }}>
        <HeaderPage />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
            <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />
            <Route path="/about" element={<Navigate to={ROUTES.ABOUT_US} replace />} />
            <Route path={ROUTES.INDUSTRY} element={<IndustryPage />} />
            <Route path={ROUTES.CONTACT_US} element={<ContactUsPage />} />
            <Route path="/contact" element={<Navigate to={ROUTES.CONTACT_US} replace />} />
            <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
          </Routes>
        </Box>
        <FooterPage />
      </Box>
    </ThemeProvider>
  );
}

export default App;

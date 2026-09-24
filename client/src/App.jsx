import React, { useState } from 'react';
import HeaderPage from './pages/header/HeaderPage';
import HomePage from './pages/home/HomePage';
import AboutUsPage from './pages/aboutus/AboutUsPage';
import ServicesPage from './pages/services/ServicesPage';
import IndustryPage from './pages/industry/IndustryPage';
import ContactUsPage from './pages/contactus/ContactUsPage';
import FooterPage from './pages/footer/FooterPage';
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
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage onNavigate={setActivePage} />;
      case 'About Us':
        return <AboutUsPage onNavigate={setActivePage} />;
      case 'Services':
        return <ServicesPage onNavigate={setActivePage} />;
      case 'Industry':
        return <IndustryPage onNavigate={setActivePage} />;
      case 'Contact Us':
        return <ContactUsPage onNavigate={setActivePage} />;
      default:
        return <HomePage onNavigate={setActivePage} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F2F5F9' }}>
        <HeaderPage activeTab={activePage} onSelectTab={setActivePage} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {renderPage()}
        </Box>
        <FooterPage onNavigate={setActivePage} />
      </Box>
    </ThemeProvider>
  );
}

export default App;

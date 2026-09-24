import React, { useState } from 'react';
import HeaderPage from './pages/header/HeaderPage';
import HomePage from './pages/home/HomePage';
import AboutUsPage from './pages/aboutus/AboutUsPage';
import ServicesPage from './pages/services/ServicesPage';
import IndustryPage from './pages/industry/IndustryPage';
import ContactUsPage from './pages/contactus/ContactUsPage';
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
        return <HomePage />;
      case 'About Us':
        return <AboutUsPage />;
      case 'Services':
        return <ServicesPage />;
      case 'Industry':
        return <IndustryPage />;
      case 'Contact Us':
        return <ContactUsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: '#F2F5F9' }}>
        <HeaderPage activeTab={activePage} onSelectTab={setActivePage} />
        <main>
          {renderPage()}
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;

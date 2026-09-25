import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import companyLogo from '../../assets/logo_transparent.png';

const navItems = [
  {
    label: 'Home',
    href: '#home',
    icon: (
      <Box
        component="svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </Box>
    ),
  },
  {
    label: 'About Us',
    href: '#about',
    icon: (
      <Box
        component="svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </Box>
    ),
  },
  {
    label: 'Services',
    href: '#services',
    icon: (
      <Box
        component="svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </Box>
    ),
  },
  {
    label: 'Industry',
    href: '#industry',
    icon: (
      <Box
        component="svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </Box>
    ),
  },
  { label: 'Contact Us', href: '#contact', isCta: true },
];

const HeaderComponent = ({ activeTab: externalActiveTab, onSelectTab }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [internalActiveTab, setInternalActiveTab] = useState('Home');

  const activeTab = externalActiveTab ?? internalActiveTab;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (label) => {
    if (onSelectTab) {
      onSelectTab(label);
    } else {
      setInternalActiveTab(label);
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* 1. Full-Cover Header Navbar (Edge to edge, Sticky, Modern White) */}
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1200,
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(11, 31, 58, 0.08)',
          boxShadow: '0 2px 12px rgba(11, 31, 58, 0.04)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Navbar Content Container */}
        <Container
          maxWidth="xl"
          sx={{
            height: { xs: 66, md: 84 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: { xs: 2.5, sm: 4, md: 5 },
            position: 'relative',
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => handleNavClick('Home')}
          >
            <Box
              component="img"
              src={companyLogo}
              alt="NorthNode Analytics"
              sx={{
                // height: { xs: 48, sm: 46, md: 50 },
                height: { xs: 48, sm: 54, md: 64 },
                width: 'auto',
                display: 'block',
                objectFit: 'contain',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            />
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: { md: 3.5, lg: 4.5 } }}>
            {navItems
              .filter((i) => !i.isCta)
              .map((item) => {
                const isActive = activeTab === item.label;
                return (
                  <Box
                    key={item.label}
                    onClick={() => handleNavClick(item.label)}
                    sx={{
                      color: isActive ? '#1E4D8C' : '#0B1F3A',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      position: 'relative',
                      py: 1,
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#1E4D8C',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        backgroundColor: '#1E4D8C',
                        borderRadius: '2px',
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'center',
                        transition: 'transform 0.25s ease',
                      },
                      '&:hover::after': {
                        transform: 'scaleX(1)',
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                );
              })}

            {/* Desktop Primary CTA Button */}
            <Button
              variant="contained"
              disableElevation
              onClick={() => handleNavClick('Contact Us')}
              sx={{
                ml: 1.5,
                borderRadius: '50px',
                backgroundColor: '#1E4D8C',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.9rem',
                textTransform: 'none',
                px: 3.2,
                py: 1,
                boxShadow: '0 4px 14px rgba(30, 77, 140, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.8,
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#3E92CC',
                  color: '#FFFFFF',
                  boxShadow: '0 6px 20px rgba(62, 146, 204, 0.35)',
                  transform: 'translateY(-1px)',
                  '& svg': {
                    transform: 'translateX(3px)',
                  },
                },
              }}
            >
              Contact Us
              <Box
                component="svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                sx={{ transition: 'transform 0.2s ease' }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </Box>
            </Button>
          </Box>

          {/* Mobile Hamburger Button */}
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              color: '#0B1F3A',
              p: 1,
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(30, 77, 140, 0.08)',
              },
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', width: 22 }}>
              <Box sx={{ width: 22, height: 2.2, backgroundColor: '#0B1F3A', borderRadius: 1 }} />
              <Box sx={{ width: 22, height: 2.2, backgroundColor: '#0B1F3A', borderRadius: 1 }} />
              <Box sx={{ width: 22, height: 2.2, backgroundColor: '#0B1F3A', borderRadius: 1 }} />
            </Box>
          </IconButton>
        </Container>
      </Box>

      {/* 2. Responsive Mobile Drawer Component */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: 1300,
          '& .MuiDrawer-paper': {
            width: { xs: 290, sm: 320 },
            maxWidth: '85vw',
            boxSizing: 'border-box',
            height: '100%',
            backgroundColor: '#FFFFFF',
            color: '#0B1F3A',
            borderLeft: '1px solid rgba(11, 31, 58, 0.08)',
            boxShadow: '-8px 0 30px rgba(11, 31, 58, 0.1)',
            p: { xs: 2.5, sm: 3 },
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
            overflowY: 'auto',
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(11, 31, 58, 0.45)',
            backdropFilter: 'blur(4px)',
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2.5,
          }}
        >
          <Box
            component="img"
            src={companyLogo}
            alt="NorthNode Analytics"
            sx={{
              height: 54,
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
              cursor: 'pointer',
            }}
            onClick={() => handleNavClick('Home')}
          />
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: '#0B1F3A',
              p: 0.8,
              borderRadius: '50%',
              backgroundColor: 'rgba(11, 31, 58, 0.05)',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: '#1E4D8C',
                backgroundColor: 'rgba(30, 77, 140, 0.1)',
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        {/* Top Divider */}
        <Box
          sx={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(11, 31, 58, 0.08)',
            mb: 2.5,
          }}
        />

        {/* Navigation Items List */}
        <List sx={{ p: 0, mb: 3 }}>
          {navItems
            .filter((i) => !i.isCta)
            .map((item) => {
              const isActive = activeTab === item.label;
              return (
                <ListItem key={item.label} disablePadding sx={{ mb: 1.2 }}>
                  <ListItemButton
                    onClick={() => handleNavClick(item.label)}
                    sx={{
                      px: 2,
                      py: 1.2,
                      borderRadius: '10px',
                      position: 'relative',
                      backgroundColor: isActive ? 'rgba(30, 77, 140, 0.08)' : 'transparent',
                      color: isActive ? '#1E4D8C' : '#0B1F3A',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: isActive ? 'rgba(30, 77, 140, 0.12)' : '#F2F5F9',
                        color: '#1E4D8C',
                        '& .MuiListItemIcon-root, & svg': {
                          color: '#1E4D8C',
                        },
                      },
                    }}
                  >
                    {/* Active Indicator Bar on Left */}
                    {isActive && (
                      <Box
                        sx={{
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '3.5px',
                          height: '24px',
                          backgroundColor: '#1E4D8C',
                          borderRadius: '0 3px 3px 0',
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: 1.8,
                        color: isActive ? '#1E4D8C' : '#0B1F3A',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: '0.96rem',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? '#1E4D8C' : '#0B1F3A',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>

        {/* Drawer Bottom CTA Button */}
        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            disableElevation
            onClick={() => handleNavClick('Contact Us')}
            sx={{
              borderRadius: '50px',
              backgroundColor: '#1E4D8C',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.92rem',
              textTransform: 'none',
              py: 1.3,
              boxShadow: '0 4px 14px rgba(30, 77, 140, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              transition: 'all 0.25s ease',
              '&:hover': {
                backgroundColor: '#3E92CC',
                color: '#FFFFFF',
                boxShadow: '0 6px 20px rgba(62, 146, 204, 0.35)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            Contact Us
            <Box
              component="svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </Box>
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

HeaderComponent.propTypes = {
  activeTab: PropTypes.string,
  onSelectTab: PropTypes.func,
};

export default HeaderComponent;
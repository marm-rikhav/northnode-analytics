import React, { useState } from 'react';
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
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import headerLogo from './header_logo.png';

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

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
      {/* 1. Full-Cover Header Navbar (Edge to edge, 0 gap, Sticky) */}
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1200,
          width: '100%',
          backgroundColor: '#04142B',
          background: 'linear-gradient(90deg, #051936 0%, #03142B 20%, #03142B 80%, #061F42 100%)',
          borderBottom: '1px solid rgba(56, 189, 248, 0.18)',
          boxShadow: '0 4px 20px rgba(2, 10, 25, 0.35)',
          backdropFilter: 'blur(12px)',
        }}
      >

        {/* Full-Cover Content Container */}
        <Container
          maxWidth="xl"
          sx={{
            height: { xs: 58, md: 66 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: { xs: 2.5, sm: 4, md: 5 },
            position: 'relative',
            zIndex: 2,
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
              src={headerLogo}
              alt="NorthNode Analytics"
              sx={{
                height: { xs: 28, md: 32 },
                width: 'auto',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
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
                      color: isActive ? '#38BDF8' : '#FFFFFF',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      position: 'relative',
                      py: 1,
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#38BDF8',
                      },
                      ...(isActive && {
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: '#38BDF8',
                          borderRadius: '2px',
                          boxShadow: '0 0 8px #38BDF8',
                        },
                      }),
                    }}
                  >
                    {item.label}
                  </Box>
                );
              })}

            {/* Desktop CTA Button */}
            <Button
              variant="contained"
              onClick={() => handleNavClick('Contact Us')}
              sx={{
                ml: 1.5,
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #1E70FD 0%, #298DFE 50%, #389EFE 100%)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.88rem',
                textTransform: 'none',
                px: 3,
                py: 0.95,
                boxShadow: '0 4px 14px rgba(36, 137, 253, 0.45)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.8,
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #257DFF 0%, #389BFF 100%)',
                  boxShadow: '0 6px 20px rgba(36, 137, 253, 0.65)',
                  transform: 'translateY(-1px)',
                  '& svg': {
                    transform: 'translateX(2px)',
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
              color: '#FFFFFF',
              p: 1,
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4.5px', width: 22 }}>
              <Box sx={{ width: 22, height: 2, backgroundColor: '#FFFFFF', borderRadius: 1 }} />
              <Box sx={{ width: 22, height: 2, backgroundColor: '#FFFFFF', borderRadius: 1 }} />
              <Box sx={{ width: 22, height: 2, backgroundColor: '#FFFFFF', borderRadius: 1 }} />
            </Box>
          </IconButton>
        </Container>
      </Box>

      {/* 2. Enhanced Mobile Drawer Component */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: 1300,
          '& .MuiDrawer-paper': {
            width: { xs: 280, sm: 300 },
            maxWidth: '85vw',
            boxSizing: 'border-box',
            height: '100%',
            backgroundColor: '#04142B !important',
            color: '#FFFFFF !important',
            borderLeft: '1px solid rgba(56, 189, 248, 0.25)',
            boxShadow: '-10px 0 36px rgba(0, 0, 0, 0.75)',
            p: { xs: 2.5, sm: 3 },
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            position: 'relative',
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(3, 15, 33, 0.7)',
            backdropFilter: 'blur(5px)',
          },
        }}
      >
        {/* Drawer Bottom-Left Cosmic Glow & Arc */}
        <Box
          sx={{
            position: 'absolute',
            left: -45,
            bottom: -45,
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14, 116, 233, 0.45) 0%, rgba(5, 19, 41, 0) 70%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            left: -40,
            bottom: -40,
            width: 125,
            height: 125,
            borderRadius: '50%',
            border: '1.5px solid rgba(56, 189, 248, 0.65)',
            boxShadow: '0 0 16px rgba(56, 189, 248, 0.45)',
            pointerEvents: 'none',
          }}
        />

        {/* Drawer Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2.5,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Box
            component="img"
            src={headerLogo}
            alt="NorthNode Analytics"
            sx={{
              height: 28,
              width: 'auto',
              cursor: 'pointer',
            }}
            onClick={() => handleNavClick('Home')}
          />
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: '#94A3B8',
              p: 0.8,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              transition: 'all 0.2s',
              '&:hover': {
                color: '#FFFFFF',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
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
            backgroundColor: 'rgba(56, 189, 248, 0.15)',
            mb: 2.5,
            position: 'relative',
            zIndex: 2,
          }}
        />

        {/* Navigation Items List */}
        <List sx={{ p: 0, mb: 3, position: 'relative', zIndex: 2 }}>
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
                      borderRadius: '12px',
                      position: 'relative',
                      backgroundColor: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                      color: isActive ? '#38BDF8 !important' : '#FFFFFF !important',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(56, 189, 248, 0.14)',
                        color: '#38BDF8 !important',
                      },
                    }}
                  >
                    {/* Left cyan vertical indicator when active */}
                    {isActive && (
                      <Box
                        sx={{
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '3.5px',
                          height: '24px',
                          backgroundColor: '#38BDF8',
                          borderRadius: '0 3px 3px 0',
                          boxShadow: '0 0 10px #38BDF8',
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: 1.8,
                        color: isActive ? '#38BDF8' : '#CBD5E1',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: '0.96rem',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#38BDF8' : '#FFFFFF',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>

        {/* Drawer Bottom CTA Button */}
        <Box sx={{ mt: 'auto', pt: 2, position: 'relative', zIndex: 2 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleNavClick('Contact Us')}
            sx={{
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #1E70FD 0%, #298DFE 50%, #389EFE 100%)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.92rem',
              textTransform: 'none',
              py: 1.3,
              boxShadow: '0 4px 18px rgba(36, 137, 253, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              transition: 'all 0.25s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #257DFF 0%, #389BFF 100%)',
                boxShadow: '0 6px 24px rgba(36, 137, 253, 0.7)',
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
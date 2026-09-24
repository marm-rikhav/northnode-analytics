import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
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
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import companyLogo from '../../assets/companylogo.jpg';

// Color Palette Definition
const COLORS = {
  navy: '#0B1F3A',
  blue: '#1E4D8C',
  sky: '#3E92CC',
  light: '#F2F5F9',
  white: '#FFFFFF',
};

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industry', href: '#industry' },
  { label: 'Contact Us', href: '#contact', isCta: true }
];

const HeaderComponent = ({ activeTab: externalActiveTab, onSelectTab }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [internalActiveTab, setInternalActiveTab] = useState('Home');
  
  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;
  
  const theme = useTheme();
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

  // Drawer layout for mobile screens
  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        backgroundColor: COLORS.light,
        color: COLORS.navy,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Mobile Drawer Header */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: COLORS.navy,
          color: COLORS.white,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            component="img"
            src={companyLogo}
            alt="Company Logo"
            sx={{
              height: 38,
              width: 'auto',
              borderRadius: 1,
              backgroundColor: COLORS.white,
              p: 0.5,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: '1.1rem',
              color: COLORS.white,
              letterSpacing: 0.5,
            }}
          >
            Northnode
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: COLORS.white }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: 'rgba(11, 31, 58, 0.12)' }} />

      {/* Navigation Links in Mobile Drawer */}
      <List sx={{ p: 2, flexGrow: 1 }}>
        {navItems.map((item) => {
          const isActive = activeTab === item.label;
          if (item.isCta) {
            return (
              <Box key={item.label} sx={{ mt: 3, px: 1 }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleNavClick(item.label)}
                  sx={{
                    backgroundColor: COLORS.sky,
                    color: COLORS.navy,
                    fontWeight: 700,
                    textTransform: 'none',
                    py: 1.2,
                    borderRadius: 2,
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 12px rgba(62, 146, 204, 0.3)',
                    '&:hover': {
                      backgroundColor: '#52a6e0',
                      boxShadow: '0 6px 16px rgba(62, 146, 204, 0.4)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Box>
            );
          }

          return (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => handleNavClick(item.label)}
                sx={{
                  borderRadius: 2,
                  backgroundColor: isActive ? 'rgba(30, 77, 140, 0.1)' : 'transparent',
                  borderLeft: isActive ? `4px solid ${COLORS.sky}` : '4px solid transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(30, 77, 140, 0.08)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? COLORS.blue : COLORS.navy,
                    fontSize: '1rem',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          backgroundColor: COLORS.navy,
          borderBottom: `2px solid ${COLORS.blue}`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 72 } }}>
            
            {/* Logo and Brand Name */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
              }}
              onClick={() => handleNavClick('Home')}
            >
              <Box
                component="img"
                src={companyLogo}
                alt="Company Logo"
                sx={{
                  height: { xs: 40, md: 48 },
                  width: 'auto',
                  borderRadius: 1.5,
                  backgroundColor: COLORS.white,
                  p: 0.5,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="span"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1.1rem', md: '1.35rem' },
                    color: COLORS.white,
                    letterSpacing: 0.5,
                    lineHeight: 1.1,
                  }}
                >
                  NORTHNODE
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: COLORS.sky,
                    fontWeight: 600,
                    letterSpacing: 1.5,
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Analytics
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { md: 1, lg: 2 } }}>
                {navItems.map((item) => {
                  const isActive = activeTab === item.label;

                  if (item.isCta) {
                    return (
                      <Button
                        key={item.label}
                        variant="contained"
                        onClick={() => handleNavClick(item.label)}
                        sx={{
                          ml: 1,
                          backgroundColor: COLORS.sky,
                          color: COLORS.navy,
                          fontWeight: 700,
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '0.95rem',
                          boxShadow: '0 4px 12px rgba(62, 146, 204, 0.3)',
                          transition: 'all 0.2s ease-in-out',
                          '&:hover': {
                            backgroundColor: COLORS.white,
                            color: COLORS.blue,
                            boxShadow: '0 6px 16px rgba(255, 255, 255, 0.3)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    );
                  }

                  return (
                    <Button
                      key={item.label}
                      onClick={() => handleNavClick(item.label)}
                      sx={{
                        color: isActive ? COLORS.sky : COLORS.white,
                        fontWeight: isActive ? 700 : 500,
                        textTransform: 'none',
                        fontSize: '0.95rem',
                        px: 2,
                        py: 1,
                        position: 'relative',
                        transition: 'color 0.2s ease-in-out',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 4,
                          left: '15%',
                          width: isActive ? '70%' : '0%',
                          height: '2.5px',
                          backgroundColor: COLORS.sky,
                          borderRadius: '2px',
                          transition: 'width 0.25s ease-in-out',
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(30, 77, 140, 0.3)',
                          color: COLORS.sky,
                          '&::after': {
                            width: '70%',
                          },
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </Box>
            )}

            {/* Mobile Hamburger Menu Icon */}
            {isMobile && (
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: COLORS.white,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.16)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Component */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile open performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            borderLeft: `1px solid ${COLORS.blue}`,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default HeaderComponent;
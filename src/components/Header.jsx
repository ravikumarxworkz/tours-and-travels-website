import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from '@mui/material';
import {
  Menu,
  Close,
  Facebook,
  Instagram,
  Twitter,
  Email,
  Phone,
} from '@mui/icons-material';
import '../styles/Header.css'; // Ensure this file includes the new styles
import logoImage from '../assets/rskLogo.png';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  return (
    <>
     {/* Black Section */}
<Box
  className="black-section"
  sx={{
    backgroundColor: '#000',
    color: '#fff',
    padding: '5px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }}
>
  {/* Email Section */}
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <IconButton
      color="inherit"
      component="a"
      href="mailto:info@rsktravels.com"
      sx={{
        '&:hover': { color: '#1976d2', transform: 'scale(1.1)', transition: 'all 0.2s' },
      }}
    >
      <Email />
    </IconButton>
    <Typography
      variant="body2"
      component="a"
      href="mailto:info@rsktravels.com"
      style={{ color: 'inherit', textDecoration: 'none' }}
      sx={{
        '&:hover': { color: '#1976d2', textDecoration: 'underline', transition: 'color 0.2s' },
      }}
    >
      info@rsktravels.com
    </Typography>
  </Box>

  {/* Phone Section */}
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <IconButton
      color="inherit"
      component="a"
      href="tel:+918123456789"
      sx={{
        '&:hover': { color: '#28a745', transform: 'scale(1.1)', transition: 'all 0.2s' },
      }}
    >
      <Phone />
    </IconButton>
    <Typography
      variant="body2"
      component="a"
      href="tel:+918123456789"
      style={{ color: 'inherit', textDecoration: 'none' }}
      sx={{
        '&:hover': { color: '#28a745', textDecoration: 'underline', transition: 'color 0.2s' },
      }}
    >
      Call Us: +91-8123456789
    </Typography>
  </Box>

  {/* Social Media Section */}
  <Box>
    <IconButton
      color="inherit"
      component="a"
      href="https://www.facebook.com"
      target="_blank"
      sx={{
        '&:hover': { color: '#4267B2', transform: 'scale(1.1)', transition: 'all 0.2s' },
      }}
    >
      <Facebook />
    </IconButton>
    <IconButton
      color="inherit"
      component="a"
      href="https://www.instagram.com"
      target="_blank"
      sx={{
        '&:hover': { color: '#E4405F', transform: 'scale(1.1)', transition: 'all 0.2s' },
      }}
    >
      <Instagram />
    </IconButton>
    <IconButton
      color="inherit"
      component="a"
      href="https://www.twitter.com"
      target="_blank"
      sx={{
        '&:hover': { color: '#1DA1F2', transform: 'scale(1.1)', transition: 'all 0.2s' },
      }}
    >
      <Twitter />
    </IconButton>
  </Box>
</Box>


      {/* White Section */}
      <AppBar position="static" className="appbar" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={logoImage} alt="RSK Tours & Travels" className="logo-img" style={{ height: '50px' }} />
            <Typography variant="h6" className="brand-name">
              RSK Tours & Travels
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box className="nav-bar" sx={{ display: { xs: 'none', md: 'flex' }, gap: '15px' }}>
            <Button onClick={() => scrollToSection('hero-section')}>Home</Button>
            <Button onClick={() => scrollToSection('about-us')}>About Us</Button>
            <Button onClick={() => scrollToSection('services')}>Services</Button>
            <Button onClick={() => scrollToSection('tour-packages')}>Tour Packages</Button>
            <Button onClick={() => scrollToSection('contact')}>Contact</Button>
          </Box>

          {/* Inquiry */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '10px' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              For More Inquiry:
            </Typography>
            <Typography variant="body2" color="primary">
              +91-9876543210
            </Typography>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton color="inherit" sx={{ display: { xs: 'block', md: 'none' } }} onClick={toggleDrawer}>
            <Menu />
          </IconButton>
        </Toolbar>

        {/* Mobile Drawer */}
        <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 250 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
              <Typography variant="h6"> <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={logoImage} alt="RSK Tours & Travels" className="logo-img" style={{ height: '50px' }} />
            <Typography variant="h6" className="brand-name">
              RSK Tours & Travels
            </Typography>
          </Box></Typography>
              <IconButton onClick={toggleDrawer}>
                <Close />
              </IconButton>
            </Box>
            <Divider />
            <List>
              {['Home', 'About Us', 'Services', 'Tour Packages', 'Contact'].map((text, index) => (
                <ListItem button key={text} onClick={() => scrollToSection(text.toLowerCase().replace(' ', '-'))}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </>
  );
}

export default Header;

import React from 'react';
import { Container, Grid, Typography, Link, IconButton, Box, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Phone, Email, LocationOn } from '@mui/icons-material';
import '../styles/Footer.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer" style={{ backgroundColor: '#000', color: '#fff', padding: '50px 20px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Connect With Us */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-heading" gutterBottom>
              Connect With Us
            </Typography>
            <div className="social-media-links">
              <IconButton 
                color="inherit" 
                href="https://facebook.com" 
                target="_blank"
                sx={{
                  '&:hover': { color: '#3b5998' },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://twitter.com" 
                target="_blank"
                sx={{
                  '&:hover': { color: '#00acee' },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://instagram.com" 
                target="_blank"
                sx={{
                  '&:hover': { color: '#C13584' },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://linkedin.com" 
                target="_blank"
                sx={{
                  '&:hover': { color: '#0e76a8' },
                }}
              >
                <LinkedIn />
              </IconButton>
            </div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-heading" gutterBottom>
              Quick Links
            </Typography>
            <Box className="nav-bar" sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              <Button 
                color="inherit" 
                onClick={() => handleNavigation('hero-section')}
                sx={{ textTransform: 'none', '&:hover': { color: '#ff9800' } }}
              >
                Home
              </Button>
              <Button 
                color="inherit" 
                onClick={() => handleNavigation('about-us')}
                sx={{ textTransform: 'none', '&:hover': { color: '#ff9800' } }}
              >
                About Us
              </Button>
              <Button 
                color="inherit" 
                onClick={() => handleNavigation('services')}
                sx={{ textTransform: 'none', '&:hover': { color: '#ff9800' } }}
              >
                Services
              </Button>
              <Button 
                color="inherit" 
                onClick={() => handleNavigation('tour-packages')}
                sx={{ textTransform: 'none', '&:hover': { color: '#ff9800' } }}
              >
                Tour Packages
              </Button>
              <Button 
                color="inherit" 
                onClick={() => handleNavigation('contact')}
                sx={{ textTransform: 'none', '&:hover': { color: '#ff9800' } }}
              >
                Contact
              </Button>
            </Box>
          </Grid>

          {/* More Inquiry */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-heading" gutterBottom>
              More Inquiry
            </Typography>
            <Typography variant="body2" className="footer-text">
              <strong>RSK Tours & Travels</strong>
            </Typography>
            <Typography variant="body2" className="footer-text">
              11/10, 21, Th Main Road, Siddeshwara Nagar, Govindaraja Nagar Ward, PF Layout, Vijayanagar,
            </Typography>
            <Typography variant="body2" className="footer-text">
              Bengaluru, Karnataka 560040
            </Typography>
            <Typography variant="body2" className="footer-text">
              <Phone /> +91-8123456789
            </Typography>
            <Typography variant="body2" className="footer-text">
              <Email /> info@rsktravels.com
            </Typography>
          
          </Grid>
        </Grid>

        {/* Footer Bottom Line */}
         {/* Footer Bottom Line */}
         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', borderTop: '1px solid #444', paddingTop: '10px' }}>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            &copy; 2025 RSK Tours & Travels. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            Designed by <Link href="https://ravikumarxworkz.github.io/" target="_blank" color="inherit" underline="hover">Ravikumar shankar kumbar</Link>
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;

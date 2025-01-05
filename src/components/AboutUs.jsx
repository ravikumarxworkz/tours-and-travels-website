import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  IconButton,
  Modal,
} from '@mui/material';
import SafetyIcon from '@mui/icons-material/Security';
import TrustedIcon from '@mui/icons-material/ThumbUp';
import TimeSavingsIcon from '@mui/icons-material/AccessTime';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import mountainRoadImage from '../assets/mountain-road.jpg';
import abpoutUsVideo from '../assets/about-us-video.mp4';

const AboutUs = () => {
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(0.1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev < 3.5 ? prev + 0.1 : 3.5));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold', textAlign: 'justify' }}
            >
              Who We Are
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify' }}>
              RSK Tours & Travels is a taxi service provider located in Bangalore,
              offering a comprehensive range of travel solutions tailored to meet
              the needs of both local residents and visitors to the city. Whether
              you require a quick airport transfer, a longer outstation journey to
              nearby towns and cities, or a customized tour package to explore the
              vibrant sights and attractions of Bangalore, RSK Tours & Travels has
              you covered. Our fleet of well-maintained vehicles and experienced,
              professional drivers ensures a seamless and stress-free journey. We
              monitor flight times to ensure prompt airport pickups, whisking you
              to your final destination efficiently.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, position: 'relative' }}>
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  backgroundColor: '#4caf50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'rotate 10s linear infinite',
                  position: 'relative',
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: 'bold', color: 'white' }}
                >
                  {counter.toFixed(1)}K+
                </Typography>
                <Typography
                  sx={{
                    position: 'absolute',
                    top: '-20px',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    animation: 'roll 15s linear infinite',
                  }}
                >
                </Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ ml: 2 }}>
                TOURS SUCCESS
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={mountainRoadImage}
                  alt="Mountain Road"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <IconButton
                  color="primary"
                  aria-label="play video"
                  size="large"
                  onClick={handleOpen}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  <PlayCircleIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 5 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', py: 3 }}>
              <CardContent>
                <SafetyIcon sx={{ fontSize: 50, color: 'green' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Safety First Always
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', py: 3 }}>
              <CardContent>
                <TrustedIcon sx={{ fontSize: 50, color: 'blue' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Trusted Travel
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', py: 3 }}>
              <CardContent>
                <TimeSavingsIcon sx={{ fontSize: 50, color: 'orange' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Time And Stress Savings
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="body1" sx={{ mt: 5, textAlign: 'justify' }}>
          Complementing our core taxi services, RSK Tours & Travels also curates bespoke tour
          packages that combine transportation with meticulously planned sightseeing, providing
          an immersive experience for visitors to discover Bangalore's rich heritage, vibrant
          markets, verdant parks, and trendy neighborhoods. With a focus on customer satisfaction,
          transparent pricing, and a commitment to safety, RSK Tours & Travels is your trusted
          partner for all travel needs in and around Bangalore.
        </Typography>
      </Container>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Watch Our Journey
          </Typography>
          <video controls width="100%">
            <source src={abpoutUsVideo} />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Modal>
    </Box>
  );
};

export default AboutUs;

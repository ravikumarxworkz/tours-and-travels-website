import React from 'react';
import { Button } from '@mui/material';
import '../styles/HeroSection.css';  // Your CSS file for styling
import airportImage from '../assets/airport.jpg';  // Import the image

function HeroSection() {
  return (
    <div className="hero-section">
      <img
        src={airportImage}  // Use the imported image
        alt="Beautiful travel destination"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>Explore with RSK Tours & Travels</h1>
        <p>Unforgettable Journeys Await</p>
        <Button variant="contained" color="secondary">
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

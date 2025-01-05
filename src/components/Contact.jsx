import React, { useState } from 'react';
import { TextField, Button, Grid, Container } from '@mui/material';
import '../styles/Contact.css';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="sm" className="contact-container">
      <div className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            helperText="Please enter your name"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            helperText="Please enter a valid email address"
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            helperText="Please enter your message"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="submit-button"
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Contact;

import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import {
  CheckCircle,
  People,
  Tour,
  Star,
  ThumbUp,
  SupportAgent,
} from "@mui/icons-material";

function WhyChooseUs() {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          {/* Features Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#e8f5e9", // Light green
                  color: "#4caf50", // Text color changes to green
                },
              }}
            >
              <CheckCircle sx={{ fontSize: 50, color: "#4caf50", mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                All Over South India
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We provide tour packages and services all over South India with
                local expertise.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#e3f2fd", // Light blue
                  color: "#2196f3",
                },
              }}
            >
              <ThumbUp sx={{ fontSize: 50, color: "#2196f3", mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Competitive Pricing
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Get the best travel deals without compromising on quality.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#ffebee", // Light red
                  color: "#ff5722",
                },
              }}
            >
              <SupportAgent sx={{ fontSize: 50, color: "#ff5722", mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Best Support 24/7
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We are always available to assist you at any time of the day.
              </Typography>
            </Paper>
          </Grid>
          {/* Add similar hover effects for the remaining cards */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#f3e5f5", // Light purple
                  color: "#9c27b0",
                },
              }}
            >
              <Tour sx={{ fontSize: 50, color: "#9c27b0", mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Fast Booking
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Simplified booking processes for hassle-free planning.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#fffde7", // Light yellow
                  color: "#ffc107",
                },
              }}
            >
              <Star sx={{ fontSize: 50, color: "#ffc107", mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Our Experience
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Over a decade of experience in providing amazing travel
                experiences.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#eceff1", // Light grey
                  color: "#607d8b",
                },
              }}
            >
              <People sx={{ fontSize: 50, color: "#607d8b", mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                We Are The Best
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Recognized for providing exceptional travel arrangements.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Achievements Section */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Our Achievements
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h3"
                sx={{ color: "#4caf50", fontWeight: "bold" }}
              >
                500+
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Happy Customers
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h3"
                sx={{ color: "#2196f3", fontWeight: "bold" }}
              >
                1.5K+
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Tours Success
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h3"
                sx={{ color: "#ff5722", fontWeight: "bold" }}
              >
                99%
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Positive Reviews
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Rating Section */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#ff9800" }}
          >
            Excellent!
          </Typography>
          <Typography variant="body1" color="textSecondary">
            5.0 Rating out of 5.0 based on 354 reviews
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default WhyChooseUs;

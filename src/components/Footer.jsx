import React from "react";
import { Box, Container, Typography, Grid, Link, Divider } from "@mui/material";
import { Phone, Email, LocationOn, Business } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        py: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#ff9800" }}
            >
              Parakh Brothers
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              Pioneer since 1965 and the most trusted name in field of paints in
              Mandsaur district. Coloring the town with quality products for
              over 3 generations.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOn sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">
                Mandsaur, Madhya Pradesh, India
              </Typography>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#ff9800" }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/products" color="inherit" underline="hover">
                Product Lines
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact Us
              </Link>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#ff9800" }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">+91 98266 68789</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Email sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">
                parakhbrothers524@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Business sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">Est. 1965</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            © {new Date().getFullYear()} Parakh Brothers. All rights reserved. |
            Retail & Wholesale of Paints, Tools, Chemicals & Pesticides
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

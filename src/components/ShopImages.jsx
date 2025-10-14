import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import shop1 from "../assets/shop/shop1.jpeg";
import shop2 from "../assets/shop/shop2.jpeg";
import shop3 from "../assets/shop/shop3.jpg";

const ShopImages = () => {
  const shopImages = [
    {
      src: shop1,
      title: "",
      description: "",
    },
    {
      src: shop2,
      title: "",
      description: "",
    },
    {
      src: shop3,
      title: "",
      description: "",
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#1976d2",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Our Store
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#666",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Take a glimpse inside our store that has been serving customers for
            over 60 years
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {shopImages.map((image, index) => (
            <Grid
              item
              size={{ xs: 12, sm: 6, md: 4 }} // Mobile: 1 card per row (full width), Tablet: 2 cards per row (half width), Laptop/Desktop: 3 cards per row (one-third width)
              key={index}
            >
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={image.src}
                  alt={image.title}
                  sx={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "#1976d2",
                    }}
                  >
                    {image.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      lineHeight: 1.6,
                    }}
                  >
                    {image.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 6,
            p: 4,
            backgroundColor: "#f8f9fa",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#1976d2",
            }}
          >
            Visit Our Store
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Our store is strategically located in the heart of Mandsaur, making
            it easily accessible for all your paint, tool, and chemical needs.
            We maintain a comprehensive inventory of premium brands and provide
            expert consultation for all your projects.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ShopImages;

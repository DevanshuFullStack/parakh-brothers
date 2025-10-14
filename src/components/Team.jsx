import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import foundersImg from "../assets/team/founders.jpeg";
import rajeshImg from "../assets/team/rajesh.jpeg";
import nareshImg from "../assets/team/naresh.jpeg";
import varunImg from "../assets/team/varun.jpeg";

const Team = () => {
  const teamMembers = [
    {
      name: "Rajesh Parakh",
      role: "Paint Wing Expert",
      image: rajeshImg,
      description:
        "Son of Shree Vallabh das ji Parakh, working in the firm since age of 16 under guidance of the founders. His hard work and determination has enabled our journey from a small shop to a synonym of branded trusted painting solution provider.",
      expertise: ["Paints", "Customer Relations", "Business Development"],
      generation: "2nd Generation",
    },
    {
      name: "Naresh Parakh",
      role: "Tools & Pesticide Specialist",
      image: nareshImg,
      description:
        "Son of Shree Ranchod das ji Parakh, he too has been into business since a very young age. Mr. Naresh specializes in tool and pesticide wing of the business, enabling us to diversify into new verticals and serving our farmers to the best of our abilities.",
      expertise: ["Tools", "Pesticides", "Farming Solutions"],
      generation: "2nd Generation",
    },
    {
      name: "Varun Parakh",
      role: "Business Modernization",
      image: varunImg,
      description:
        "Son of Shree Naresh ji Parakh, the young blood/Gen-Z of the business has been trained and groomed under the seniors well. He creates a good link between modernizing competition and evolving business landscape.",
      expertise: [],
      generation: "3rd Generation",
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
            Our Team
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#666",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Three generations of dedication, expertise, and commitment to
            excellence
          </Typography>
        </Box>

        {/* Founders Section */}
        <Box sx={{ mb: 8 }}>
          <Card
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              overflow: "hidden",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={foundersImg}
                      alt="Founders"
                      sx={{
                        width: "100%",
                        height: "auto",
                        maxHeight: { xs: "250px", md: "300px" },
                        borderRadius: 2,
                        objectFit: "contain",
                        border: "4px solid rgba(255,255,255,0.2)",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                    Our Founders
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                    Shree Vallabh Das Ji Parakh , Shree Ranchod Das Ji Parakh
                    and their brothers
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.8, opacity: 0.9 }}
                  >
                    The visionary founders who established Parakh Brothers in
                    1965, laying the foundation of trust and quality that
                    continues to guide us today. Their dedication to serving
                    customers with integrity and providing quality products has
                    been the cornerstone of our success for over 60 years.
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Chip
                      label="Est. 1965"
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.2)",
                        color: "white",
                        mr: 1,
                      }}
                    />
                    <Chip
                      label="Founding Generation"
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.2)",
                        color: "white",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        {/* Current Team */}
        <Grid container spacing={{ xs: 2, md: 3, sm: 4 }} alignItems="stretch">
          {teamMembers.map((member, index) => (
            <Grid
              item
              xs={12} // Mobile: 1 card per row (full width)
              sm={6} // Tablet: 2 cards per row (half width)
              md={4} // Laptop/Desktop: 3 cards per row (one-third width)
              key={index}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  height: "100%",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                  },
                  borderRadius: 3,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  border: "1px solid #e0e0e0",
                }}
              >
                {/* Header with name and role */}
                <Box
                  sx={{
                    p: 3,
                    textAlign: "center",
                    backgroundColor: "#f8f9fa",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "#2c3e50",
                      fontSize: { xs: "1.2rem", lg: "1.4rem" },
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#3498db",
                      fontWeight: "600",
                      fontSize: { xs: "0.9rem", lg: "1rem" },
                    }}
                  >
                    {member.role}
                  </Typography>
                </Box>

                <CardContent sx={{ p: 0 }}>
                  {/* Member Photo Section */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      py: 3,
                      backgroundColor: "#fafafa",
                    }}
                  >
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: { xs: 160, lg: 200 },
                        height: "auto",
                        maxHeight: { xs: 140, lg: 180 },
                        borderRadius: 2,
                        objectFit: "contain",
                        border: "3px solid white",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                  </Box>

                  {/* Content Section */}
                  <Box sx={{ p: 3 }}>
                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#7f8c8d",
                        lineHeight: 1.5,
                        mb: 3,
                        textAlign: "justify",
                        fontSize: { xs: "0.85rem", lg: "0.9rem" },
                      }}
                    >
                      {member.description}
                    </Typography>

                    {/* Expertise Section */}
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: "bold",
                          mb: 1,
                          color: "#2c3e50",
                          fontSize: "0.9rem",
                        }}
                      >
                        Expertise:
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {member.expertise.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            label={skill}
                            size="small"
                            sx={{
                              backgroundColor: "#ecf0f1",
                              color: "#2c3e50",
                              fontSize: "0.7rem",
                              height: "24px",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                backgroundColor: "#3498db",
                                color: "white",
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
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
            "Family Values, Professional Excellence"
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
            Our team combines traditional family values with modern business
            practices, ensuring that every customer receives the personal
            attention and professional service that has been our hallmark for
            three generations.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;

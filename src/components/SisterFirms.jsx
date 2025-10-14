import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material'
import { Business, Build, Plumbing } from '@mui/icons-material'

const SisterFirms = () => {
  const sisterFirms = [
    {
      name: 'Nagar Trading Company',
      specialty: 'Plumbing, Faucets & Tiles',
      icon: <Plumbing />,
      description: 'Specializing in high-quality plumbing solutions, premium faucets, and elegant tiles for residential and commercial projects.',
      services: ['Plumbing Supplies', 'Designer Faucets', 'Premium Tiles', 'Bathroom Accessories'],
      color: '#2196f3',
    },
    {
      name: 'Shreenath Machinery',
      specialty: 'Heavy & Power Tools',
      icon: <Build />,
      description: 'Your one-stop destination for heavy machinery and power tools, serving construction and industrial sectors with reliable equipment.',
      services: ['Heavy Machinery', 'Power Tools', 'Industrial Equipment', 'Tool Maintenance'],
      color: '#ff9800',
    },
  ]

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: '#1976d2',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Sister Firms
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#666',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Expanding our expertise across multiple domains to serve you better
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {sisterFirms.map((firm, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        backgroundColor: firm.color,
                        width: 60,
                        height: 60,
                        mr: 2,
                      }}
                    >
                      {React.cloneElement(firm.icon, { sx: { fontSize: 30 } })}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          color: firm.color,
                          mb: 0.5,
                        }}
                      >
                        {firm.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: '#666',
                          fontWeight: 'bold',
                        }}
                      >
                        {firm.specialty}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: '#444',
                      mb: 3,
                      lineHeight: 1.7,
                    }}
                  >
                    {firm.description}
                  </Typography>

                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        color: firm.color,
                      }}
                    >
                      Services Offered:
                    </Typography>
                    <Grid container spacing={1}>
                      {firm.services.map((service, serviceIndex) => (
                        <Grid item xs={12} sm={6} key={serviceIndex}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 1,
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                backgroundColor: firm.color,
                                borderRadius: '50%',
                                mr: 1,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{ color: '#666' }}
                            >
                              {service}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            p: 6,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Business sx={{ fontSize: 50, mb: 2 }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            Complete Solutions Under One Roof
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              maxWidth: '800px',
              mx: 'auto',
              mb: 3,
            }}
          >
            Through our sister firms, we provide comprehensive solutions for all your construction, 
            renovation, and industrial needs. From paints and chemicals to plumbing and heavy machinery, 
            we are your trusted partner for complete project execution.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontStyle: 'italic',
              opacity: 0.9,
            }}
          >
            "Diversified Excellence, Unified Trust"
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default SisterFirms
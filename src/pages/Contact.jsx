import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  Snackbar,
} from '@mui/material'
import {
  Phone,
  Email,
  LocationOn,
  WhatsApp,
  Business,
  AccessTime,
} from '@mui/icons-material'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [showAlert, setShowAlert] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `Hello Parakh Brothers,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

Best regards,
${formData.name}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = '919826668789' 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    setShowAlert(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  const contactInfo = [
    {
      icon: <Phone />,
      title: 'Phone',
      details: ['+91 98266 68789', '+91 77709 69801','+91 92295 05524'],
      action: () => window.open('tel:+919826668789'),
    },
    {
      icon: <WhatsApp />,
      title: 'WhatsApp',
      details: ['+91 98266 68789'],
      action: () => window.open('https://wa.me/919826668789'),
    },
    {
      icon: <Email />,
      title: 'Email',
      details: ['rajeshparikh3010@gmail.com'],
      action: () => window.open('mailto:rajeshparikh3010@gmail.com'),
    },
    {
      icon: <LocationOn />,
      title: 'Address',
      details: ['Kalidas Marg , Near Bus Stand, Mandsaur', 'Madhya Pradesh, India'],
      action: null,
    },
    {
      icon: <AccessTime />,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
      action: null,
    },
    {
      icon: <Business />,
      title: 'Established',
      details: ['Since 1965', '60+ Years of Trust'],
      action: null,
    },
  ]

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
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
            Contact Us
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
            Get in touch with us for all your paint, tool, and chemical needs. 
            We're here to help you with expert advice and quality products.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 4,
                color: '#1976d2',
              }}
            >
              Get In Touch
            </Typography>

            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      cursor: info.action ? 'pointer' : 'default',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': info.action ? {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                      } : {},
                    }}
                    onClick={info.action}
                  >
                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 2,
                          color: '#1976d2',
                        }}
                      >
                        {React.cloneElement(info.icon, { sx: { fontSize: 40 } })}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          mb: 1,
                          color: '#1976d2',
                        }}
                      >
                        {info.title}
                      </Typography>
                      {info.details.map((detail, detailIndex) => (
                        <Typography
                          key={detailIndex}
                          variant="body2"
                          sx={{
                            color: '#666',
                            mb: detailIndex === info.details.length - 1 ? 0 : 0.5,
                          }}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    color: '#1976d2',
                    textAlign: 'center',
                  }}
                >
                  Send Message via WhatsApp
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        placeholder="Tell us about your requirements, project details, or any questions you have..."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        startIcon={<WhatsApp />}
                        sx={{
                          backgroundColor: '#25D366',
                          color: 'white',
                          py: 2,
                          fontSize: '1.1rem',
                          '&:hover': {
                            backgroundColor: '#1DA851',
                          },
                        }}
                      >
                        Send WhatsApp Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>

                <Box
                  sx={{
                    mt: 3,
                    p: 2,
                    backgroundColor: '#e8f5e8',
                    borderRadius: 1,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#2e7d32' }}>
                    <WhatsApp sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                    Your message will open in WhatsApp for instant communication
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Additional Information */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Why Choose Parakh Brothers?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                60+ Years Experience
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Trusted since 1965
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Premium Brands
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Authorized dealers
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Expert Consultation
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Professional advice
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Competitive Prices
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Best market rates
              </Typography>
            </Grid>
              <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                One-Stop Shop
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                All your hardware needs under one roof
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
      >
        <Alert
          onClose={() => setShowAlert(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Message prepared successfully! WhatsApp should have opened in a new tab.
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Contact
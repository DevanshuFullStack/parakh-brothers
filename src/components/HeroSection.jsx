import React, { useEffect, useState } from 'react'
import { Box, Typography, Button, Container, Grid } from '@mui/material'
import { useSpring, animated as Animated } from 'react-spring'
import logo from '../assets/logo/parakh-brothers-logo.jpeg'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 280, friction: 60 },
  })

  const logoAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1) rotate(0deg)',
    from: { opacity: 0, transform: 'scale(0.8) rotate(-10deg)' },
    delay: 300,
    config: { tension: 200, friction: 50 },
  })
  
  const backgroundFloat = useSpring({
    transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
    config: { tension: 120, friction: 14 },
  })

  return (
    <Box
      sx={{
        minHeight: '90vh',
        background: {
          xs: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          md: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
          animation: 'gradientShift 8s ease-in-out infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.03) 90deg, transparent 180deg, rgba(255,255,255,0.03) 270deg, transparent 360deg)',
          animation: 'rotate 20s linear infinite',
        },
        '@keyframes gradientShift': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(2deg)' },
        },
        '@keyframes rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        '@keyframes twinkle': {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        '@keyframes backgroundMove': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(60px, 60px)' },
        },
        '@keyframes logoRotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }}
    >
      {/* Enhanced Floating Background Elements */}
      <Animated.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          ...backgroundFloat,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 25%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 25%), radial-gradient(circle at 40% 60%, rgba(255,255,255,0.06) 0%, transparent 25%)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
      </Animated.div>
      
      {/* Animated Particles */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '4px',
            height: '4px',
            backgroundColor: 'rgba(255,255,255,0.4)',
            borderRadius: '50%',
            animation: 'twinkle 3s ease-in-out infinite',
            boxShadow: '0 0 10px rgba(255,255,255,0.3)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '70%',
            right: '15%',
            width: '6px',
            height: '6px',
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: '50%',
            animation: 'twinkle 4s ease-in-out infinite 1s',
            boxShadow: '0 0 15px rgba(255,255,255,0.2)',
          },
        }}
      />
      
      {/* Additional floating elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: '20%',
          width: '3px',
          height: '3px',
          backgroundColor: 'rgba(255,255,255,0.5)',
          borderRadius: '50%',
          animation: 'twinkle 2.5s ease-in-out infinite 0.5s',
          boxShadow: '0 0 8px rgba(255,255,255,0.4)',
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '25%',
          width: '5px',
          height: '5px',
          backgroundColor: 'rgba(255,255,255,0.35)',
          borderRadius: '50%',
          animation: 'twinkle 3.5s ease-in-out infinite 2s',
          boxShadow: '0 0 12px rgba(255,255,255,0.25)',
        }}
      />
      
      {/* Background Pattern with Animation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.08"%3E%3Cpath d="M30 30c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          animation: 'backgroundMove 15s linear infinite',
        }}
      />
      

      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Animated.div style={fadeIn}>
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Parakh Brothers
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: 2,
                  fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Pioneer Since 1965
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  mb: 4,
                  fontStyle: 'italic',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                "Coloring Your Dreams for Over 60 Years"
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: '600px',
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  textAlign: { xs: 'center', md: 'left' },
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                The most trusted name in paints, tools, chemicals, and pesticides in Mandsaur district. 
                From a small shop to the synonym of branded painting solutions - serving 3 generations with quality and trust.
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center'
              }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#ff9800',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    minWidth: '160px',
                    '&:hover': {
                      backgroundColor: '#f57c00',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  href="/products"
                >
                  Our Products
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    minWidth: '160px',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  href="/contact"
                >
                  Contact Us
                </Button>
              </Box>
            </Animated.div>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', flex: { xs: 'auto', sm: 'auto', md: 'auto' } }}>
            <Animated.div style={logoAnimation}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  mt: { xs: 2, md: 0 },
                }}
              >
                {/* Logo Glow Ring */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: { xs: '180px', sm: '220px', md: '280px' },
                    height: { xs: '180px', sm: '220px', md: '280px' },
                    borderRadius: '50%',
                    background: 'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #ff6b6b)',
                    animation: 'logoRotate 8s linear infinite',
                    zIndex: 0,
                    opacity: 0.6,
                  }}
                />
                
                {/* Logo Container with Enhanced Effects */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    p: 1,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '3px solid rgba(255,255,255,0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt="Parakh Brothers Logo"
                    sx={{
                      width: { xs: '160px', sm: '200px', md: '260px' },
                      height: { xs: '160px', sm: '200px', md: '260px' },
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid rgba(255,255,255,0.4)',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.1)',
                      filter: 'brightness(1.1) contrast(1.1)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </Box>
              </Box>
            </Animated.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroSection
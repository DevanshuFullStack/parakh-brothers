import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Container, Typography, Grid, Card, CardContent, Fade, Slide, Zoom } from '@mui/material'
import { Business, Timeline, Groups, Star, Engineering, Architecture, Palette, Build, Science, Nature, Shield, Agriculture } from '@mui/icons-material'

const CounterAnimation = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )
    
    if (elementRef.current) {
      observer.observe(elementRef.current)
    }
    
    return () => observer.disconnect()
  }, [isVisible])
  
  useEffect(() => {
    if (!isVisible) return
    
    let start = 0
    const increment = end / (duration / 16) // 60fps
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [end, duration, isVisible])
  
  return <span ref={elementRef}>{prefix}{count}{suffix}</span>
}

const AboutUs = () => {
  const navigate = useNavigate()
  
  const handleProductClick = (productType) => {
    // Navigate to ProductLines page and scroll to specific section
    navigate('/products')
    
    // Scroll to specific section after navigation
    setTimeout(() => {
      const sectionMap = {
        'paints': 'paints',
        'tools': 'tools', 
        'chemicals': 'chemicals',
        'pesticides': 'chemicals', // Pesticides are under chemicals section
        'safety': 'tools', // Safety equipment under tools section
        'farming': 'tools' // Farming tools under tools section
      }
      
      const targetSection = sectionMap[productType]
      if (targetSection) {
        const element = document.querySelector(`[data-section="${targetSection}"]`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }, 100)
  }
  
  const stats = [
    {
      icon: <Timeline />,
      title: <><CounterAnimation end={60} duration={2500} suffix="+ Years" /></>,
      description: 'Of Trust & Excellence',
      color: '#1976d2',
      bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      icon: <Groups />,
      title: <><CounterAnimation end={3} duration={1500} suffix=" Generations" /></>,
      description: 'Family Business',
      color: '#ff9800',
      bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      icon: <Engineering />,
      title: <><CounterAnimation end={50} duration={2000} suffix="+ Projects" /></>,
      description: 'Major Projects Delivered Every Year',
      color: '#4caf50',
      bgGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      icon: <Architecture />,
      title: <><CounterAnimation end={30} duration={1800} suffix="+ Partners" /></>,
      description: 'Partner Architects & Painting Contractors',
      color: '#9c27b0',
      bgGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      icon: <Star />,
      title: 'Pioneer',
      description: 'In Branded Paints',
      color: '#f44336',
      bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      icon: <Business />,
      title: 'Among top dealers',
      description: 'In M.P State',
      color: '#00bcd4',
      bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  ]

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="xl">
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
            About us
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
            Pioneer since 1965 and the most trusted hardware & paint shop in Mandsaur district
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 6, justifyContent: 'center' }}>
          {stats.map((stat, index) => (
            <Grid item size={{ xs: 6, sm: 4, md: 2 }} key={index}>
              <Slide direction="up" in={true} timeout={300 + index * 100}>
                <Card
                  sx={{
                    height: 280, // Fixed height
                    width: 180, // Fixed width for all cards
                    minHeight: 280,
                    minWidth: 180,
                    textAlign: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: 'white',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    mx: 'auto', // Center the card
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: stat.bgGradient || stat.color,
                    },
                  }}
                >
                  <CardContent 
                    sx={{ 
                      py: 3, 
                      px: 2, 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly', // Even distribution
                    }}
                  >
                    {/* Icon Section - Fixed space */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 80, // Fixed height for icon area
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: '50%',
                          background: stat.bgGradient || `${stat.color}20`,
                          width: 60,
                          height: 60,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'rotate(10deg) scale(1.1)',
                          },
                        }}
                      >
                        {React.cloneElement(stat.icon, { 
                          sx: { 
                            fontSize: 28, 
                            color: stat.color,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                          } 
                        })}
                      </Box>
                    </Box>
                    
                    {/* Title Section - Fixed space */}
                    <Box
                      sx={{
                        height: 60, // Fixed height for title area
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 1,
                      }}
                    >
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 'bold',
                          background: stat.bgGradient || stat.color,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontSize: '1rem',
                          textAlign: 'center',
                          lineHeight: 1.2,
                        }}
                      >
                        {stat.title}
                      </Typography>
                    </Box>
                    
                    {/* Description Section - Fixed space */}
                    <Box
                      sx={{
                        height: 60, // Fixed height for description area
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#666',
                          fontSize: '0.75rem',
                          lineHeight: 1.2,
                          textAlign: 'center',
                          px: 1,
                        }}
                      >
                        {stat.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={6} alignItems="center">
          <Grid item size={12}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                color: '#1976d2',
              }}
            >
              Our Journey
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.8,
                color: '#444',
              }}
            >
              Parakh Brothers is the leading hardware and paint shop in Mandsaur since 1965, serving as the most trusted supplier of paints, putty, tools, chemicals, and pesticides in Mandsaur district. We were the pioneers of branded wall paints in Mandsaur and have been part of platinum and diamond core group of Kansai Nerolac paints, Asian Paints, Berger Paints, Taparia tools, JK putty and many more top brands.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.8,
                color: '#444',
              }}
            >
              Our family-run hardware store in Mandsaur has been serving the community for over 3 generations, providing quality paints, construction tools, agricultural chemicals, and pesticides across Mandsaur and nearby areas. We offer both retail and wholesale services, making us the preferred choice for contractors, farmers, and homeowners in Mandsaur district.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: '#444',
              }}
            >
              From a small paint shop to becoming Mandsaur's most trusted hardware and paint dealer, our journey reflects 60 years of dedication to quality products and customer satisfaction. Today, we are recognized as the best hardware shop in Mandsaur for genuine products and competitive prices.
            </Typography>
          </Grid>
          
        </Grid>
        
        {/* Enhanced What We Deal In Section */}
        <Box
          sx={{
            mt: 6,
            position: 'relative',
            overflow: 'hidden',
            background: {
              xs: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              md: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
            },
            color: 'white',
            py: { xs: 5, md: 8 },
            px: { xs: 2, md: 4 },
            borderRadius: 4,
            boxShadow: '0 20px 60px rgba(25, 118, 210, 0.4)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              animation: 'float 6s ease-in-out infinite',
            },
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 5, 
                textAlign: 'center',
                fontSize: { xs: '2rem', md: '2.5rem' },
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 4,
                  background: 'rgba(255,255,255,0.8)',
                  borderRadius: 2,
                },
              }}
            >
              What We Deal In
            </Typography>
            
            <Grid 
              container 
              spacing={{ xs: 2, md: 4 }} 
              justifyContent="center"
              alignItems="stretch"
            >
              {[
                { title: 'Paints', subtitle: 'Premium Quality', icon: <Palette />, color: '#ff6b6b', delay: 0, section: 'paints' },
                { title: 'Tools', subtitle: 'Professional Grade', icon: <Build />, color: '#4ecdc4', delay: 100, section: 'tools' },
                { title: 'Chemicals', subtitle: 'Industrial Grade', icon: <Science />, color: '#45b7d1', delay: 200, section: 'chemicals' },
                { title: 'Pesticides', subtitle: 'Agricultural Solutions', icon: <Nature />, color: '#96ceb4', delay: 300, section: 'pesticides' },
                { title: 'Safety Equipment', subtitle: 'Protection Gear', icon: <Shield />, color: '#feca57', delay: 400, section: 'safety' },
                { title: 'Farming Tools', subtitle: 'Agricultural Implements', icon: <Agriculture />, color: '#ff9ff3', delay: 500, section: 'farming' }
              ].map((item, index) => (
                <Grid 
                  item 
                  size={{ xs: 6, sm: 4, md: 2 }} 
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Zoom 
                    in={true} 
                    timeout={500 + item.delay}
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                    <Box
                      onClick={() => handleProductClick(item.section)}
                      sx={{
                        textAlign: 'center',
                        p: { xs: 2.5, md: 3.5 },
                        borderRadius: 3,
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
                        backdropFilter: 'blur(20px)',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        width: '100%',
                        maxWidth: 160,
                        minHeight: { xs: 120, md: 140 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'relative',
                        cursor: 'pointer',
                        '&:hover': {
                          background: 'linear-gradient(145deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
                          transform: 'translateY(-8px) scale(1.05)',
                          boxShadow: `0 15px 35px rgba(0,0,0,0.3), 0 0 20px ${item.color}40`,
                          border: `2px solid ${item.color}80`,
                          '& .icon-container': {
                            transform: 'scale(1.2) rotate(10deg)',
                            background: item.color,
                          },
                          '& .pulse-effect': {
                            animation: 'pulse 1s infinite',
                          },
                        },
                        '&:active': {
                          transform: 'translateY(-4px) scale(1.02)',
                        },
                        '@keyframes pulse': {
                          '0%': { boxShadow: `0 0 0 0 ${item.color}40` },
                          '70%': { boxShadow: `0 0 0 15px ${item.color}00` },
                          '100%': { boxShadow: `0 0 0 0 ${item.color}00` },
                        },
                      }}
                    >
                      {/* Animated Icon */}
                      <Box
                        className="icon-container pulse-effect"
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          background: `linear-gradient(145deg, ${item.color}aa, ${item.color}cc)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -2,
                            left: -2,
                            right: -2,
                            bottom: -2,
                            borderRadius: '50%',
                            background: `conic-gradient(${item.color}, transparent, ${item.color})`,
                            zIndex: -1,
                            animation: 'rotate 3s linear infinite',
                          },
                          '@keyframes rotate': {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(360deg)' },
                          },
                        }}
                      >
                        {React.cloneElement(item.icon, {
                          sx: {
                            fontSize: 28,
                            color: 'white',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                          }
                        })}
                      </Box>
                      
                      {/* Title */}
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 'bold',
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          lineHeight: 1.2,
                          mb: 1,
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        }}
                        title={`Click to view ${item.title} products`}
                      >
                        {item.title}
                      </Typography>
                      
                      {/* Subtitle */}
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          opacity: 0.95,
                          fontSize: { xs: '0.8rem', md: '0.85rem' },
                          lineHeight: 1.3,
                          textAlign: 'center',
                          fontWeight: 500,
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
            
            {/* Enhanced Quote Section */}
            <Fade in={true} timeout={1000}>
              <Box
                sx={{
                  mt: 6,
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
                  backdropFilter: 'blur(25px)',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    animation: 'shimmer 3s infinite',
                  },
                  '@keyframes shimmer': {
                    '0%': { left: '-100%' },
                    '100%': { left: '100%' },
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    fontSize: { xs: '1.3rem', md: '1.8rem' },
                    textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    zIndex: 1,
                    background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  "Serving Both Retail & Wholesale Since 1965"
                </Typography>
              </Box>
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutUs
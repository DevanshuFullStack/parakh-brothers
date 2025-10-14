import React, { useState, useEffect, useRef } from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material'
import { EmojiEvents, TrendingUp, Star, Business } from '@mui/icons-material'

const CounterAnimation = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = counterRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <Typography 
      ref={counterRef}
      variant="h3" 
      sx={{ fontWeight: 'bold', mb: 1 }}
    >
      {count}{suffix}
    </Typography>
  )
}

const Awards = () => {
  // Note: Add actual award images to assets/awards/ folder
  const achievements = [
    {
      icon: <EmojiEvents />,
      title: 'National Sales Awards',
      description: 'Winning national awards for sales from various companies since 1999',
      period: '1999 - Present',
      color: '#ff9800',
    },
    {
      icon: <TrendingUp />,
      title: 'Outstanding Performance',
      description: 'Competing with big city dealers across state and outperforming consistently',
      period: 'Multiple Years',
      color: '#4caf50',
    },
    {
      icon: <Star />,
      title: 'Customer Excellence',
      description: 'Recognition for exceptional customer service and satisfaction',
      period: 'Ongoing',
      color: '#1976d2',
    },
    {
      icon: <Business />,
      title: 'Partnership Awards',
      description: 'Platinum and Diamond core group member of leading brands',
      period: 'Multiple Brands',
      color: '#9c27b0',
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
            Awards & Recognition
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
            We have been winning national awards for sales from Kansai Nerolac Paints since 1999 till date, 
            competing with big city dealers across the state through sheer hard work and customer goodwill
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {achievements.map((achievement, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent sx={{ py: 4 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: achievement.color,
                    }}
                  >
                    {React.cloneElement(achievement.icon, { sx: { fontSize: 50 } })}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      color: achievement.color,
                    }}
                  >
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      mb: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    {achievement.description}
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: achievement.color,
                      color: 'white',
                      py: 1,
                      px: 2,
                      borderRadius: 1,
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {achievement.period}
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
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            Our Success Story
          </Typography>
          <Grid container spacing={4}>
            <Grid item size={{ xs: 12, md: 4 }}>
              <CounterAnimation end={20} suffix="+" duration={2500} />
              <Typography variant="h6">
                Years of Awards
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <CounterAnimation end={15} suffix="+" duration={2000} />
              <Typography variant="h6">
                Years as part of Nerolac Core/Platinum Club
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                  #1
                </Typography>
                <Typography variant="h6">
                  In Regional Performance over the years
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            sx={{
              mt: 4,
              fontSize: '1.1rem',
              fontStyle: 'italic',
              opacity: 0.9,
            }}
          >
            "Excellence is not a destination, it's a continuous journey that we embark on every day"
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Awards
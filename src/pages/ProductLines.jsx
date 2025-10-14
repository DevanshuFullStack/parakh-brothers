import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Slide,
} from '@mui/material'

// Import brand logos
import kansaiNerolac from '../assets/products/kansai-nerolac.jpeg'
import indigo from '../assets/products/indigo.jpeg'
import rayband from '../assets/products/rayband.jpeg'
import asianPaints from '../assets/products/asian-paints.jpeg'
import jkPutty from '../assets/products/jk-putty.jpeg'
import birla from '../assets/products/birla.jpeg'
import nerolacPutty from '../assets/products/nerolac-putty.jpg'
import taparia from '../assets/products/taparia.jpeg'
import eastman from '../assets/products/eastman.png'
import venus from '../assets/products/venus.jpeg'
import superWelding from '../assets/products/super.jpeg'
import mangalam from '../assets/products/mangalam.png'
// Import product images
import ashaCutter from '../assets/products/asha.png'
import ashaWeld from '../assets/products/asha.png'
import bleachingPowder from '../assets/products/bleachin-powder.jpg'
import calciumCarbide from '../assets/products/calcium-carbide.webp'
import oxygenCylinder from '../assets/products/oxygen-cylinder.jpg'
import pesticide from '../assets/products/pesticides.png'
import sprayer from '../assets/products/sprayer.jpg'

const ProductLines = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimationTriggered(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const productCategories = [
    {
      id: 'paints',
      title: 'Paints',
      description: 'Premium quality paints for all your interior and exterior needs',
      image: kansaiNerolac, // Using a representative image
      brands: [
        { name: 'Kansai Nerolac Paints', logo: kansaiNerolac, website: 'https://www.nerolac.com' },
        { name: 'Indigo Wall Paints', logo: indigo, website: '#' },
        { name: 'Rayband Paints', logo: rayband, website: '#' },
        { name: 'Asian Paints', logo: asianPaints, website: 'https://www.asianpaints.com' },
      ],
    },
    {
      id: 'putty',
      title: 'Putty & White Cement',
      description: 'High-quality wall putty and cement for smooth, durable surfaces',
      image: jkPutty,
      brands: [
        { name: 'JK Wall Putty', logo: jkPutty, website: 'https://www.jkcement.com' },
        { name: 'Birla Cement', logo: birla, website: 'https://www.birlawhite.com' },
        { name: 'Nerolac Wall Putty', logo: nerolacPutty, website: 'https://www.nerolac.com' },
        { name: 'Asian Paints Putty', logo: asianPaints, website: 'https://www.asianpaints.com' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools',
      description: 'Professional tools for all construction and maintenance work',
      image: taparia,
      brands: [
        { name: 'Taparia Tools', logo: taparia, website: 'https://www.taparia.in' },
        { name: 'East man Tools', logo: eastman, website: '#' },
        { name: 'Venus Tools', logo: venus, website: '#' },
      ],
    },
    {
      id: 'welding',
      title: 'Welding Tools',
      description: 'Complete range of welding equipment and accessories',
      image: ashaCutter,
      brands: [
        { name: 'Super Welding Rods', logo: superWelding, website: '#' },
        { name: 'Mangalam Welding Rods', logo: mangalam, website: '#' },
        { name: 'Asha Welding Cutter', logo: ashaWeld, website: '#' },
      ],
    },
    {
      id: 'chemicals',
      title: 'Chemicals',
      description: 'Industrial chemicals and specialized compounds',
      image: bleachingPowder,
      products: [
        { name: 'Bleaching Powder', image: bleachingPowder },
        { name: 'Calcium Carbide', image: calciumCarbide },
        { name: 'Oxygen Cylinder', image: oxygenCylinder },
      ],
    },
    {
      id: 'others',
      title: 'Other Products',
      description: 'Pesticides, safety equipment, and farming tools',
      image: pesticide,
      products: [
        { name: 'Pesticides', image: pesticide },
        { name: 'Safety Equipment', image: sprayer },
        { name: 'Farming Tools', image: sprayer },
      ],
    },
  ]



  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
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
            Best Hardware & Paint Shop Products in Mandsaur
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#666',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            Premium paints, putty, tools, chemicals & pesticides from trusted brands in Mandsaur
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#777',
              maxWidth: '900px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: '1.1rem',
            }}
          >
            Parakh Brothers offers the widest range of branded paints, hardware tools, welding equipment, 
            industrial chemicals, and agricultural pesticides in Mandsaur. We are authorized dealers of 
            Asian Paints, Kansai Nerolac, Berger Paints, JK Putty, Taparia Tools and many more top brands.
          </Typography>
        </Box>

        {/* Display each category with its brands */}
        {productCategories.map((category) => (
          <Box key={category.id} data-section={category.id} sx={{ mb: 8 }}>
            {/* Category Header */}
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  background: category.id === 'paints' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
                             category.id === 'putty' ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' :
                             category.id === 'tools' ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' :
                             category.id === 'welding' ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' :
                             'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                {category.id === 'paints' && '🎨'}
                {category.id === 'putty' && '🏗️'}
                {category.id === 'tools' && '🔧'}
                {category.id === 'welding' && '⚡'}
                {category.id === 'chemicals' && '🧪'}
                {category.id === 'others' && '📦'}
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    color: '#2c3e50',
                    mb: 0.5,
                  }}
                >
                  {category.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#7f8c8d',
                  }}
                >
                  {category.description}
                </Typography>
              </Box>
            </Box>

            {/* Brands Grid */}
            {category.brands && (
              <Grid container spacing={3} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {category.brands.map((brand, index) => (
                  <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Slide
                      direction="up"
                      in={animationTriggered}
                      timeout={400 + index * 100}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <Card
                        sx={{
                          height: 320, // Fixed height for uniformity
                          minHeight: 320,
                          maxHeight: 320,
                          width: '100%', // Full width of grid container
                          minWidth: 280, // Minimum width for consistency
                          maxWidth: 320, // Maximum width to prevent stretching
                          mx: 'auto', // Center the card horizontally
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            transform: 'translateY(-8px) scale(1.02)',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                          },
                          borderRadius: 3,
                          border: '1px solid #e0e0e0',
                          backgroundColor: 'white',
                          overflow: 'hidden',
                        }}
                      >
                        <CardContent 
                          sx={{ 
                            p: 3, 
                            textAlign: 'center',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                          }}
                        >
                          {/* Image Section - Fixed height */}
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: 120, // Fixed height
                              mb: 2,
                              backgroundColor: '#fafafa',
                              borderRadius: 2,
                              p: 2,
                              transition: 'background-color 0.3s ease',
                              '&:hover': {
                                backgroundColor: '#f0f0f0',
                              },
                            }}
                          >
                            <Box
                              component="img"
                              src={brand.logo}
                              alt={brand.name}
                              sx={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                  transform: 'scale(1.05)',
                                },
                              }}
                            />
                          </Box>
                          
                          {/* Content Section - Flexible space */}
                          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            {/* Title */}
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 'bold',
                                mb: 2,
                                color: '#2c3e50',
                                fontSize: '1rem',
                                lineHeight: 1.3,
                                minHeight: '2.6em', // Ensures consistent title height
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {brand.name}
                            </Typography>
                            
                            {/* Description */}
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#7f8c8d',
                                mb: 2,
                                fontSize: '0.875rem',
                                lineHeight: 1.4,
                                minHeight: '2.8em', // Ensures consistent description height
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {category.id === 'paints' && 'Vibrant colors for modern homes'}
                              {category.id === 'putty' && 'Smooth and durable finishes'}
                              {category.id === 'tools' && 'Professional grade tools'}
                              {category.id === 'welding' && 'Industrial welding solutions'}
                            </Typography>
                            
                            {/* Button */}
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={() => brand.website !== '#' && window.open(brand.website, '_blank')}
                              disabled={brand.website === '#'}
                              sx={{
                                borderColor: '#3498db',
                                color: '#3498db',
                                fontSize: '0.8rem',
                                py: 1,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  backgroundColor: '#3498db',
                                  color: 'white',
                                  transform: 'translateY(-2px)',
                                },
                                '&:disabled': {
                                  borderColor: '#bdc3c7',
                                  color: '#bdc3c7',
                                },
                              }}
                            >
                              Visit Website
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Slide>
                  </Grid>
                ))}
              </Grid>
            )}

            {/* Products Grid for categories without brands */}
            {category.products && (
              <Grid container spacing={3} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {category.products.map((product, index) => (
                  <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Slide
                      direction="up"
                      in={animationTriggered}
                      timeout={400 + index * 100}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <Card
                        sx={{
                          height: 250, // Fixed height for uniformity (shorter for products without buttons)
                          minHeight: 250,
                          maxHeight: 250,
                          width: '100%', // Full width of grid container
                          minWidth: 280, // Minimum width for consistency
                          maxWidth: 320, // Maximum width to prevent stretching
                          mx: 'auto', // Center the card horizontally
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            transform: 'translateY(-8px) scale(1.02)',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                          },
                          borderRadius: 3,
                          border: '1px solid #e0e0e0',
                          backgroundColor: 'white',
                          overflow: 'hidden',
                        }}
                      >
                        <CardContent 
                          sx={{ 
                            p: 3, 
                            textAlign: 'center',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                          }}
                        >
                          {/* Image Section - Fixed height */}
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: 140, // Larger image area for products
                              mb: 2,
                              backgroundColor: '#fafafa',
                              borderRadius: 2,
                              p: 2,
                              transition: 'background-color 0.3s ease',
                              '&:hover': {
                                backgroundColor: '#f0f0f0',
                              },
                            }}
                          >
                            <Box
                              component="img"
                              src={product.image}
                              alt={product.name}
                              sx={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                  transform: 'scale(1.05)',
                                },
                              }}
                            />
                          </Box>
                          
                          {/* Title Section */}
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 'bold',
                              color: '#2c3e50',
                              fontSize: '1rem',
                              lineHeight: 1.3,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {product.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Slide>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        ))}
      </Container>
    </Box>
  )
}

export default ProductLines
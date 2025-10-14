import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo/parakh-brothers-logo.jpeg'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { text: 'Home', path: '/', isAnchor: false },
    { text: 'About Us', path: '#about', isAnchor: true },
    { text: 'Our Team', path: '#team', isAnchor: true },
    { text: 'Product Lines', path: '/products', isAnchor: false },
    { text: 'Awards', path: '#awards', isAnchor: true },
    { text: 'Contact Us', path: '/contact', isAnchor: false },
  ]

  const handleAnchorClick = (anchorPath) => {
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll to section
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(anchorPath)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(anchorPath)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Parakh Brothers
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={item.isAnchor ? 'button' : Link}
              to={item.isAnchor ? undefined : item.path}
              onClick={() => {
                if (item.isAnchor) {
                  handleAnchorClick(item.path)
                }
                handleDrawerToggle()
              }}
              sx={{
                textAlign: 'center',
                backgroundColor: location.pathname === item.path ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
                width: '100%',
                border: 'none',
                background: 'none',
              }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'black', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: isMobile ? 1 : 0 }}>
            <img
              src={logo}
              alt="Parakh Brothers Logo"
              style={{
                height: '40px',
                width: '40px',
                marginRight: '10px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 'bold',
                fontSize: isMobile ? '1rem' : '1.25rem',
              }}
            >
              Parakh Brothers
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', marginLeft: 'auto' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={item.isAnchor ? 'button' : Link}
                  to={item.isAnchor ? undefined : item.path}
                  onClick={() => {
                    if (item.isAnchor) {
                      handleAnchorClick(item.path)
                    }
                  }}
                  sx={{
                    color: location.pathname === item.path ? theme.palette.primary.main : 'black',
                    fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                    mx: 1,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar
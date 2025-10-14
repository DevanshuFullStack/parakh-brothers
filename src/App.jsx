import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import FloatingContacts from './components/FloatingContacts'

// Pages
import Home from './pages/Home'
import ProductLines from './pages/ProductLines'
import Contact from './pages/Contact'

// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue - representing trust and professionalism
    },
    secondary: {
      main: '#ff9800', // Orange - representing creativity and paint colors
    },
    accent: {
      main: '#4caf50', // Green - representing growth and prosperity
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
})

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductLines />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingContacts />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

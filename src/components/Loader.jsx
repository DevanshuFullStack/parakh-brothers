import React from 'react'
import { Box, Typography } from '@mui/material'
import './Loader.css'

const Loader = () => {
  return (
    <Box className="loader-container">
      <div className="loader-content">
        <div className="paint-shop-loader">
          {/* Paint Can */}
          <div className="paint-can">
            <div className="paint-can-lid"></div>
            <div className="paint-can-body">
              <div className="paint-level"></div>
              <div className="paint-label">PAINT</div>
            </div>
            <div className="paint-spill-stream"></div>
          </div>
          
          {/* Paint Brush */}
          <div className="paint-brush">
            <div className="brush-handle"></div>
            <div className="brush-ferrule"></div>
            <div className="brush-bristles">
              <div className="bristle"></div>
              <div className="bristle"></div>
              <div className="bristle"></div>
              <div className="bristle"></div>
              <div className="bristle"></div>
            </div>
            <div className="paint-drop paint-drop-1"></div>
            <div className="paint-drop paint-drop-2"></div>
            <div className="paint-drop paint-drop-3"></div>
          </div>
          
          {/* Paint Splashes */}
          <div className="paint-splash splash-1"></div>
          <div className="paint-splash splash-2"></div>
          <div className="paint-splash splash-3"></div>
          <div className="paint-splash splash-4"></div>
          
          {/* Color Palette */}
          <div className="color-palette">
            <div className="color-dot color-red"></div>
            <div className="color-dot color-blue"></div>
            <div className="color-dot color-green"></div>
            <div className="color-dot color-yellow"></div>
            <div className="color-dot color-purple"></div>
          </div>
        </div>
        
        <div className="loader-text">
          <Typography variant="h4" className="loader-title">
            Parakh Brothers
          </Typography>
          <Typography variant="subtitle1" className="loader-subtitle">
            Coloring Your Dreams Since 1965
          </Typography>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Loader
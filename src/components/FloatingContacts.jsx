import React from 'react'
import { Box, Fab, Tooltip, Stack } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

const FloatingContacts = () => {
  const contacts = [
    {
      icon: <WhatsAppIcon />,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/919826668789', '_blank'),
      color: '#25D366',
    },
    {
      icon: <EmailIcon />,
      label: 'Email',
      action: () => window.open('mailto:parakhbrothers524@gmail.com', '_blank'),
      color: '#1976d2',
    },
    {
      icon: <PhoneIcon />,
      label: 'Call',
      action: () => window.open('tel:+919826668789', '_blank'),
      color: '#ff9800',
    },
  ]

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Stack spacing={2} direction="column-reverse">
        {contacts.map((contact, index) => (
          <Tooltip key={contact.label} title={contact.label} placement="left">
            <Fab
              size="medium"
              onClick={contact.action}
              sx={{
                backgroundColor: contact.color,
                color: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                '&:hover': {
                  backgroundColor: contact.color,
                  opacity: 0.9,
                  transform: 'scale(1.1)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                },
                transition: 'all 0.3s ease',
                animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`,
                '@keyframes slideInRight': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateX(100px)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateX(0)',
                  },
                },
              }}
            >
              {contact.icon}
            </Fab>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  )
}

export default FloatingContacts
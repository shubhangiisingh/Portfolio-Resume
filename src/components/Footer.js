import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name' > Designed & Developed by <a href='https://github.com/shubhangiisingh'>Shubhangi Singh </a></Typography>
      </div>
      <div className='footer_right'>
        <Typography className='footer_copyright' >Clone idea from <a href='https://themeforest.net/user/tavonline'>Travonline. </a></Typography>
      </div>

    </div>
  )
}

export default Footer

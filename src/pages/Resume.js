import React from 'react'
import './Resume.css'
import { Grid, Typography } from '@mui/material'
import resumeData from '../utils/resumeData'
const resume = () => {
  return (
    <>
    <Grid container className='section pb_45'>
      <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>Resume</h6></Grid>
      <Grid item xs={12} >
        <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
      </Grid>
    </Grid>
    <Grid container className='section pb_45'></Grid>
    <Grid container className='section pb_45'></Grid>
    <Grid container className='section pb_45'></Grid>
    <Grid container className='section pb_45'></Grid>
    </>
  )
}

export default resume

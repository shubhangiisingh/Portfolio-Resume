import React from 'react'
import './Resume.css'
import { Grid, Typography } from '@mui/material'
import resumeData from '../utils/resumeData'
const resume = () => {
  return (
    <>
    <Grid container className='resume_container'>
      <Grid item className='section_title'><span></span><Typography variant='h6'>Resume</Typography></Grid>
      <Grid item xs={12}>
        <Typography>{resumeData.about}</Typography>
      </Grid>
    </Grid>
    <Grid container className='resume_container'></Grid>
    <Grid container className='resume_container'></Grid>
    <Grid container className='resume_container'></Grid>
    <Grid container className='resume_container'></Grid>
    </>
  )
}

export default resume

import React from 'react'
import './Resume.css'
import { Grid, Typography } from '@mui/material'
import resumeData from '../utils/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../components/Timeline'
import WorkIcon from '@mui/icons-material/Work';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import SchoolIcon from '@mui/icons-material/School';
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
    <Grid container className='section '>
    <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>Resume</h6></Grid>
    </Grid>
    <Grid item xs={12} >
      <Grid container className='resume_timeline'>
        <Grid item sm={12} md={6} xs={12}>
          <CustomTimeline title="Work Experience" icon={<WorkIcon/>}>
          {resumeData.experiences.map(experience => (
            <TimelineItem>
              <CustomTimelineSeparator />
    
              <TimelineContent className='resume_content'>
                <Typography className='timelineItem_title'>{experience.title}</Typography>
                <Typography variant='caption' className='timelineItem_date'>{experience.Date}</Typography>
                <Typography variant='body2' className='timelineItem_description'>{experience.description}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
          </CustomTimeline>
        </Grid>
        <Grid item sm={12} md={6} xs={12}>
        <CustomTimeline title="Education" icon={<SchoolIcon/>}>
          {resumeData.educations.map(education => (
            <TimelineItem>
              <CustomTimelineSeparator />
    
              <TimelineContent className='resume_content'>
                <Typography className='timelineItem_title'>{education.title}</Typography>
                <Typography variant='caption' className='timelineItem_date'>{education.Date}</Typography>
                <Typography variant='body2' className='timelineItem_description'>{education.description}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
          </CustomTimeline>
       </Grid>
      </Grid>
      </Grid>
    <Grid container className='section '></Grid>
    <Grid container className='section '></Grid>
    <Grid container className='section '></Grid>
    </>
  )
}

export default resume

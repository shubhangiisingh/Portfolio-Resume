import React from 'react'
import './Resume.css'
import { Grid, Typography, Icon , Paper, TextField} from '@mui/material'
import resumeData from '../utils/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../components/Timeline'
import WorkIcon from '@mui/icons-material/Work';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import SchoolIcon from '@mui/icons-material/School';
import { TimelineDot } from '@mui/lab'


const resume = () => {
  return (
    <>
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>About Me</h6></Grid>
        <Grid item xs={12} >
          <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
        </Grid>
      </Grid>
      <Grid container className='section pb_45 '>
        <Grid item className='section_title '>
          <span></span>
          <h6 className='section_title_text'>Resume</h6></Grid>
      </Grid>
      <Grid item xs={12} >
        <Grid container className='resume_timeline p_30'>
          <Grid item sm={12} md={6} xs={12}>
            <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
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
            <CustomTimeline title="Education" icon={<SchoolIcon />}>
              {resumeData.educations.map(education => (
                <TimelineItem>
                  <CustomTimelineSeparator />

                  <TimelineContent className='resume_content '>
                    <Typography className='timelineItem_title '>{education.title}</Typography>
                    <Typography variant='caption' className='timelineItem_date'>{education.Date}</Typography>
                    <Typography variant='body2' className='timelineItem_description'>{education.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>My Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify='space-around' >
          {resumeData.services.map(service => (
            <Grid item xs={12} sm={6} md={4}>
              <div className='service '>
                <Icon className='service_icon'>{service.icon}</Icon>
                <Typography className='service_title' variant='h6'>{service.title}</Typography>
                <Typography className='service_description' variant='body2'>{service.description}</Typography>
              </div>      
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
     <Grid container  className='section graybg pb_45 p_50'>
      <Grid item xs={12}>
        <Grid container justifyContent='space-between' spacing={3}>
        {resumeData.skills.map(skill=>(
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={0} className='skill'>
            <Typography variant='h6' className='skill_title'>
              {skill.title}
              {skill.description.map(element =>(
                <Typography variant='body2' className='skill_description'>
                  <TimelineDot variant={'outlined'} className='timeline_dot'/>
                  {element}
                </Typography>
              ))}
            </Typography>
          </Paper>
        </Grid>
      ))}
     </Grid>
        </Grid>
      </Grid>
     
      <Grid container spacing={2} className='section pt_45 pb_45 '>
        {/* <Grid iten xs={12} lg={7}>
          <Grid container className='p_30'>
            <Grid item className='section_title mb_30 '>
              <span></span>
              <h6 className='section_title_text'>Contact Form</h6>
            </Grid>
            <Grid item xs={12} >
              <Grid container spacing={2}>
                <Grid itemxs={12} sm={6}>
                  <TextField fullWidth name='name' label='Name'/>
                  </Grid>
                  <Grid itemxs={12} sm={6}>
                  <TextField fullWidth name='email' label='Email'/>
                  </Grid>
                  <Grid itemxs={12} >
                  <TextField fullWidth name='message' label='Message' multiline rows={4}/>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton text='Submit'/>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
        <Grid iten xs={12} lg={5}>
        <Grid container className='p_30'>
            <Grid item className='section_title mb_30'>
              <span></span>
              <h6 className='section_title_text'>Contact Information</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container >
                <Grid item>
                    <Typography className='contact_info'>
                  <span>Address:</span>{resumeData.address}
                </Typography>
                </Grid>
                <Grid item>
                    {/* <Typography className='contact_info'>
                  <span>Phone:</span>{resumeData.phone}
                </Typography> */}
                </Grid>
                
                <Grid item>
                    <Typography className='contact_info'>
                  <span>E-mail:</span>{resumeData.email}
                </Typography>
                </Grid>
              </Grid>

            </Grid>
            <Grid item xs={12}>
             <Grid container className='contact_info_socialContainer'>
              {Object.keys(resumeData.socials).map(key =>(
                <Grid item className='contact_info_social'>
                  <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>
                </Grid>
              ))}
             </Grid>
            </Grid> 
           </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default resume

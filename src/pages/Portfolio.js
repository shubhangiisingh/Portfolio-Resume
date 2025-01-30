import React, { useState } from 'react'
import './Portfolio.css'
import { 
  Grid, Tabs, Tab, CardActionArea, CardMedia, CardContent, Typography, Grow, 
  Dialog, DialogTitle, DialogContent, DialogActions 
} from '@mui/material'
import resumeData from '../utils/resumeData'
import { Card } from 'react-bootstrap'

const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All');
  const [projectDialog, setProjectDialog] = useState(null);  // Change false -> null to prevent errors

  return (
    <Grid container className='section pb_45 pt_45'>
      <Grid item className='section_title mb_20'>
        <span></span>
        <h6 className='section_title_text'>Portfolio</h6>
      </Grid>

      <Grid item xs={12}>
        <Tabs 
          value={tabValue} 
          indicatorColor='white'
          className='custom_tabs'
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab 
            label='All' 
            value='All' 
            className={tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'}
          />

          {/* Ensure `resumeData.projects` exists before mapping */}
          {resumeData.projects?.length > 0 && 
            [...new Set(resumeData.projects.map(item => item.tag))].map((tag, index) => (
              <Tab 
                key={index} 
                label={tag} 
                value={tag}
                className={tabValue === tag ? 'customTabs_item active' : 'customTabs_item'}
              />
            ))
          }
        </Tabs>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3}>
          {/* Ensure `resumeData.projects` exists before mapping */}
          {resumeData.projects?.map((project, index) => (
            tabValue === project.tag || tabValue === 'All' ? (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Grow in timeout={1000}>
                  <Card className='CustomCard' onClick={() => setProjectDialog(project)}>
                    <CardActionArea>
                      <CardMedia 
                        className='customCard_image' 
                        image={project.image} 
                        title={project.title} 
                      />
                      <CardContent>
                        <Typography variant='body2' className='customCard_title'>{project.title}</Typography>
                        <Typography variant='caption' className='customCard_caption'>
                          {project.caption}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
            ) : null
          ))}
        </Grid>
      </Grid>

      {/* Dialog for Project Details */}
      <Dialog open={Boolean(projectDialog)} onClose={() => setProjectDialog(false)} className='projectDialog' maxWidth={"lg"} fullWidth>
        {projectDialog && (
          <>
            <DialogTitle>{projectDialog.title}</DialogTitle>
            <img src={projectDialog.image} alt='' className='projectDialog_image' />
            <DialogContent>
              <Typography className='projectDialog_description'> {projectDialog.description}</Typography>
             </DialogContent>
            <DialogActions className='projectDialog_actions'>
              {projectDialog?.links?.map((link, index) => (
                <a key={index} href={link.link} target='_blank' className='projectDialog_icon'>
                  {link.icon}
                </a>
              ))}
            </DialogActions>
          </>
        )}
      </Dialog>
    </Grid>
  )
}

export default Portfolio

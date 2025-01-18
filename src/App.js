
import React from 'react';
import './App.css';
import { Container, Grid, Box } from '@mui/material';
import Profile from './components/Profile';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container className={'top_60'}  >
      <Grid container spacing={5}>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <Box sx={{ background: '#fff', borderRadius: 2, boxShadow: 1 }}>
            <Profile />
          </Box>
        </Grid>
        <Grid item xs>
          <Box >
            
            <BrowserRouter>
            <Header />
            <div className='main-content'>
            <Routes>
                <Route path="/" element={<Resume />} />
                <Route path="/Portfolio" element={<Portfolio />} />
              </Routes>
            </div>
            </BrowserRouter>
            <Footer />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;



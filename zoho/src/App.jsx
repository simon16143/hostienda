import './App.css';
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Fetch from './components/Fetch';


function App() {
  return (
   <Container>
      <header>
        <Typography align='center' marginY={5} component="h1" variant="h3">
          Hostienda
        </Typography>
      </header>
      <div>
     <Fetch/>
      </div>
   </Container>

  
 
  )
}

export default App;

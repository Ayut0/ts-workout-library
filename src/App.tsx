import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router';
import { Box } from '@mui/material';
import { Navbar } from './Components/Navbar';
import { WorkoutDetail } from './UI/WorkoutDetail';
import { Home } from './UI/Home';
import { Footer } from './Components/Footer';

function App() {
  return (
    <>
        <Box width='400px' sx={{ width : {xl: '1488px'}}} m='auto'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/workout/:id' element={<WorkoutDetail />}/>
          </Routes>
        </Box>
        <Footer />
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router';
import { Box } from '@mui/material';
import { Navbar } from './Components/Navbar';
import { WorkoutDetail } from './UI/WorkoutDetail';
import { Home } from './UI/Home';
import { Footer } from './Components/Footer';

function App() {
  console.log(process.env.REACT_APP_RAPID_API_KEY);
  return (
        <Box width='400px' sx={{ width : {xl: '1488px'}}} m='auto'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/workout/:id' element={<WorkoutDetail />}/>
          </Routes>
          <Footer />
        </Box>
  );
}

export default App;

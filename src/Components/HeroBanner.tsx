import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroBannerWorkoutImage from '../assets/workout2.avif'

export const HeroBanner: React.FC = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }} position= 'relative' p='20px'>
        <Typography color='#a862ea' fontWeight='700' fontSize='1.75rem' fontFamily='Mochiy Pop One'>
            Workout World
        </Typography>
        <Typography fontWeight={700}
            sx={{
                fontSize: {lg: '52px', xs: '40px'},
                fontFamily: 'Mochiy Pop One'
            }}
        mb='24px' mt='36px'>
            Built Different
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb='20px'>
            Reach out to your favorite workouts<br/>so, you will never get lost
        </Typography>
            <Button variant="contained" color="secondary" href='#workouts' className='hero-button'  sx={{backgroundColor: '#a862ea', padding: '12px', fontFamily: 'Mochiy Pop One'}}>Explore Workouts</Button>
        <Typography
            fontWeight={600}
            color='#a862ea'
            sx={{
                opacity: 0.1,
                display: {lg: 'block', xs: 'none'}
            }}
            fontSize='200px'
            >
            Workouts
        </Typography>
        <img src={HeroBannerWorkoutImage} alt='bannerImage' className='hero-banner-img'/>
    </Box>
  )
}

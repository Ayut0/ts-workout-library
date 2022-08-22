import React, {useEffect, useState} from 'react';
import { Workout } from '../UI/Home';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { fetchWorkout } from '../utilities/fetchWorkout';
import { WorkoutCard } from '../Components/WorkoutCard';

type PropsFromHome ={
  workouts: Workout[] | undefined
  setWorkouts: Function
  eachBodyPart: string
  setEachBodyPart: Function
}

export const Workouts: React.FC<PropsFromHome> = ({ workouts, setWorkouts, eachBodyPart, setEachBodyPart }) => {
  return (
    <Box id='workouts' sx={{mt: {lg: '110px'}}} mt='50px' p='20px'>
      <Typography variant='h3' mb='48px' fontFamily='Mochiy Pop One'>
        Showing results
      </Typography>
      <Stack direction='row' sx={{gap: {lg: '110px', xs: '50px'}}} flexWrap='wrap' justifyContent='center'>
        { (workouts !== undefined) && workouts.map((workout, index) =>(
          <div>
            <WorkoutCard key={index} workout={workout}/>
          </div>
        ))}
      </Stack>
    </Box>
  )
}

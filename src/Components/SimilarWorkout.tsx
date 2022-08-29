import React from 'react'
import { Workout } from '../UI/Home';
import { Box, Stack, Typography } from '@mui/material'
import { HorizontalScrollBar } from './HorizontalScrollBar';
import { Loader } from '../UI/Loader'

type WorkoutProps = {
  sameTargetWorkouts?: Workout[]
  sameEquipmentWorkouts?: Workout[]
}

export const SimilarWorkout: React.FC<WorkoutProps> = ({ sameTargetWorkouts, sameEquipmentWorkouts }) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography variant='h3' mb='5' fontFamily='Mochiy Pop One'>The same target muscle group workouts</Typography>
      <Stack direction='row' sx={{p:'2', position: 'relative'}} gap='5'>
        {sameTargetWorkouts?.length ? <HorizontalScrollBar data={sameTargetWorkouts}/> : <Loader />}
      </Stack>
      <Typography variant='h3' mb='5' fontFamily='Mochiy Pop One'>Workouts uses the same equipment</Typography>
      <Stack direction='row' sx={{p:'2', position: 'relative'}} gap='5'>
        {sameEquipmentWorkouts?.length ? <HorizontalScrollBar data={sameEquipmentWorkouts}/> : <Loader />}
      </Stack>
    </Box>
  )
}

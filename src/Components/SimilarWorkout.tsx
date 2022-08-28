import React from 'react'
import { Workout } from '../UI/Home';
import { Box, Stack, Typography } from '@mui/material'

type WorkoutProps = {
  sameTargetWorkouts?: Workout
  sameEquipmentWorkouts?: Workout
}

export const SimilarWorkout: React.FC<WorkoutProps> = ({ sameTargetWorkouts, sameEquipmentWorkouts }) => {
  return (
    <div>SimilarWorkout</div>
  )
}

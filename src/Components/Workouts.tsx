import React, {useEffect, useState} from 'react';
// import Workout from '../UI/Home'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { fetchWorkout } from '../utilities/fetchWorkout'

type PropsFromHome ={
  workouts: ['']
  setWorkouts: Function
  eachBodyPart: string
  setEachBodyPart: Function
}

export const Workouts: React.FC<PropsFromHome> = ({ setWorkouts, eachBodyPart, setEachBodyPart }) => {
  return (
    <div>Workouts</div>
  )
}

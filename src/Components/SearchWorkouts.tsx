import React, {useEffect, useState} from 'react';
import { Workout } from '../UI/Home'
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import { fetchWorkout } from '../utilities/fetchWorkout';
import { HorizontalScrollBar } from './HorizontalScrollBar'

type PropsFromHome ={
  setWorkouts: Function
  eachBodyPart: string
  setEachBodyPart: Function
}

export const SearchWorkouts: React.FC<PropsFromHome> = ({ setWorkouts, eachBodyPart, setEachBodyPart }) => {
  const [search, setSearch] = useState<string>('');
  const [bodyParts, setBodyParts] = useState([''])

  //Load category
  useEffect(() =>{
    const fetchWorkoutData = async () =>{
      const bodyPartsList = await fetchWorkout(`${process.env.REACT_APP_RAPID_API_BODYPARTS}`);
      console.log(process.env.REACT_APP_RAPID_API_KEY)
      setBodyParts(['all', ...bodyPartsList])
    }

    fetchWorkoutData();
  },[])

  const searchHandler =async () => {
    if(search){
        const workoutData:Workout[] = await fetchWorkout(`${process.env.REACT_APP_RAPID_API_ALL_WORKOUT}`);

        //Filter workout based on user's input (name, body part, target, equipment)
        const filteredWorkouts = workoutData.filter(
          (workout:Workout) =>
          workout.name.toLowerCase().includes(search)
          || workout.bodyPart.toLowerCase().includes(search)
          || workout.target.toLowerCase().includes(search)
          || workout.equipment.toLowerCase().includes(search)
        );

        //Reset input
        setSearch('');
        setWorkouts(filteredWorkouts);
      }
  }

  return (
    <Stack alignItems='center' mt='40px' justifyContent='center' p='20px'>
      <Typography fontWeight='700' mb='48px' textAlign='center' fontFamily='Mochiy Pop One' sx={{
        fontSize :{lg: '40px', xs: '28px'}
      }}>
        More than 1,000 kinds of workouts
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
        sx={{
          input: { fontWeight: '700', height: {lg: '44px', xs: '36px'}, fontSize: { lg: '36px', xs: '28px'}},
          width: {lg: '800px', xs: '350px'},
        }} id="standard-basic" label="Search workouts" variant="standard" value={search} onChange={(e) => {setSearch(e.target.value.toLowerCase())}} type='text' />
        <Button className='search-btn'
          sx={{
            bgcolor: '#a862ea',
            color: '#fff',
            textTransform: 'none',
            width: {lg: '175px', xs: '80px'},
            fontSize: {lg: '20px', xs: '16px'},
            height: {lg: '52px', xs: '44px'},
            marginTop: '16px',
            position: 'absolute',
            right: '0',
          }}
          onClick={searchHandler}
          >Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollBar data={bodyParts} eachBodyPart={eachBodyPart} setEachBodyPart={setEachBodyPart} isBodyPart/>
      </Box>
    </Stack>
  )
}
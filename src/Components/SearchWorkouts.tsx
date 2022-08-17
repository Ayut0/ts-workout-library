import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import { workoutOptions, fetchWorkout } from '../utilities/fetchWorkout'

export const SearchWorkouts: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const searchHandler =async () => {
    const workoutData = await fetchWorkout(workoutOptions);
    console.log(workoutData);
      // if(search){
      // }

  }

  return (
    <Stack alignItems='center' mt='40px' justifyContent='center' p='20px'>
      <Typography fontWeight='700' mb='48px' textAlign='center' sx={{
        fontSize :{lg: '40px', xs: '28px'}
      }}>
        The workouts you might like
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
        sx={{
          input: { fontWeight: '700', height: '44px', fontSize: { lg: '36px', xs: '28px'}},
          width: {lg: '800px', xs: '350px'},
        }} id="standard-basic" label="Search workouts" variant="standard" value={search} onChange={(e) => {setSearch(e.target.value.toLowerCase())}} type='text' />
        <Button className='search-btn'
          sx={{
            bgcolor: '#a862ea',
            color: '#fff',
            textTransform: 'none',
            width: {lg: '175px', xs: '80px'},
            fontSize: {lg: '20px', xs: '16px'},
            height: '52px',
            marginTop: '16px',
            position: 'absolute',
            right: '0'
          }} 
          onClick={searchHandler}
          >Search
        </Button>
      </Box>
    </Stack>
  )
}

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
  const [currentPage, setCurrentPage] = useState<number>(1)
  const workoutsPerPage: number = 9;

  //it's always a multiple of workouts per page
  const indexOfLastWorkout: number = currentPage * workoutsPerPage;
  // console.log(indexOfLastWorkout)

  const indexOfFirstWorkout: number= indexOfLastWorkout - workoutsPerPage;
  // console.log(indexOfFirstWorkout)
  //Pick first 9 workouts from the original search result
  //Array?.method : ternary operator
  const currentShowedWorkouts: Workout[]|undefined = workouts?.slice(indexOfFirstWorkout, indexOfLastWorkout)
  // console.log(currentShowedWorkouts);

  const paginate = (e:any, val:number) =>{
    setCurrentPage(val);
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect(() =>{
    const fetchWorkoutsFromApi = async () =>{
      let workoutsData: Workout[] = [];

      if(eachBodyPart === 'all'){
        workoutsData = await fetchWorkout(`${process.env.REACT_APP_RAPID_API_ALL_WORKOUT}`)
      }else{
        workoutsData = await fetchWorkout(`${process.env.REACT_APP_RAPID_API_WORKOUT_BY_BODYPART}/${eachBodyPart}`)
      }

      setWorkouts(workoutsData);
    }

    fetchWorkoutsFromApi();
  }, [eachBodyPart])

  return (
    <Box id='workouts' sx={{mt: {lg: '110px'}}} mt='50px' p='20px'>
      <Typography variant='h3' mb='48px' fontFamily='Mochiy Pop One'>
        Showing results
      </Typography>
      <Stack direction='row' sx={{gap: {lg: '110px', xs: '50px'}}} flexWrap='wrap' justifyContent='center'>
        { (currentShowedWorkouts !== undefined) && currentShowedWorkouts.map((workout, index) =>(
          <div>
            <WorkoutCard key={index} workout={workout}/>
          </div>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        { (workouts !== undefined) && workouts.length > 9 && (
          <Pagination
            color='standard'
            variant="outlined"
            defaultPage={1}
            count={Math.ceil(workouts.length / workoutsPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Workout } from '../UI/Home';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

type PropsFromWorkout = {
    workout: Workout
}

export const WorkoutCard: React.FC<PropsFromWorkout> = ({ workout }) => {

  return (
    <Card sx={{ width: {lg: '400px', xs: '280px'}, height: '512px' , transform: 'transform: scale(1.05, 1.05)' ,transition: '0.3s all ease-in-out'}} className='workout-card'>
      <CardActionArea sx={{height: '100%'}}>
      <Link to={`/workout/${workout.id}`} style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          height='326px'
          width='90%'
          image={workout.gifUrl}
          alt={workout.name}
          sx={{m: '0 auto'}}
          loading='lazy'
        />
        <CardContent>
          <Button sx={{ml: '24px', color: '#615863', background: '#D4C1EC', fontSize: '16px', borderRadius: '20px', textTransform: 'capitalize'}}>
            {workout.bodyPart}
          </Button>
          <Button sx={{ml: '24px', color: '#615863', background: '#ffb7f5', fontSize: '16px', borderRadius: '20px', textTransform: 'capitalize'}}>
            {workout.target}
          </Button>
          <Typography gutterBottom variant="h5" component="div" textTransform='capitalize' sx={{mt: '16px' ,fontWeight: '700', fontFamily: 'Mochiy Pop One', color: '#363537', fontSize: {lg: '20px', xs: '16px'}}}>
            {workout.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {workout.equipment}
          </Typography>
        </CardContent>
      </Link>
      </CardActionArea>
    </Card>
  )
}


import { ClassNames } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Workout } from '../UI/Home';

type PropsFromWorkout = {
    workout: Workout
}

export const WorkoutCard: React.FC<PropsFromWorkout> = ({ workout }) => {
    console.log(workout);
  return (
    <Link to={`/workout/${workout.id}`} className='workout-card'>
        <img src={workout.gifUrl} alt={workout.name} loading='lazy'></img>
        <span>{workout.name}</span>
    </Link>
  )
}


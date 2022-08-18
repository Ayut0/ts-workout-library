import React from 'react'

type PropsFromHome ={
  setWorkouts: Function
  eachBodyPart: string
  setEachBodyPart: Function
}

export const Workouts: React.FC<PropsFromHome> = ({ setWorkouts, eachBodyPart, setEachBodyPart }) => {
  return (
    <div>Workouts</div>
  )
}

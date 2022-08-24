import React from 'react'
import { Workout } from '../UI/Home'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/arm.png'
import TargetImage from '../assets/targetImage.png'
import EquipmentImage from '../assets/equipment.png'

type PropsFromWorkoutDetail ={
  workoutDetail: Workout[]|undefined
}


export const Detail: React.FC<PropsFromWorkoutDetail> = ({ workoutDetail }) => {
  return (
    <div>
      {/* <img src={testPic1} alt="" /> */}
      {/* <img src={testPic} alt="" /> */}
    </div>
  )
}
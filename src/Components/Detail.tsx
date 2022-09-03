import React from 'react'
import { Workout } from '../UI/Home'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/arm.png'
import TargetImage from '../assets/targetImage.png'
import EquipmentImage from '../assets/equipment.png'

type PropsFromWorkoutDetail ={
  workoutDetail: Workout|undefined
}

export const Detail: React.FC<PropsFromWorkoutDetail> = ({ workoutDetail }) => {
  const icons = [
    {
      image: BodyPartImage,
      name: `Body part: ${workoutDetail?.bodyPart}`
    },
    {
      image: TargetImage,
      name: `Target muscle: ${workoutDetail?.target}`
    },
    {
      image: EquipmentImage,
      name: `Equipment: ${workoutDetail?.equipment}`
    }
  ]

  return (
      <Stack gap='60px' sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
        {(workoutDetail !== undefined) && (
          <>
            <img src={workoutDetail.gifUrl} alt={workoutDetail.name} loading='lazy' className='detail-image'></img>
            <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
              <Typography variant='h3' textTransform='capitalize' sx={{fontWeight: '700', fontFamily: 'Mochiy Pop One', fontSize: {lg: '40px', xs: '24px'}}}>
                {workoutDetail.name}
              </Typography>
              <Typography variant='h6' color='#302f2f'>
                Workout can improve not only your physical health but brain health, blood pressure and so on. {workoutDetail.name} is one of the best choices of the workouts to build your {workoutDetail.target}.
                {(workoutDetail.equipment === 'body weight')? (`You don't need any equipments. You can use your body weight.`):(`You need a ${workoutDetail.equipment}`)}
              </Typography>
              {icons?.map((icon) =>(
                <Stack key={icon.name} direction='row' alignItems='center'>
                  <Button sx={{width: '100px', height: '100px'}}>
                    <img src={icon.image} alt={icon.name} style={{width: '50px'}}></img>
                  </Button>
                  <Typography variant='h4' sx={{fontFamily: 'Mochiy Pop One', textTransform: 'capitalize', fontSize:{lg: '36px', xs: '24px'}}}>
                    {icon.name}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </>
        )}
      </Stack>
  )
}
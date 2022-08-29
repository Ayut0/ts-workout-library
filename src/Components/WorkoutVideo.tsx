import React from 'react'
import {video} from '../UI/Home'
import { Box, Stack, Typography } from '@mui/material'

type PropsFromWorkoutDetail = {
  workoutVideos?: video
  name?: string
}

export const WorkoutVideo: React.FC<PropsFromWorkoutDetail> = ({ workoutVideos, name }) => {
  console.log('rendered')

  return (
    <Box sx={{marginTop: { lg: '200px', xs: '20px' }}} p='20px' fontFamily='Mochiy Pop One'>
      <Typography variant='h4' mb='32px' fontFamily='Mochiy Pop One'>
          Watch <span style={{color: '#674CAE'}}> {name} </span>video
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
        sx={{
          flexDirection: {lg: 'row'},
          gap: {lg: '110px', xs: '0'}}}>
          {workoutVideos?.contents?.slice(0, 3)?.map((item, index:number) => (
              <a key={index} className='workout-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer'>
                <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{borderTopLeftRadius: '20px'}}></img>
                <Box>
                  <Typography variant='h5' sx={{fontSize: {lg: '28px', xs: '16px'}}} fontWeight='600'>
                    {item.video.title}
                  </Typography>
                  <Typography variant='h6' fontSize='16px'>
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
          ))}
      </Stack>
    </Box>
  )
}


import React from 'react';
import { Stack, Typography } from '@mui/material'
import Icon from '../Workout library-logos/Workout library-logos_black.png'

type PropsFromScrollBar = {
    bodyPart:any
    eachBodyPart: string
    setEachBodyPart: Function
}


export const BodyPartCard: React.FC<PropsFromScrollBar> = ({ bodyPart, eachBodyPart, setEachBodyPart} ) => {
  return (
    <Stack
        alignItems='center'
        justifyContent='center'
        direction='row'
        spacing={2}
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === eachBodyPart ? '4px solid #a862ea' : '',
            backgroundColor: '#f8f0fc',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '48px'
        }}
    >
        <img src={Icon}
            alt='cardIcon'
            className='body-part-icon'
            style={{width: '80px', height: '80px'}}>
        </img>
        <Typography>
            {bodyPart}
        </Typography>
    </Stack>
  )
}
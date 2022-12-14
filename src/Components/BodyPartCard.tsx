import React from 'react';
import { Stack, Typography } from '@mui/material'
import Icon from '../Workout library-logos/Workout library-logos_black.png'

type PropsFromScrollBar = {
    bodyPart:any
    eachBodyPart?: string
    setEachBodyPart?: Function
}

export const BodyPartCard: React.FC<PropsFromScrollBar> = ({ bodyPart, eachBodyPart, setEachBodyPart} ) => {
  return (
    <Stack
        alignItems='center'
        justifyContent='center'
        direction='column'
        spacing={2}
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === eachBodyPart ? '4px solid #a862ea' : '',
            backgroundColor: '#f8f0fc',
            borderBottomLeftRadius: '20px',
            width: {lg: '270px', xs: '200px'},
            height: {lg: '270px', xs: '200px'},
            cursor: 'pointer',
            gap: {lg: '48px', xs: '20px'}
        }}
        onClick={()=>{
            setEachBodyPart?.(bodyPart);
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
    >
        <img src={Icon}
            alt='cardIcon'
            className='body-part-icon'
            style={{width: '80px', height: '80px'}}>
        </img>
        <Typography fontSize='24px' fontWeight='bold' textTransform='capitalize' fontFamily='Mochiy Pop One'>
            {bodyPart}
        </Typography>
    </Stack>
  )
}
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../Workout library-logos/Workout library-logos_transparent.png'

export const Footer: React.FC = () =>{
    return(
        <Box mt='80px' bgcolor='#EEDEF6'>
            <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
                <Stack direction="row" alignItems='center' spacing={2} mt='12px'>
                    <img src={Logo} alt='logo' style={{width: '100px'}}/>
                    <Typography variant='h4' fontFamily='Mochiy Pop One' sx={{fontSize:{lg:'32px', xs:'18px'}}}>Be the best version of yourself</Typography>
                </Stack>
                <Typography variant='h5' pb='40px' mt='16px' color='#787878' sx={{fontSize:{lg:'20px', xs:'12px'}}}>
                Copyright &copy; 2022 Yuto Yamakita All rights Reserved
                </Typography>
            </Stack>
        </Box>
    )
}
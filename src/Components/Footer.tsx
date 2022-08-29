import { Box, Stack, Typography } from '@mui/material'
import Logo from '../Workout library-logos/Workout library-logos_transparent.png'

export const Footer: React.FC = () =>{
    return(
        <Box mt='80px' bgcolor='#EEDEF6'>
            <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
                <img src={Logo} alt='logo' style={{width: '100px'}}/>
                <Typography variant='h5' pb='40px' mt='20px'>
                Copyright &copy; 2022 Yuto Yamakita All rights Reserved
                </Typography>
            </Stack>
        </Box>
    )
}
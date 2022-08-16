import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Logo from '../Workout library-logos/Workout library-logos_transparent.png'

export const Navbar: React.FC = ()=> {
    return (
        <Stack direction='row' justifyContent='space-around' sx={{ gap: {sm:'122px', xs: '40px'}, justifyContent: 'none'}} px='20px'>
            <Link to='/'>
                <img src={Logo} alt='logo' style={{width: '100px'}}/>
            </Link>
            <Stack
                direction='row'
                gap='40px'
                fontSize='24px'
                alignItems='flex-end'
                >
                <Link to='/' style={{textDecoration: 'none', fontFamily: 'Mochiy Pop One'}}>HOME</Link>
                <a href="#workouts" style={{textDecoration: 'none', fontFamily: 'Mochiy Pop One'}}>Workouts</a>
            </Stack>
        </Stack>
    );
}
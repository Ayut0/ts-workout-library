import { useState } from "react"
import { Box } from '@mui/material';
import { HeroBanner } from "../Components/HeroBanner";
import { SearchWorkouts } from "../Components/SearchWorkouts";
import { Workouts } from "../Components/Workouts";

export const Home: React.FC = ()=>{
    return(
        <Box>
            <HeroBanner />
            <SearchWorkouts />
            <Workouts />
        </Box>
    )
}
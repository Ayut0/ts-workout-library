import { useState } from "react"
import { Box } from '@mui/material';
import { HeroBanner } from "../Components/HeroBanner";
import { SearchWorkouts } from "../Components/SearchWorkouts";
import { Workouts } from "../Components/Workouts";

export type Workout = {
    bodyPart: string
    equipment: string
    gifUrl: string
    id: string
    name: string
    target: string
  }

// export { Workout }

export const Home: React.FC = ()=>{
    const [eachBodyPart, setEachBodyPart] = useState<string>('all')
    const [workouts, setWorkouts] = useState<Workout[]>();

    console.log(eachBodyPart);
    return(
        <Box>
            <HeroBanner />
            {/* Re-write with useContext? */}
            <SearchWorkouts
                setWorkouts={setWorkouts}
                eachBodyPart={eachBodyPart}
                setEachBodyPart={setEachBodyPart}
             />
            <Workouts
                workouts={workouts}
                setWorkouts={setWorkouts}
                eachBodyPart={eachBodyPart}
                setEachBodyPart={setEachBodyPart}
            />
        </Box>
    )
}
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Detail } from "../Components/Detail"
import { WorkoutVideo } from "../Components/WorkoutVideo"
import { SimilarWorkout } from "../Components/SimilarWorkout"

import { fetchWorkout } from "../utilities/fetchWorkout"
import { Workout } from "./Home"


export const WorkoutDetail: React.FC = () =>{
    const [workoutDetail, setWorkoutDetail] = useState<Workout[]>();
    const { id } = useParams<string>();
    console.log(typeof(id));

    useEffect(() =>{
        const fetchWorkoutData = async() =>{
            const workoutDetailData:Workout[] = await fetchWorkout(`${process.env.REACT_APP_RAPID_API_ALL_WORKOUT}/${id}`);
            setWorkoutDetail(workoutDetailData)
        }

        fetchWorkoutData()
    }, [id])
    return(
        <Box>
            <Detail workoutDetail={workoutDetail}/>
            <WorkoutVideo />
            <SimilarWorkout />
        </Box>
    )
}
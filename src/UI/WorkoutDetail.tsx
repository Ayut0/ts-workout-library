import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Detail } from "../Components/Detail"
import { WorkoutVideo } from "../Components/WorkoutVideo"
import { SimilarWorkout } from "../Components/SimilarWorkout"

import { fetchWorkout, fetchWorkoutVideos} from "../utilities/fetchWorkout"
import { Workout, video, } from "./Home"

//define the type of youtube videos

export const WorkoutDetail: React.FC = () =>{
    const [workoutDetail, setWorkoutDetail] = useState<Workout>();
    const [workoutVideos, setWorkoutVideos] = useState<video | undefined>();
    const [targetMuscleWorkouts, setTargetMuscleWorkouts] = useState<Workout>()
    const [sameEquipmentWorkouts, setSameEquipmentWorkouts] = useState<Workout>()
    const { id } = useParams<string>();

    useEffect(() =>{
        const fetchWorkoutData = async() =>{
            const workoutDetailData:Workout = await fetchWorkout(`${process.env.REACT_APP_RAPID_API_ALL_WORKOUT}/exercise/${id}`);
            setWorkoutDetail(workoutDetailData)
            //Get videos from youtube
            const workoutVideoData:video = await fetchWorkoutVideos(`${process.env.REACT_APP_RAPID_API_YOUTUBE_URL}/search?query=${workoutDetailData.name}`);
            setWorkoutVideos(workoutVideoData)

            //Get similar target workout data
            const targetMuscleWorkoutsData:Workout = await fetchWorkout(`${process.env.REACT_APP_RAPID_API_ALL_WORKOUT}/target/${workoutDetailData.target}`);
            setTargetMuscleWorkouts(targetMuscleWorkouts)
            const sameEquipmentWorkoutsData:Workout = await fetchWorkout(`${process.env.REACT_APP_RAPID_API_ALL_WORKOUT}/equipment/${workoutDetailData.target}`)
            setSameEquipmentWorkouts(sameEquipmentWorkouts)

        }

        fetchWorkoutData()
    }, [id])
    return(
        <Box>
            <Detail workoutDetail={workoutDetail}/>
            <WorkoutVideo workoutVideos={workoutVideos} name={workoutDetail?.name}/>
            <SimilarWorkout sameTargetWorkouts={targetMuscleWorkouts} sameEquipmentWorkouts={sameEquipmentWorkouts}/>
        </Box>
    )
}
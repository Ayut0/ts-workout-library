import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Detail } from "../Components/Detail"
import { WorkoutVideo } from "../Components/WorkoutVideo"
import { SimilarWorkout } from "../Components/SimilarWorkout"

import { fetchWorkout, fetchWorkoutVideos} from "../utilities/fetchWorkout"
import { Workout, Video } from "./Home"

//define the type of youtube videos


export const WorkoutDetail: React.FC = () =>{
    const [workoutDetail, setWorkoutDetail] = useState<Workout>();
    const [workoutVideo, setWorkoutVideos] = useState<Video>();
    const { id } = useParams<string>();
    console.log(typeof(id));

    useEffect(() =>{
        const fetchWorkoutData = async() =>{
            const workoutDetailData:Workout = await fetchWorkout(`${process.env.REACT_APP_RAPID_API_ALL_WORKOUT}/exercise/${id}`);
            setWorkoutDetail(workoutDetailData)
            //Get videos from youtube
            const workoutVideoData:Video = await fetchWorkoutVideos(`${process.env.REACT_APP_RAPID_API_YOUTUBE_URL}/search/${workoutDetailData.name}`);
            //Set the type of youtube video object
            setWorkoutVideos(workoutVideoData)
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
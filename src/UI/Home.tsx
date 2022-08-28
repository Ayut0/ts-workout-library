import { useState } from "react"
import { Box } from '@mui/material';
import { HeroBanner } from "../Components/HeroBanner";
import { SearchWorkouts } from "../Components/SearchWorkouts";
import { Workouts } from "../Components/Workouts";

//Type for workout data
export type Workout = {
    bodyPart: string
    equipment: string
    gifUrl: string
    id: string
    name: string
    target: string
}

//Type for Youtube video
export interface video {
    contents?: (ContentsEntity)[] | null;
    estimatedResults: string;
    next: string;
}
export interface ContentsEntity {
    video: Video;
}
export interface Video {
    channelId: string;
    channelName: string;
    description?: string | null;
    lengthText: string;
    publishedTimeText?: string | null;
    thumbnails: (ThumbnailsEntity)[];
    title: string;
    videoId: string;
    viewCountText: string;
}
export interface ThumbnailsEntity {
    height: number;
    url: string;
    width: number;
}


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
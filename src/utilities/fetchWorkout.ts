import axios from "axios"

export const workoutOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':   process.env.REACT_APP_RAPID_API_KEY,
    }
};

export const fetchWorkout = async(options:any) =>{
    console.log(options.url)
    const res = await axios.request(options);
    const data = await res.data;

    return data;
}


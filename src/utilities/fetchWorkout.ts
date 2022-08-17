import axios from "axios"


export const fetchWorkout = async(url:string) =>{
  const workoutOptions:any = {
      method: 'GET',
      url: url,
      headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key':   process.env.REACT_APP_RAPID_API_KEY,
      }
  };

    const res = await axios.request(workoutOptions);
    const data = await res.data;

    return data;
}


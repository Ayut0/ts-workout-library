import axios from "axios"

export const workoutOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
    }
};
//Cannot get data from API
// export const fetchWorkout = async(options:any) =>{

//     const res = await axios.get(options.url);
//     const data = await res.data;

//     return data;
// }

export const test = axios.request(workoutOptions).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
import axios from "axios"

//Create a function to make it short and readable

// export const youtubeSearchOptions = {
//   method: 'GET',
//   url
//   header: {
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_YOUTUBE_KEY
//   }
// }

export const fetchWorkoutVideos = async(url:string) => {
  const youtubeSearchOptions:any = {
    method: 'GET',
    url: url,
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_YOUTUBE_KEY
    }
  }

  try{
    const res = await axios.request(youtubeSearchOptions);
  
    const data = await res.data;

    return data;
  }catch(e:any){
    console.log(e.message)
    console.log(url)
  }

}

export const fetchWorkout = async(url:string) =>{
  const workoutOptions:any = {
      method: 'GET',
      url: url,
      headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key':   process.env.REACT_APP_RAPID_API_KEY,
      }
  };

  try{
    const res = await axios.request(workoutOptions);
    const data = await res.data;
  
    return data;
  }catch(e:any){
    console.log(e.message)
    console.log(url)
  }

}




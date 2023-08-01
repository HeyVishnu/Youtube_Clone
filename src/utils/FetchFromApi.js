import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    
    url: BASE_URL,
    params: {
      maxResults:'100',
      
    },
    headers: {
      'X-RapidAPI-Key': 'b7cc151256mshe84e9ff075451b5p1b4bc2jsn186a5fa0c9c1',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const FetchFromApi = async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }
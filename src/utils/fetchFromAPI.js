import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    method: 'GET',
    params: {
        // relatedToVideoId: '7ghhRHRP6t4',
        // part: 'id,snippet',
        // type: 'video',
        maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '31a8bc0a0fmsh76eadb7230ed170p14f86ejsndcbb3bbcabee',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}


  
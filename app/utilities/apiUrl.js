const API_KEY="pgJdLNKGn0jyFXLWiavoI3RaMHNjeTjtXkNxNfvw";
const APOD_PATH='planetary/apod';
const ROVER_PHOTOS='mars-photos/api/v1/rovers/curiosity/photos';

//'sol=1000'

const buildApodUrl= (params) => buildApiUrl(APOD_PATH,params)
export const buildRoverUrl= (params) => buildApiUrl(ROVER_PHOTOS,params)
const buildApiUrl = (app_key,params) => {
    let apiUrl = `https://api.nasa.gov/${app_key}?api_key=${API_KEY}`;
    for (const key in params) apiUrl += `&${key}=${params[key]}`;
    return apiUrl;
};

export default buildApodUrl;

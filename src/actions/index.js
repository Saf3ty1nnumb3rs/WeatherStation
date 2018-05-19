
import axios from 'axios';
const API_KEY = '531f5508f22bb1668df89181cf760723';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}